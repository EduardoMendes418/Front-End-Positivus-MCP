import { teamMembers } from "@/constants/team";
import { TeamCard } from "../TeamCard/TeamCard";


export const Team = () => {
  return (
    <section id="team" className="container mx-auto px-6 py-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
        <h2 className="bg-brand-lime text-4xl font-medium px-2 rounded-md">
          Team
        </h2>
        <p className="max-w-lg text-lg text-brand-dark">
          Meet the skilled and experienced team behind our successful digital marketing strategies
        </p>
      </div>

      {/* Grid de Membros */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>

      {/* Botão Ver Todos */}
      <div className="flex justify-end mt-12">
        <button className="bg-brand-dark text-white px-10 py-5 rounded-xl text-xl font-medium hover:bg-opacity-90 transition-all">
          See all team
        </button>
      </div>
    </section>
  );
};