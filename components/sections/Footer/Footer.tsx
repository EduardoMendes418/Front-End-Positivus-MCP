import Link from "next/link";
import { FOOTER_LINKS } from "@/constants/footer";
import { Linkedin, Facebook, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="container mx-auto px-6 pb-10">
      <div className="bg-brand-dark text-white rounded-[45px] md:rounded-t-[45px] p-10 md:p-14">
        {/* Topo: Logo, Nav e Redes Sociais */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white flex items-center justify-center transform rotate-45">
              <div className="w-2 h-2 bg-brand-dark"></div>
            </div>
            <span className="text-3xl font-bold">Positivus</span>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-6 md:gap-10">
            {FOOTER_LINKS.map((link) => (
              <Link key={link.name} href={link.href} className="underline hover:text-brand-lime transition-colors">
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex gap-4">
            <Link href="#" className="bg-white text-brand-dark p-2 rounded-full hover:bg-brand-lime transition-colors">
              <Linkedin size={20} fill="currentColor" />
            </Link>
            <Link href="#" className="bg-white text-brand-dark p-2 rounded-full hover:bg-brand-lime transition-colors">
              <Facebook size={20} fill="currentColor" />
            </Link>
            <Link href="#" className="bg-white text-brand-dark p-2 rounded-full hover:bg-brand-lime transition-colors">
              <Twitter size={20} fill="currentColor" />
            </Link>
          </div>
        </div>

        {/* Meio: Contato e Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 border-b border-white/20 pb-12 mb-8">
          <div className="text-center lg:text-left space-y-4">
            <h4 className="bg-brand-lime text-black px-2 rounded-md inline-block font-bold mb-4">Contact us:</h4>
            <div className="space-y-4 text-lg">
              <p>Email: info@positivus.com</p>
              <p>Phone: 555-567-8901</p>
              <p className="max-w-xs mx-auto lg:mx-0">Address: 1234 Main St Moonstone City, Stardust State 12345</p>
            </div>
          </div>

          {/* Card de Newsletter */}
          <div className="bg-[#292A32] p-8 md:p-12 rounded-[28px] flex flex-col md:flex-row items-center gap-5 w-full lg:max-w-2xl">
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full bg-transparent border border-white rounded-xl p-4 focus:outline-brand-lime placeholder:text-gray-400"
            />
            <button className="w-full md:w-auto bg-brand-lime text-black px-8 py-4 rounded-xl font-bold whitespace-nowrap hover:opacity-90 transition-all">
              Subscribe to news
            </button>
          </div>
        </div>

        {/* Base: Copyright */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center text-sm md:text-base">
          <p>© 2023 Positivus. All Rights Reserved.</p>
          <Link href="#" className="underline hover:text-brand-lime transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};