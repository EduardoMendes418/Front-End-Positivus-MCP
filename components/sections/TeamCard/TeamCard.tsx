import Image from "next/image";
import { Linkedin } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  experience: string;
  image: string;
}

export const TeamCard = ({ name, role, experience, image }: TeamMemberProps) => {
  return (
    <div className="bg-white border border-brand-dark border-b-[5px] rounded-[45px] p-8 relative">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-end gap-4">
          <div className="relative w-24 h-24">
            {/* O fundo verde atrás da foto */}
            <div className="absolute inset-0  rounded-full translate-x-1 -translate-y-1" />
              <Image src={image} alt={name} fill  />
          </div>
          <div>
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-brand-dark opacity-80">{role}</p>
          </div>
        </div>
        
        <a href="#" className="bg-brand-dark text-brand-lime p-2 rounded-full hover:opacity-80 transition-all">
          <Linkedin size={20} fill="currentColor" />
        </a>
      </div>

      <div className="border-t border-brand-dark pt-6">
        <p className="text-lg leading-snug">{experience}</p>
      </div>
    </div>
  );
};