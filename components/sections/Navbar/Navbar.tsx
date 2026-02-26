"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/constants/navigation";

const DesktopMenu = () => (
  <div className="hidden md:flex items-center gap-8">
    {navLinks.map((link) => (
      <Link
        key={link.name}
        href={link.href}
        className="text-lg text-brand-dark hover:text-brand-lime transition-colors"
      >
        {link.name}
      </Link>
    ))}
    <button className="border-2 border-brand-dark px-6 py-3 rounded-xl font-medium hover:bg-brand-dark hover:text-white transition-all">
      Request a quote
    </button>
  </div>
);

const MobileMenu = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (isOpen: boolean) => void }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-4 shadow-lg">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          onClick={() => setIsOpen(false)}
          className="text-xl"
        >
          {link.name}
        </Link>
      ))}
      <button className="w-full border-2 border-brand-dark py-4 rounded-xl font-medium">
        Request a quote
      </button>
    </div>
  );
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white sticky top-0 z-50 py-6">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logos/Logo.svg"
            alt="Positivus logo"
            width={160}
            height={40}
            priority
          />
        </Link>
        <DesktopMenu />
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
};
