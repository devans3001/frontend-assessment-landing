import { ArrowRight, Globe, TrendingUp } from "lucide-react";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      <div className="absolute top-40 right-20 w-20 h-20 rounded-full bg-aqua/20 animate-float"></div>
      <div className="absolute top-1/3 left-1/4 w-12 h-12 rounded-full bg-electric-blue/20 animate-float" style={{animationDelay: 2}}></div>
      <div className="relative container mx-auto  px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* text  */}
          <div className="space-y-8 animate-fade-in container px-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border">
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium text-foreground">
                Connecting Africa Through Trade
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              National AfCFTA{" "}
              <span className="bg-gradient-to-r from-royal-blue via-electric-blue to-aqua bg-clip-text text-transparent">
                Digital Trade Portal
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Connecting Nigerian businesses to Africa through seamless digital
              trade. Register, verify, and unlock new opportunities across the
              continent.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary-foreground rounded-md bg-primary hover:bg-primary/90 text-lg h-14 px-8 group">
                Get Started
                <ArrowRight />
              </button>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md text-lg h-14 px-8">
                Learn More
              </button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center">
                  <TrendingUp />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">
                    10,000+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Registered Businesses
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-aqua to-gold flex items-center justify-center">
                  <Globe />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">54</div>
                  <div className="text-sm text-muted-foreground">
                    African Countries
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* image  */}
          <div className="relative animate-fade-in-slow">
            {/* Aspect ratio wrapper */}
            <div className="relative rounded-3xl overflow-hidden shadow-card-hover w-full h-auto aspect-video px-5">
              <Image
                src="https://holo-harmony-forge.lovable.app/assets/hero-illustration-BZZrFxTM.jpg"
                alt="AfCFTA Digital Trade Network"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 600px"
                priority
              />
            </div>

            {/* Glows */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gold/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-aqua/30 rounded-full blur-3xl"></div>
          </div>

          <div></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
