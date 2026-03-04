import { services } from "@/constants/services";
import { ServiceCard } from "../ServiceCard/ServiceCard";


export const Services = () => {
  return (
    <section id="services" className="container mx-auto px-6 py-20">
      {/* Header da Seção */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
        <h2 className="bg-brand-lime text-4xl font-medium px-2 rounded-md">
          Services
        </h2>
        <p className="max-w-xl text-lg text-brand-dark">
          At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
        </p>
      </div>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};