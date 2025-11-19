import { FileCheck, Search, CircleCheckBig } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

function QuickAccess() {
  return (
    <div
      className="min-h-screen flex flex-col gap-7 justify-center items-center py-2 px-4"
      style={{ backgroundColor: "hsl(var(--blue-muted) / 0.3)" }}
    >
      <h1 className="text-(--blue-foreground) text-4xl md:text-5xl font-bold">
        Quick Access
      </h1>
      <p className="text-(--blue-muted-foreground) text-lg">
        Everything you need to start trading across Africa in three simple steps
      </p>

      <div className="flex flex-col md:flex-row gap-4">
        {[
          {
            title: "Apply to Trade Across Africa",
            desc: "Register your business, complete verification, and submit required documents to start trading across Africa",
            btn: "Apply Now",
            icon: FileCheck,
            gradient: "bg-gradient-to-br from-royal-blue to-electric-blue",
          },
          {
            title: "Find Verified Nigerian Businesses",
            desc: "Browse our comprehensive directory of verified Nigerian exporters and service providers ready for cross-border trade.",
            btn: "Browse Directory",
            icon: Search,
            gradient: "bg-gradient-to-br from-electric-blue to-aqua",
          },
          {
            title: "Check AfCFTA Compliance",
            desc: "Access tools for Rules of Origin verification, tariff schedules, and compliance requirements for seamless trade.",
            btn: "Start Check",
            icon: CircleCheckBig,
            gradient: "bg-gradient-to-br from-aqua to-gold",
          },
        ].map((ele) => (
          <div
            key={ele.btn}
            className="rounded-lg text-card-foreground shadow-sm p-8 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 animate-fade-in bg-gradient-card border-0 flex flex-col gap-7 justify-between"
          >
            <div
              className={`w-16 h-16 rounded-2xl text-white flex items-center justify-center mb-6 ${ele.gradient}`}
            >
              <ele.icon />
            </div>
            <h1 className="text-3xl text-(--blue-foreground) font-bold">
              {ele.title}
            </h1>
            <p className="leading-relaxed text-(--blue-muted-foreground)">
              {ele.desc}
            </p>
            <Button>{ele.btn}</Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuickAccess;
