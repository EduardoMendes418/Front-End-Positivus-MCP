import { CaseStudies } from "@/components/sections/CaseStudies/CaseStudies";
import { ContactInvite } from "@/components/sections/ContactInvite/ContactInvite";
import { CTASection } from "@/components/sections/CTASection/CTASection";
import { Footer } from "@/components/sections/Footer/Footer";
import Hero from "@/components/sections/Hero/Hero";
import { Navbar } from "@/components/sections/Navbar/Navbar";
import Partners from "@/components/sections/Partners/Partners";
import { Services } from "@/components/sections/Services/Services";
import { Team } from "@/components/sections/Team/Team";
import { Testimonials } from "@/components/sections/Testimonials/Testimonials";
import { WorkingProcess } from "@/components/sections/WorkingProcess/WorkingProcess";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Partners />
      <Services />
      <CTASection />
      <CaseStudies />
      <WorkingProcess />
      <Team />
      <Testimonials />
      <ContactInvite />
      <Footer/>
    </>
  );
}
