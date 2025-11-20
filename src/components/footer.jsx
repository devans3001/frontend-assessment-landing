import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <footer className="bg-deep-navy py-12">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-hero flex items-center justify-center text-white font-bold">
                AT
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight text-white">AfCFTA</span>
                <span className="text-xs text-white/70 leading-tight">
                  Digital Trade Portal
                </span>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Connecting Nigerian businesses to Africa through seamless digital
              trade.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Facebook className="text-white"/>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Twitter className="text-white"/>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Instagram className="text-white"/>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  Benefits
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  Knowledge Hub
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  Trade Guides
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Contact Us</h3>

            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="w-5 h-5 shrink-0"/>
                <span>
                  Federal Ministry of Industry, Trade & Investment, Abuja,
                  Nigeria
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <Phone  className="w-5 h-5 shrink-0"/>
                <span>+234 (0) 900 000 0000</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <Mail  className="w-5 h-5 shrink-0"/>
                <span>info@afcfta.gov.ng</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <p>
              © {new Date().getFullYear()} AfCFTA Digital Trade Portal. All
              rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
