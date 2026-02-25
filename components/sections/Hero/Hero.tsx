import Image from 'next/image';

export default function Hero() {
  return (
    <section className="container mx-auto px-4 pt-10 pb-16 md:flex items-center">
      {/* Texto da Esquerda */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight text-brand-dark">
          Navigating the digital landscape for success
        </h1>
        <p className="text-xl text-brand-dark max-w-lg">
          Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
        </p>
        <button className="bg-brand-dark text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-opacity-90 transition-all">
          Book a consultation
        </button>
      </div>

      {/* Ilustração da Direita */}
      <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
        <Image 
          src="/illustrations/Illustration.svg" 
          alt="Marketing Illustration" 
          width={600} 
          height={500}
          priority
        />
      </div>
    </section>
  );
}