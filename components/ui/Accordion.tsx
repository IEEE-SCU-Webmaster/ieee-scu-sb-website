"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

interface AccordionItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem = ({ question, answer, isOpen, onClick }: AccordionItemProps) => {
  return (
    <div className="border-border border-b">
      <button
        className="flex w-full items-center justify-between py-5 text-left text-lg font-semibold transition-colors hover:text-primary focus:outline-none"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="pr-4">{question}</span>
        <ChevronDownIcon
          className={`h-5 w-5 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-primary" : "text-slate-500"
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden text-slate-700 dark:text-slate-300">{answer}</div>
      </div>
    </div>
  );
};

interface AccordionProps {
  items: { question: string; answer: React.ReactNode }[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleItem = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="mx-auto w-full max-w-4xl divide-y divide-border rounded-2xl border border-border bg-background p-4 shadow-sm sm:p-8">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onClick={() => toggleItem(index)}
        />
      ))}
    </div>
  );
}
