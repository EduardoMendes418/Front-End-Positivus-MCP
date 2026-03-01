"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProcessItemProps {
  id: string;
  title: string;
  description: string;
}

export const ProcessItem = ({ id, title, description }: ProcessItemProps) => {
  const [isOpen, setIsOpen] = useState(id === "01"); // Primeiro item aberto por padrão

  return (
    <div 
      className={`border border-brand-dark border-b-[5px] rounded-[45px] transition-all duration-300 mb-8 overflow-hidden ${
        isOpen ? "bg-brand-lime" : "bg-brand-gray"
      }`}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-8 md:p-10 text-left"
      >
        <div className="flex items-center gap-6">
          <span className="text-4xl md:text-6xl font-medium">{id}</span>
          <span className="text-xl md:text-3xl font-medium">{title}</span>
        </div>
        
        <div className="w-10 h-10 md:w-14 md:h-14 border border-brand-dark rounded-full flex items-center justify-center bg-brand-gray">
          {isOpen ? <Minus size={30} /> : <Plus size={30} />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-8 md:px-10 pb-10">
              <div className="h-[1px] bg-brand-dark mb-8" />
              <p className="text-lg leading-relaxed">
                {description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};