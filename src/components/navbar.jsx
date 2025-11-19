"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, ChevronDown } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "features", comingSoon: true },
    { label: "benefits", comingSoon: true },
    { label: "contact", comingSoon: true },
    { label: "assessment", comingSoon: false },
  ];

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-background/95 flex justify-between items-center py-4 px-6 backdrop-blur-sm border-b border-border">
      {/* Logo */}
      <Link href={"/"}>
        <div className="flex items-center gap-2">
          <h1 className="w-10 h-10 rounded-lg text-center text-white font-bold m-auto bg-gradient-hero flex items-center justify-center">
            AT
          </h1>
          <h1 className="flex flex-col font-bold text-foreground">
            AFCFTA{" "}
            <span className="text-(--blue-muted-foreground) text-xs font-medium">
              Digital Trade Portal
            </span>
          </h1>
        </div>
      </Link>

      {/* Desktop Navigation - Hidden on mobile */}
      <div className="hidden md:flex items-center gap-1.5">
        <ul className="flex items-center gap-1.5">
          {menuItems.map((item) => (
            <li key={item.label} className="p-1.5 relative">
              <Link
                href={
                  item.comingSoon
                    ? `/coming-soon/${item.label}`
                    : `/${item.label}`
                }
                className={`capitalize hover:text-(--blue-primary) text-(--blue-foreground) transition-colors font-semibold ${
                  item.comingSoon ? "opacity-70" : ""
                }`}
              >
                {item.label}
                {item.comingSoon && (
                  <span className="absolute -top-1 -right-1 text-xs bg-yellow-100 text-yellow-800 px-1 rounded text-[10px]">
                    Soon
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop Buttons - Hidden on mobile */}
      <div className="hidden md:flex gap-2 capitalize font-semibold">
        <Link href="/coming-soon/contact">
          <Button
            variant={"outline"}
            className={"capitalize font-semibold border-0"}
          >
            sign in
          </Button>
        </Link>
        <Link href="/assessment">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground capitalize font-semibold">
            get started
          </Button>
        </Link>
      </div>

      {/* Mobile Menu - Show on small screens */}
      <div className="md:hidden flex gap-2">
        <Link href="/assessment">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground capitalize font-semibold">
            get started
          </Button>
        </Link>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col h-full gap-7">
              {/* Logo in Mobile Menu */}
              <div className=" gap-2 mb-8 p-3">
                <h1 className="w-8 h-8 rounded-lg text-center text-white font-bold bg-gradient-hero flex items-center justify-center">
                  AT
                </h1>
                <h1 className="flex flex-col font-bold text-foreground">
                  AFCFTA{" "}
                  <span className="text-(--blue-muted-foreground) text-xs font-medium">
                    Digital Trade Portal
                  </span>
                </h1>
              </div>

              {/* Mobile Navigation Links */}
              <div className="flex-1 space-y-4">
                {menuItems.map((item) => (
                  <div key={item.label} className="relative">
                    <Link
                      href={
                        item.comingSoon
                          ? `/coming-soon/${item.label}`
                          : `/${item.label}`
                      }
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between w-full p-3 rounded-lg capitalize hover:bg-accent hover:text-accent-foreground transition-colors font-semibold ${
                        item.comingSoon ? "opacity-70" : ""
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.comingSoon && (
                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                          Soon
                        </span>
                      )}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Mobile Dropdown Alternative (if you prefer dropdown instead of sheet) */}
      {/* Uncomment below if you want dropdown instead of sheet */}
      {/*
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Menu className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            {menuItems.map((item) => (
              <DropdownMenuItem key={item.label} asChild>
                <Link 
                  href={item.comingSoon ? `/coming-soon/${item.label}` : `/${item.label}`}
                  className={`flex items-center justify-between w-full ${
                    item.comingSoon ? 'opacity-70' : ''
                  }`}
                >
                  <span className="capitalize">{item.label}</span>
                  {item.comingSoon && (
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                      Soon
                    </span>
                  )}
                </Link>
              </DropdownMenuItem>
            ))}
            <DropdownMenuItem asChild>
              <Link href="/coming-soon/contact" className="w-full">
                Sign In
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/assessment" className="w-full font-semibold">
                Get Started
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      */}
    </nav>
  );
}

export default Navbar;
