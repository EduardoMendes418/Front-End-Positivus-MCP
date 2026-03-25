"use client";

import { useState, useEffect } from "react"; // Added useEffect
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS_DATA } from "@/constants/testimonials";

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false); // New state for mounted status

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true); // Set mounted to true after initial client-side render
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  return (
    <section className="container mx-auto px-6 py-20 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
        <h2 className="bg-brand-lime text-4xl font-medium px-2 rounded-md">
          Testimonials
        </h2>
        <p className="max-w-md text-lg text-brand-dark">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
        </p>
      </div>

      <div className="bg-brand-dark rounded-[45px] py-20 text-white relative">
        <div className="relative h-[450px] md:h-[350px] flex items-center justify-center">
          {mounted && ( // Conditionally render AnimatePresence and motion.div
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="absolute w-full px-6 md:px-20 flex flex-col items-center"
              >
                <div className="max-w-4xl border border-brand-lime rounded-[45px] p-8 md:p-12 relative mb-12">
                  <p className="text-lg md:text-xl font-light leading-relaxed">
                    &quot;{TESTIMONIALS_DATA[currentIndex].text}&quot;
                  </p>
                  <div className="absolute -bottom-4 left-16 w-8 h-8 bg-brand-dark border-r border-b border-brand-lime rotate-45"></div>
                </div>

                <div className="text-center md:text-left md:w-full md:pl-20">
                  <h4 className="text-brand-lime text-xl font-bold">
                    {TESTIMONIALS_DATA[currentIndex].author}
                  </h4>
                  <p className="text-white text-lg">
                    {TESTIMONIALS_DATA[currentIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>

        <div className="flex justify-center items-center gap-12 md:gap-24 mt-10">
          <button onClick={prevTestimonial} className="hover:text-brand-lime transition-colors">
            <ArrowLeft size={32} />
          </button>

          <div className="flex gap-4">
            {TESTIMONIALS_DATA.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rotate-45 transition-all ${
                  index === currentIndex ? 'bg-brand-lime' : 'border border-white hover:bg-white/20'
                }`}
              />
            ))}
          </div>

          <button onClick={nextTestimonial} className="hover:text-brand-lime transition-colors">
            <ArrowRight size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};