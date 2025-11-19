"use client"
import { Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Loading component for Suspense fallback
function ResultLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="w-24 h-24 mx-auto mb-6 bg-gray-200 rounded-full animate-pulse"></div>
        <div className="h-8 bg-gray-200 rounded animate-pulse mb-4"></div>
        <div className="h-4 bg-gray-200 rounded animate-pulse mb-6"></div>
        <div className="space-y-3">
          <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

// Main component that uses useSearchParams
function ResultContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const score = parseInt(searchParams.get('score')) || 0;
  
  const isPerfectScore = score === 100;

  const handleRetry = () => {
    router.push('/assessment');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center text-2xl font-bold mb-6 ${
          isPerfectScore ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
        }`}>
          {score}%
        </div>
        
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {isPerfectScore ? 'Perfect Score! 🎉' : 'Not Quite There Yet'}
        </h1>
        
        <p className="text-gray-600 mb-6">
          {isPerfectScore 
            ? "Congratulations! You've scored 100% and can now proceed to registration."
            : `You scored ${score}%. You need 100% to proceed to registration.`
          }
        </p>

        <div className="space-y-3">
          {isPerfectScore ? (
            <Link 
              href="/assessment/register"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200 block"
            >
              Proceed to Registration
            </Link>
          ) : (
            <Button 
              onClick={handleRetry}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              Try Again
            </Button>
          )}
          <Link 
            href="/"
            className="w-full border border-gray-300 text-gray-700 font-bold py-3 px-6 rounded-lg transition duration-200 block text-center"
          >
            Back to Home
          </Link>
        </div>

        {isPerfectScore && (
          <p className="text-sm text-green-600 mt-4">
            ✅ You've unlocked registration access!
          </p>
        )}
      </div>
    </div>
  );
}

// Main page component with Suspense boundary
export default function ResultPage() {
  return (
    <Suspense fallback={<ResultLoading />}>
      <ResultContent />
    </Suspense>
  );
}