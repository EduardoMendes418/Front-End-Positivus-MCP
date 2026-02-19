"use client";

import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section id="contact" className="container mx-auto px-6 py-20">
      {/* Header da Seção */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
        <h2 className="bg-brand-lime text-4xl font-medium px-2 rounded-md">
          Contact Us
        </h2>
        <p className="max-w-sm text-lg text-brand-dark">
          Connect with Us: Let's Discuss Your Digital Marketing Goals
        </p>
      </div>

      {/* Container do Formulário */}
      <div className="bg-brand-gray rounded-[45px] p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row">
        
        {/* Formulário */}
        <form className="md:w-1/2 space-y-6 z-10">
          <div className="flex gap-8 mb-8">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="radio" name="type" className="w-6 h-6 accent-brand-lime" defaultChecked />
              <span className="text-lg">Say Hi</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="radio" name="type" className="w-6 h-6 accent-brand-lime" />
              <span className="text-lg">Get a Quote</span>
            </label>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium">Name</label>
            <input 
              type="text" 
              placeholder="Name" 
              className="border border-brand-dark rounded-xl p-4 bg-white focus:outline-brand-lime"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium">Email*</label>
            <input 
              type="email" 
              placeholder="Email" 
              className="border border-brand-dark rounded-xl p-4 bg-white focus:outline-brand-lime"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium">Message*</label>
            <textarea 
              placeholder="Message" 
              rows={5}
              className="border border-brand-dark rounded-xl p-4 bg-white focus:outline-brand-lime"
              required
            ></textarea>
          </div>

          <button className="w-full bg-brand-dark text-white py-5 rounded-xl text-xl font-medium hover:opacity-90 transition-all">
            Send Message
          </button>
        </form>

        {/* Ilustração Decorativa (Direita) */}
        <div className="hidden md:flex md:w-1/2 justify-end items-center absolute right-[-10%] top-0 h-full">
           <img 
            src="/illustrations/contact-illustration.svg" 
            alt="Contact Illustration" 
            className="h-[80%] object-contain"
          />
        </div>
      </div>
    </section>
  );
};