import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/constants/cases";

export const CaseStudies = () => {
  return (
    <section id="cases" className="container mx-auto px-6 py-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
        <h2 className="bg-brand-lime text-4xl font-medium px-2 rounded-md">
          Case Studies
        </h2>
        <p className="max-w-xl text-lg text-brand-dark">
          Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
        </p>
      </div>

      {/* Container Preto */}
      <div className="bg-brand-dark text-white rounded-[45px] p-10 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0">
          {caseStudies.map((item, index) => (
            <div 
              key={index} 
              className={`flex flex-col justify-between space-y-6 md:px-12 ${
                index !== caseStudies.length - 1 ? "md:border-r border-gray-600" : ""
              }`}
            >
              <p className="text-lg leading-relaxed">
                {item.description}
              </p>
              <a 
                href={item.link} 
                className="flex items-center gap-3 text-brand-lime text-xl hover:underline group"
              >
                Learn more 
                <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};