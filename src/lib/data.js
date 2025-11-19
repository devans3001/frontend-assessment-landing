export const SURVEY_QUESTIONS = [
 {
    id: '1',
    question: "What does AFC-FTA stand for?",
    type: 'multiple-choice',
    options: [
      "African Continental Free Trade Area",
      "African Cooperation for Trade Advancement", 
      "African Commerce and Financial Trade Agreement",
      "African Corporate Free Trade Alliance"
    ],
    correctAnswer: "African Continental Free Trade Area",
    points: 25
  },
  {
    id: '2',
    question: "Which year did the AFC-FTA agreement officially commence?",
    type: 'multiple-choice',
    options: ["2018", "2019", "2020", "2021"],
    correctAnswer: "2021",
    points: 25
  },
  {
    id: '3',
    question: "What is the primary goal of AFC-FTA?",
    type: 'multiple-choice',
    options: [
      "Create a single continental market for goods and services",
      "Establish a common currency for Africa",
      "Create a military alliance between African nations",
      "Standardize education systems across Africa"
    ],
    correctAnswer: "Create a single continental market for goods and services",
    points: 25
  },
  {
    id: '4', 
    question: "How many African Union member states have signed the AFC-FTA agreement?",
    type: 'multiple-choice',
    options: ["44", "54", "49", "55"],
    correctAnswer: "54",
    points: 25
  }
];

// Function to get 4 random questions
export function getRandomQuestions() {
  const shuffled = [...SURVEY_QUESTIONS].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 4);
}