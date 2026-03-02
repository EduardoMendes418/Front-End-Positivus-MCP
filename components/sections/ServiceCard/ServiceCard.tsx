import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ServiceProps {
  title: string;
  bg: string;
  titleBg: string;
  image: string;
  darkIcon: boolean;
}

export const ServiceCard = ({ title, bg, titleBg, image, darkIcon }: ServiceProps) => {
  return (
    <div className={`${bg} border border-brand-dark border-b-[5px] rounded-[45px] p-12 flex justify-between items-center relative overflow-hidden h-[310px]`}>
      <div className="flex flex-col justify-between h-full z-10">
        <h3 className={`${titleBg} text-3xl font-medium inline-block px-2 rounded-md leading-tight max-w-[200px]`}>
          {title}
        </h3>
        
        <div className="flex items-center gap-4 cursor-pointer group">
          <div className={`${darkIcon ? 'bg-brand-dark text-brand-lime' : 'bg-white text-brand-dark'} p-2 rounded-full transition-transform group-hover:rotate-45`}>
            <ArrowUpRight size={32} />
          </div>
          <span className={`${darkIcon ? 'text-black' : 'text-white'} text-xl font-medium`}>Learn more</span>
        </div>
      </div>

      <div className="relative w-48 h-48">
        <Image src={image} alt={title} fill className="object-contain" />
      </div>
    </div>
  );
};