"use client";
import { Rocket, Shield, Target, UserPlus } from "lucide-react";
import React, { useRef } from "react";
import { useSize } from "react-haiku";

function HowItWorks() {
  const tag = useRef(null);
  const { height } = useSize(tag);

  const val = 0.25 * height;

  //   console.log(val);
  return (
    <div className="py-20 bg-background" >
      <div className="container mx-auto px-4 flex flex-col items-center gap-4 justify-center">
        <h1 className="text-(--blue-foreground) text-4xl md:text-5xl font-bold">
          How It Works
        </h1>
        <p className="text-(--blue-muted-foreground) text-lg font-semibold">
          Get started in four simple steps
        </p>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {[
            {
              icon: UserPlus,
              title: "Sign Up",
              desc: "Create your business account with basic information",
            },
            {
              icon: Shield,
              title: "Complete Verification",
              desc: "Submit documents and complete identity verification",
            },
            {
              icon: Target,
              title: "Select Categories",
              desc: "Choose your trade categories and target countries",
            },
            {
              icon: Rocket,
              title: "Start Trading",
              desc: "Get matched with opportunities and start trading",
            },
          ].map((ele, i) => (
            <div
              ref={tag}
              key={ele.title}
              className="flex flex-col gap-3 items-center p-2 text-center"
            >
              <div className="relative w-32 h-32 rounded-full z-10 bg-gradient-to-br from-royal-blue via-electric-blue to-aqua flex justify-center items-center p-1">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <ele.icon className="w-12 h-12 text-primary" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-white rounded-full flex justify-center items-center z-12 bg-primary">
                    {i + 1}
                  </div>
                </div>
              </div>
              <h1 className="text-xl text-(--blue-foreground) font-bold mt-2">
                {ele.title}
              </h1>
              <p className="text-center leading-relaxed text-(--blue-muted-foreground)">
                {ele.desc}
              </p>
            </div>
          ))}

          <div
            className="hidden md:block absolute bg-gradient-to-r from-royal-blue via-electric-blue to-aqua z-1 h-0.5 w-[calc(100%-11rem)] left-1/2 -translate-x-1/2"
            style={{ top: val }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
//
