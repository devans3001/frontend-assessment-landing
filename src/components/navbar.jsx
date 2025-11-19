import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-background/95 flex justify-between items-center py-4 px-6 backdrop-blur-sm border-b border-border">
      <div className="flex items-center gap-2 ">
        <h1 className="w-10 h-10 rounded-lg text-center text-white font-bold m-auto bg-gradient-hero">
          AT
        </h1>
        <h1 className="flex flex-col font-bold text-foreground">
          AFCFTA{" "}
          <span className="text-(--blue-muted-foreground) text-xs font-medium">
            Digital Trade Portal
          </span>
        </h1>
      </div>

      <ul className="flex items-center gap-1.5">
        {["features", "benefits", "contact"].map((ele) => (
          <li key={ele} className="p-1.5">
            <Link href={`/${ele}`} className="capitalize hover:text-(--blue-primary) text-(--blue-foreground) transition-colors font-semibold">{ele}</Link>
          </li>
        ))}
      </ul>

      <div className="flex gap-2 capitalize font-semibold">
        <Button variant={"outline"} className={"capitalize font-semibold border-0"}>sign in</Button>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground capitalize font-semibold">get started</Button>
      </div>
    </nav>
  );
}

export default Navbar;
