import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ProjectCard } from "@/components/project-card";
import { Footer } from "@/components/footer";
import { Container } from "@/components/layout/container";

const PROJECTS = [
  {
    title: "GloriFi",
    description:
      "Led end-to-end UX for FinTech products, from wireframes and prototypes to hi-fidelity screens and a unified design system.",
    imageSrc: "/images/home_glorifi.png",
    imageAlt: "GloriFi project",
    variant: "large" as const,
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
      "Designed a full brand identity and website for a mixed martial arts training program.",
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
        <Hero />
        <section id="projects" className="bg-portfolio-white">
          <Container>
            {/* GloriFi - no top margin (hero owns 128px gap); 64px bottom for next row */}
            <div className="mb-16 mt-0">
              <ProjectCard {...glorifi} />
            </div>

            {/* Microsoft HITS + Eddie Bauer - 128px gap, equal width within 1200px */}
            <div className="flex flex-col gap-4 md:flex-row md:gap-[128px]">
              <div className="my-16 min-w-0 flex-1">
                <ProjectCard {...microsoft} />
              </div>
              <div className="my-16 min-w-0 flex-1">
                <ProjectCard {...eddie} />
              </div>
            </div>

            {/* Silverback MMA - full width; mb-32 (128px) matches hero-to-image gap above footer */}
            <div className="mb-32 mt-16">
              <ProjectCard {...silverback} />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
