

import { Earth, Lock, TrendingUp, Zap } from 'lucide-react'
import React from 'react'

function Benefits() {
  return (
     <div
      className="flex flex-col items-center gap-4 justify-center px-4 py-12"
      style={{ backgroundColor: "var(--blue-muted) / 0.3" }}
    >
      <h1 className="text-(--blue-foreground) text-4xl md:text-5xl font-bold">
        Benefits & Impact
      </h1>
      <p className="text-(--blue-muted-foreground) text-lg font-semibold">
       Transforming African trade through digital innovation
      </p>

      <div className="relative max-w-5xl grid md:grid-cols-2 gap-8 mt-5">
        {[
          {
            icon: TrendingUp,
            title: "Empower MSMEs",
            desc: "Level the playing field for small businesses to compete in continental markets",
            grad:"bg-gradient-to-br from-royal-blue to-electric-blu"
          },
          {
            icon: Earth,
            title: "Break Trade Barriers",
            desc: "Simplify complex cross-border processes and reduce time-to-market",
            grad:"bg-gradient-to-br from-electric-blue to-aqua"
          },
          {
            icon: Lock,
            title: "Ensure Compliance",
            desc: "Built-in tools for AfCFTA rules of origin and regulatory requirements",
            grad:"bg-gradient-to-br from-aqua to-gold"
          },
          {
            icon: Zap,
            title: "Drive Efficiency",
            desc: "Automated workflows, smart matching, and digital documentation",
            grad:"bg-gradient-to-br from-gold to-royal-blue"
          },
        ].map((ele, i) => (
          <div
            key={ele.title}
            className="relative group animate-fade-in  p-8 rounded-3xl border border-border bg-card hover:shadow-card-hover transition-all duration-300"
          >
            <div
              className={`relative w-16 h-16 rounded-2xl z-10  flex justify-center items-center ${ele.grad}`}
              
            >
              <ele.icon className="w-8 h-8 text-white" />
             
            </div>
            <h1 className="text-2xl text-(--blue-foreground) font-bold my-2">
              {ele.title}
            </h1>
            <p className=" leading-relaxed text-(--blue-muted-foreground)">
              {ele.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Benefits