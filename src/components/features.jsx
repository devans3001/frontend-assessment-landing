

import { BookOpen, ChartColumn, CreditCard, FileText,Package,Shield, Upload, Users } from 'lucide-react'
import React from 'react'

function Feature() {
  return (
       <div
      className=" flex flex-col gap-6 justify-center py-15"
      style={{ backgroundColor: "var(--blue-muted) / 0.3" }}
    >
      <h1 className="text-foreground text-4xl md:text-5xl font-bold text-center">
       Platform Features
      </h1>
      <p className="text-muted-foreground text-lg font-thin text-center">
       Everything you need for successful cross-border trade in one comprehensive platform
      </p>

      <div className="max-w-7xl grid md:grid-cols-2 lg:grid-cols-4 mt-7 mx-auto gap-6">
        {[
          {
            icon: Shield,
            title: "Digital Identity Verification",
            desc: "Secure and instant verification of business credentials and ownership",
          },
          {
            icon: FileText,
            title: "Trade Readiness Test",
            desc: "Assess your business readiness for cross-border trade",
          },
          {
            icon: Upload,
            title: "Document & e-Certification",
            desc: "Upload and manage all trade documents in one secure place",
          },
          {
            icon: Package,
            title: "Product & Service Catalog",
            desc: "Showcase your offerings to potential buyers across Africa",
          },
          {
            icon: CreditCard,
            title: "Payment & Escrow",
            desc: "Secure payment processing and escrow services for safe transactions",
          },
          {
            icon: Users,
            title: "Smart Matchmaking",
            desc: "AI-powered matching with relevant trade partners and opportunities",
          },
          {
            icon: BookOpen,
            title: "Knowledge Hub",
            desc: "Access trade guides, regulations, and expert support via chatbot",
          },
          {
            icon: ChartColumn,
            title: "Government Dashboard",
            desc: "Real-time analytics and monitoring for policy makers",
          },
        ].map((ele, i) => (
          <div
            key={ele.title}
            className="space-y-2 rounded-lg text-card-foreground shadow-sm p-6 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 animate-fade-in bg-gradient-card border-0"
          >
            {/* <div
              className="relative w-32 h-32 rounded-full z-10 border-3 border-red-500 flex justify-center items-center"
              style={{ backgroundColor: "var(--blue-muted) / 0.3" }}
            > */}
              <ele.icon className="" />
            
            {/* </div> */}
            <h1 className="text-xl text-(--blue-foreground) font-bold mt-2">
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

export default Feature