import { workingProcess } from "@/constants/process";
import { ProcessItem } from "../ProcessItem/ProcessItem";


export const WorkingProcess = () => {
  return (
    <section id="process" className="container mx-auto px-6 py-20">
      {/* Header da Seção */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
        <h2 className="bg-brand-lime text-4xl font-medium px-2 rounded-md">
          Our Working Process
        </h2>
        <p className="max-w-sm text-lg text-brand-dark">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>

      {/* Lista de Processos */}
      <div className="max-w-7xl mx-auto">
        {workingProcess.map((item) => (
          <ProcessItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};