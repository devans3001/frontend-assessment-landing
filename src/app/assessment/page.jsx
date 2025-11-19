// app/assessment/page.js - UPDATED
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AssessmentStart() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AFC-FTA Readiness Assessment
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Evaluate your trade readiness and discover opportunities within the African Continental Free Trade Area. Complete our assessment to get personalized insights.
          </p>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="text-2xl font-bold text-blue-600 mb-2">4</div>
              <div className="text-gray-700">Quick Questions</div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="text-2xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-700">Score Required</div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="text-2xl font-bold text-blue-600 mb-2">15</div>
              <div className="text-gray-700">Question Pool</div>
            </div>
          </div>

          <Link href="/assessment/survey">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold">
              Start Assessment
            </Button>
          </Link>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Take Assessment</h3>
              <p className="text-gray-600">Answer 4 random questions from our knowledge base</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Get Your Score</h3>
              <p className="text-gray-600">Receive immediate feedback on your performance</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Unlock Registration</h3>
              <p className="text-gray-600">Perfect score grants access to full platform features</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}