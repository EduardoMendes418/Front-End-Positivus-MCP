"use client";

import Image from "next/image";

export const ContactInvite = () => {
  return (
    <section id="contact" className="container mx-auto px-6 py-20">
      {/* Header da Seção */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
        <h2 className="bg-brand-lime text-4xl font-medium px-2 rounded-md">
          Contact Us
        </h2>
        <p className="max-w-sm text-lg text-brand-dark">
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </p>
      </div>

      {/* Container do Formulário */}
      <div className="bg-brand-gray rounded-[45px] p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center">
        
        {/* Formulário (Lado Esquerdo) */}
        <form className="w-full md:w-1/2 space-y-6 z-10">
          {/* Radio Buttons */}
          <div className="flex gap-8 mb-8">
            <label className="flex items-center gap-3 cursor-pointer group">
              <input 
                type="radio" 
                name="contact-type" 
                className="w-6 h-6 accent-brand-lime cursor-pointer" 
                defaultChecked 
              />
              <span className="text-lg">Say Hi</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group">
              <input 
                type="radio" 
                name="contact-type" 
                className="w-6 h-6 accent-brand-lime cursor-pointer" 
              />
              <span className="text-lg">Get a Quote</span>
            </label>
          </div>

          {/* Inputs de Texto */}
          <div className="flex flex-col gap-2">
            <label className="text-lg">Name</label>
            <input 
              type="text" 
              placeholder="Name" 
              className="border border-brand-dark rounded-xl p-4 bg-white focus:ring-2 focus:ring-brand-lime outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lg">Email*</label>
            <input 
              type="email" 
              placeholder="Email" 
              className="border border-brand-dark rounded-xl p-4 bg-white focus:ring-2 focus:ring-brand-lime outline-none"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lg">Message*</label>
            <textarea 
              placeholder="Message" 
              rows={5}
              className="border border-brand-dark rounded-xl p-4 bg-white focus:ring-2 focus:ring-brand-lime outline-none resize-none"
              required
            ></textarea>
          </div>

          <button className="w-full bg-brand-dark text-white py-5 rounded-xl text-xl font-medium hover:opacity-90 transition-all">
            Send Message
          </button>
        </form>

        {/* Ilustração Decorativa (Lado Direito) */}
        <div className="hidden lg:flex md:w-1/2 justify-end absolute -right-20">
          <Image 
            src="/illustrations/estrela.svg" 
            alt="Decorative Shape" 
            width={600} 
            height={600}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};