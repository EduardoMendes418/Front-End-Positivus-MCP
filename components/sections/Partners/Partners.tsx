import { partners } from "@/constants/partners";
import Image from "next/image";

export default function Partners() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-wrap justify-between items-center gap-8">
        {partners.map((partner) => (
          <Image 
            key={partner} 
            src={`/logos/${partner}.svg`} 
            alt={partner} 
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        ))}
      </div>
    </div>
  );
}