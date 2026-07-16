"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface AccordionItem {
  title: string;
  description: string;
}

interface AccordionProps {
  data: AccordionItem[];
  className?: string;
}

const ExpandIcon = ({ isOpen }: { isOpen: boolean }) => (
  <motion.svg width="28" height="28" viewBox="0 0 24 24">
    <line
      x1="5"
      y1="12"
      x2="19"
      y2="12"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <motion.line
      x1="12"
      y1="5"
      x2="12"
      y2="19"
      stroke="currentColor"
      strokeWidth="1.5"
      animate={{ rotate: isOpen ? 90 : 0 }}
      transition={{ duration: 0.3 }}
      style={{ originX: "50%", originY: "50%" }}
    />
  </motion.svg>
);

const Accordion = ({ data, className = "" }: AccordionProps) => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index],
    );
  };

  return (
    <div className={className}>
      {data.map((item, index) => {
        const isOpen = openItems.includes(index);

        return (
          <div
            key={index}
            className="group border-2 rounded-lg mt-4 p-2 border-white/10"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="flex w-full items-center justify-between  py-8 text-left"
            >
              <div className="flex items-center gap-6">
                <h3 className="text-md font-medium text-white">{item.title}</h3>
              </div>

              <ExpandIcon isOpen={isOpen} />
            </button>

            <motion.div
              initial={false}
              animate={{
                height: isOpen ? "auto" : 0,
                opacity: isOpen ? 1 : 0,
              }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden"
            >
              <p className="py-4 pr-12 text-sm text-white/40">
                {item.description}
              </p>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
