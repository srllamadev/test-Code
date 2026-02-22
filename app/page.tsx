import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Caracteristicas } from "@/components/main/caracteristicas";
import { Beneficios } from "@/components/main/beneficios";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Caracteristicas />
        <Beneficios />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}
