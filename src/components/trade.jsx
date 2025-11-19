import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

function Trade() {
  return (
    <div className="bg-gradient-hero py-15">
      <div className="max-w-4xl mx-auto text-white text-center">
        <h4 className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-8">
          <Sparkles /> Join the Future of African Trade
        </h4>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Begin Your AfCFTA Digital Trade Journey Today
        </h1>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Register your business and unlock new trade opportunities across the
          African continent. Join thousands of businesses already trading
          digitally.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            className={
              "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-md bg-white text-primary hover:bg-white/90 text-lg h-14 px-8 group"
            }
          >
            Get Started Now <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"/>
          </Button>
          <Button
            className={
              "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-md bg-white text-primary hover:bg-white/90 text-lg h-14 px-8 group"
            }
          >
            Schdule a Demo
          </Button>
        </div>

        <div className="flex items-center justify-center gap-12 mt-12 text-white/80">
          <div className="text-center">
            <p className="text-3xl font-bold text-white">10,000</p>
            <p className="text-sm">Registered Businesses</p>
          </div>
          <div className="w-px h-12 bg-white/30"></div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white">54</p>
            <p className="text-sm">African Countries</p>
          </div>
          <div className="w-px h-12 bg-white/30"></div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white">$2B+</p>
            <p className="text-sm">Trade Volume</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trade;
