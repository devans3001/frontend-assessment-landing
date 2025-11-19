'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getRandomQuestions } from '@/lib/data';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from 'sonner';

export default function Survey() {
  const router = useRouter();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [hasAnsweredAtLeastOne, setHasAnsweredAtLeastOne] = useState(false);

  // Initialize random questions
  useEffect(() => {
    const randomQuestions = getRandomQuestions();
    setQuestions(randomQuestions);
  }, []);

  // Check if at least one question is answered
  useEffect(() => {
    const answeredCount = Object.keys(answers).length;
    setHasAnsweredAtLeastOne(answeredCount > 0);
  }, [answers]);

  // Safe guard for empty questions
  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p>Loading questions...</p>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestionIndex];
  const currentAnswer = answers[question.id];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const answeredQuestions = Object.keys(answers).length;
  const totalQuestions = questions.length;
  const unansweredQuestions = totalQuestions - answeredQuestions;

  const handleAnswer = (answer) => {
    const newAnswers = { ...answers, [question.id]: answer };
    setAnswers(newAnswers);
  };

  const goToNext = () => {
    if (isLastQuestion) {
      // Check if there are unanswered questions when trying to submit
      if (unansweredQuestions > 0) {
        setShowSubmitModal(true);
      } else {
        finishSurvey();
      }
    } else {
      // Just move to next question without any modal
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToPrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateScore = () => {
    let score = 0;
    Object.keys(answers).forEach(qId => {
      const q = questions.find(q => q.id === qId);
      if (q && answers[qId] === q.correctAnswer) {
        score += q.points;
      }
    });
    return score;
  };

  const finishSurvey = () => {
    if (!hasAnsweredAtLeastOne) {
      toast.info("Please answer at least one question before submitting!");
      return;
    }
    
    const finalScore = calculateScore();
    
    // Set access flag for perfect scores
    if (finalScore === 100) {
      sessionStorage.setItem('perfectScore', 'true');
    }
    
    router.push(`/assessment/result?score=${finalScore}`);
  };

  const handleSubmitWithUnanswered = () => {
    if (!hasAnsweredAtLeastOne) {
      alert("Please answer at least one question before submitting!");
      setShowSubmitModal(false);
      return;
    }
    
    // User confirmed they want to submit with unanswered questions
    finishSurvey();
    setShowSubmitModal(false);
  };

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
            <span>Answered: {answeredQuestions}/{totalQuestions}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">{question.question}</h2>
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className={`w-full text-left p-4 border rounded-lg transition duration-200 ${
                  currentAnswer === option 
                    ? 'bg-blue-50 border-blue-300 text-blue-700' 
                    : 'border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <Button
            onClick={goToPrev}
            variant="outline"
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </Button>
          
          <Button
            onClick={goToNext}
            className="bg-blue-600 hover:bg-blue-700"
          >
            {isLastQuestion ? 'Finish Survey' : 'Next Question'}
          </Button>
        </div>
      </div>

      {/* Submit with Unanswered Questions Modal - ONLY shows on submission attempt */}
      <Dialog open={showSubmitModal} onOpenChange={setShowSubmitModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Unanswered Questions</DialogTitle>
            <DialogDescription>
              You have {unansweredQuestions} unanswered question{unansweredQuestions > 1 ? 's' : ''}. 
              Unanswered questions will be marked as incorrect.
              {!hasAnsweredAtLeastOne && " You need to answer at least one question to submit."}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex flex-col sm:flex-row gap-2">
            <Button 
              variant="outline" 
              onClick={() => setShowSubmitModal(false)}
              className="w-full sm:w-auto"
            >
              Continue Answering
            </Button>
            <Button 
              onClick={handleSubmitWithUnanswered}
              disabled={!hasAnsweredAtLeastOne}
              className="w-full sm:w-auto"
            >
              {!hasAnsweredAtLeastOne 
                ? "Answer at least one question" 
                : "Submit Anyway"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}