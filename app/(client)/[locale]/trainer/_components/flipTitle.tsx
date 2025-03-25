import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export function FlipTitle() {
  const words = ["Body", "Mind", "Life"];

  return (
    <div className="flex justify-center items-center px-4 font-mono tracking-tight mb-10 bg-black text-white py-6 w-full">
      <div className="text-4xl mx-auto font-normal text-neutral-300 dark:text-neutral-200">
        Boxing: Power for <FlipWords words={words} />
      </div>
    </div>
  );
}

export default FlipTitle;
