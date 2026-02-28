import { partners } from "@/constants/partners";

export default function Partners() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-wrap justify-between items-center gap-8">
        {partners.map((partner) => (
          <img 
            key={partner} 
            src={`/logos/${partner}.svg`} 
            alt={partner} 
            className="h-10 w-auto"
          />
        ))}
      </div>
    </div>
  );
}