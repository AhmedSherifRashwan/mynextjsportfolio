import Image from "next/image";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import WhoIAm from "@/components/WhoIAm";
import Conferences from "@/components/Conferences";
import ParticlesDemo from "@/components/ui/Conferences";
import { BackgroundBeamsDemo } from "@/components/stayConnected";
import { BackgroundBeams } from "@/components/ui/background-beams";
export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
      </div>
      <div className="max-w-7xl w-full">
      <WhoIAm />
      </div>
      <div className="max-w-7xl w-full">
      <ParticlesDemo />
      </div>
      <br />
      <br />
      <BackgroundBeamsDemo />
    </main>
  );
}
