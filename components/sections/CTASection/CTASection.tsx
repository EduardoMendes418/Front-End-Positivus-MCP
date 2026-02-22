import Image from "next/image";

export const CTASection = () => {
  return (
    <section className="container mx-auto px-6 py-10">
      <div className="bg-brand-gray rounded-[45px] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
        <div className="md:w-1/2 space-y-6 z-10">
          <h2 className="text-3xl font-medium">Let’s make things happen</h2>
          <p className="text-lg text-brand-dark max-w-sm">
            Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
          </p>
          <button className="bg-brand-dark text-white px-8 py-4 rounded-xl text-xl font-medium hover:bg-opacity-90 transition-all">
            Get your free proposal
          </button>
        </div>
        
        <div className="hidden md:block md:w-1/2 relative h-100">
           {/* Aqui você coloca a ilustração das estrelas e círculos da imagem */}
           <Image 
            src="/illustrations/cta-abstract.svg" 
            alt="Abstract Illustration" 
            fill 
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};