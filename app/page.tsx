"use client";

import Header from "@/components/header";
import Hero from "@/components/hero";
import ProjectCard from "@/components/project-card";
import Footer from "@/components/footer";
import Container from "@/components/container";

const PROJECTS = [
  {
    title: "GloriFi",
    description:
      "Led end-to-end UX for FinTech products, from wireframes and prototypes to hi-fidelity screens and a unified design system.",
    imageSrc: "/images/home_glorifi.png",
    imageAlt: "GloriFi project",
    variant: "large" as const,
    href: "/glorifi",
  },
  {
    title: "Microsoft HITS",
    description:
      "Created an internal research repository by leading end-to-end UX work from foundational research through UI design and agile handoff.",
    imageSrc: "/images/home_microsoft.png",
    imageAlt: "Microsoft HITS collaboration",
    variant: "small" as const,
  },
  {
    title: "Eddie Bauer",
    description:
      "Redesigned website with custom iconography product-focused visuals, and a more intuitive shopping experience.",
    imageSrc: "/images/home_eddie%20bauer.png",
    imageAlt: "Eddie Bauer outdoors",
    variant: "small" as const,
  },
  {
    title: "Silverback MMA",
    description:
      "Designed the full brand identity and website for a mixed martial arts training program, building a cohesive visual system and digital experience.",
    imageSrc: "/images/home_silverback.png",
    imageAlt: "Silverback MMA",
    variant: "large" as const,
  },
];

export default function Home() {
  const [glorifi, microsoft, eddie, silverback] = PROJECTS;

  return (
    <div className="min-h-screen bg-portfolio-white text-portfolio-black">
      <Header />

      <main>
        {/* HERO */}
        <section>
          <Container>
            <div className="p-[16px] md:p-[32px] lg:p-[64px]">
              <Hero />
            </div>
          </Container>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <Container>
            {/* GloriFi */}
            <div className="mt-0 p-[16px] md:p-[32px] lg:p-[64px]">
              <ProjectCard {...glorifi} />
            </div>

            {/* Microsoft HITS + Eddie Bauer */}
            <div className="flex flex-col md:flex-row">
              <div className="min-w-0 flex-1 p-[16px] md:p-[32px] lg:p-[64px]">
                <ProjectCard {...microsoft} />
              </div>

              <div className="min-w-0 flex-1 p-[16px] md:p-[32px] lg:p-[64px]">
                <ProjectCard {...eddie} />
              </div>
            </div>

            {/* Silverback MMA */}
            <div className="mt-0 p-[16px] md:p-[32px] lg:p-[64px] mb-[16px] md:mb-[32px] lg:mb-[64px]">
              <ProjectCard {...silverback} />
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
