import Link from 'next/link';

export default function AssessmentStart() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Quick Assessment</h1>
        <p className="text-gray-600 mb-6">
          Complete this 4-question survey to test your knowledge. Score 100% to proceed to registration.
        </p>
        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
            <span className="text-gray-700">Questions</span>
            <span className="font-bold text-blue-600">4</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
            <span className="text-gray-700">Required Score</span>
            <span className="font-bold text-green-600">100%</span>
          </div>
        </div>
        <Link 
          href="/assessment/survey"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200 block text-center"
        >
          Start Assessment
        </Link>
      </div>
    </div>
  );
}