"use client";

import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Container from "@/components/container";
import ProjectCard from "@/components/project-card";

export default function MicrosoftHitsPage() {
  return (
    <>
      <Header />

      <main className="bg-white">
        <Container>
          {/* HERO */}
          <section>
            <div className="p-[16px] md:p-[32px] lg:p-[64px]">
              {/* PAGE TITLE */}
              <h1 className="[font-family:var(--font-roboto)] font-light text-[60px] leading-[76px] tracking-[-0.005em] text-portfolio-black">
                Microsoft HITS
              </h1>

              {/* META BLOCK */}
              <div className="mt-[32px] flex flex-col gap-8 sm:flex-row sm:gap-12 lg:gap-16">
                <div>
                  <h3 className="[font-family:var(--font-roboto)] font-normal text-[16px] leading-[24px] tracking-[0.0025em] text-portfolio-black">
                    Industry
                  </h3>
                  <p className="mt-[4px] text-[16px] leading-[24px] text-portfolio-black/80">
                    Technology
                  </p>
                </div>

                <div>
                  <h3 className="[font-family:var(--font-roboto)] font-normal text-[16px] leading-[24px] tracking-[0.0025em] text-portfolio-black">
                    Project
                  </h3>
                  <p className="mt-[4px] text-[16px] leading-[24px] text-portfolio-black/80">
                    Internal Research Repository
                  </p>
                </div>

                <div>
                  <h3 className="[font-family:var(--font-roboto)] font-normal text-[16px] leading-[24px] tracking-[0.0025em] text-portfolio-black">
                    When
                  </h3>
                  <p className="mt-[4px] text-[16px] leading-[24px] text-portfolio-black/80">
                    2021
                  </p>
                </div>

                <div>
                  <h3 className="[font-family:var(--font-roboto)] font-normal text-[16px] leading-[24px] tracking-[0.0025em] text-portfolio-black">
                    Role
                  </h3>
                  <p className="mt-[4px] text-[16px] leading-[24px] text-portfolio-black/80">
                    UX/UI Design Lead
                  </p>
                </div>
              </div>

              {/* HERO IMAGE */}
              <div className="mt-[32px] md:mt-[48px]">
                <Image
                  src="/images/home_microsoft.png"
                  alt="Microsoft HITS internal research repository"
                  width={1328}
                  height={720}
                  className="w-full h-auto object-cover"
                  sizes="(min-width: 1024px) 1328px, 100vw"
                />
              </div>
            </div>
          </section>

          {/* OVERVIEW */}
          <section>
            <div className="p-[16px] md:p-[32px] lg:p-[64px] bg-[#F7F7F7]">
              <h2 className="[font-family:var(--font-roboto)] font-light text-[60px] leading-[76px] tracking-[-0.005em] text-portfolio-black mb-[32px]">
                Overview
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px] md:gap-[48px]">
                <div>
                  <h3 className="[font-family:var(--font-roboto)] font-normal text-[34px] leading-[48px] tracking-[0.0025em] text-portfolio-black">
                    Situation
                  </h3>
                  <p className="mt-[8px] text-[16px] leading-[24px] text-portfolio-black/80">
                    Microsoft's HITS (Human Interface Technology Studio) team
                    needed a centralized internal repository to organize and
                    share research findings across different departments and
                    projects.
                  </p>
                </div>

                <div>
                  <h3 className="[font-family:var(--font-roboto)] font-normal text-[34px] leading-[48px] tracking-[0.0025em] text-portfolio-black">
                    Task
                  </h3>
                  <p className="mt-[8px] text-[16px] leading-[24px] text-portfolio-black/80">
                    Lead end-to-end UX work from foundational research through
                    UI design and agile handoff to development, creating an
                    intuitive and efficient research repository system.
                  </p>
                </div>

                <div>
                  <h3 className="[font-family:var(--font-roboto)] font-normal text-[34px] leading-[48px] tracking-[0.0025em] text-portfolio-black">
                    Result
                  </h3>
                  <p className="mt-[8px] text-[16px] leading-[24px] text-portfolio-black/80">
                    Successfully delivered a comprehensive research repository
                    that improved research accessibility and collaboration
                    across Microsoft teams, reducing research duplication and
                    enhancing decision-making processes.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* PROCESS */}
          <section>
            <div className="p-[16px] md:p-[32px] lg:p-[64px] space-y-[48px]">
              <h2 className="[font-family:var(--font-roboto)] font-light text-[60px] leading-[76px] tracking-[-0.005em] text-portfolio-black">
                Process
              </h2>

              {/* Foundational Research */}
              <div className="space-y-[16px]">
                <h3 className="[font-family:var(--font-roboto)] font-normal text-[34px] leading-[48px] tracking-[0.0025em] text-portfolio-black">
                  Foundational Research
                </h3>
                <p className="text-[16px] leading-[24px] text-portfolio-black/80 max-w-3xl">
                  Conducted extensive research to understand current research
                  practices, pain points, and information architecture needs
                  across different Microsoft teams and departments.
                </p>
                <Image
                  src="/images/desktop_microsofthits_research.png"
                  alt="Microsoft HITS foundational research"
                  width={1328}
                  height={720}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Information Architecture */}
              <div className="space-y-[16px]">
                <h3 className="[font-family:var(--font-roboto)] font-normal text-[34px] leading-[48px] tracking-[0.0025em] text-portfolio-black">
                  Information Architecture
                </h3>
                <p className="text-[16px] leading-[24px] text-portfolio-black/80 max-w-3xl">
                  Designed a comprehensive information architecture that
                  supports various research types, methodologies, and team
                  structures while maintaining consistency and ease of
                  navigation.
                </p>
                <Image
                  src="/images/desktop_microsofthits_ia.png"
                  alt="Microsoft HITS information architecture"
                  width={1328}
                  height={720}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </section>

          {/* KEY FEATURES */}
          <section>
            <div className="p-[16px] md:p-[32px] lg:p-[64px] space-y-[48px]">
              <h2 className="[font-family:var(--font-roboto)] font-light text-[60px] leading-[76px] tracking-[-0.005em] text-portfolio-black">
                Key Features
              </h2>

              {/* Research Repository */}
              <div className="space-y-[16px]">
                <h3 className="[font-family:var(--font-roboto)] font-normal text-[34px] leading-[48px] tracking-[0.0025em] text-portfolio-black">
                  Research Repository
                </h3>
                <p className="text-[16px] leading-[24px] text-portfolio-black/80 max-w-3xl">
                  Centralized repository for all research findings,
                  methodologies, and insights with powerful search and filtering
                  capabilities.
                </p>
                <Image
                  src="/images/desktop_microsofthits_repository.png"
                  alt="Microsoft HITS research repository"
                  width={1328}
                  height={720}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Collaboration Tools */}
              <div className="space-y-[16px]">
                <h3 className="[font-family:var(--font-roboto)] font-normal text-[34px] leading-[48px] tracking-[0.0025em] text-portfolio-black">
                  Collaboration Tools
                </h3>
                <p className="text-[16px] leading-[24px] text-portfolio-black/80 max-w-3xl">
                  Built-in collaboration features allowing teams to comment,
                  annotate, and share research findings seamlessly.
                </p>
                <Image
                  src="/images/desktop_microsofthits_collaboration.png"
                  alt="Microsoft HITS collaboration tools"
                  width={1328}
                  height={720}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Analytics Dashboard */}
              <div className="space-y-[16px]">
                <h3 className="[font-family:var(--font-roboto)] font-normal text-[34px] leading-[48px] tracking-[0.0025em] text-portfolio-black">
                  Analytics Dashboard
                </h3>
                <p className="text-[16px] leading-[24px] text-portfolio-black/80 max-w-3xl">
                  Comprehensive analytics and insights dashboard to track
                  research usage, team engagement, and impact metrics.
                </p>
                <Image
                  src="/images/desktop_microsofthits_analytics.png"
                  alt="Microsoft HITS analytics dashboard"
                  width={1328}
                  height={720}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </section>

          {/* NEXT PROJECT */}
          <section>
            <div className="p-[16px] md:p-[32px] lg:p-[64px] space-y-[40px]">
              <h2 className="[font-family:var(--font-roboto)] font-light text-[60px] leading-[76px] tracking-[-0.005em] text-portfolio-black">
                Next Project
              </h2>

              <ProjectCard
                title="Silverback MMA"
                description="Designed the full brand identity and website for a mixed martial arts training program, building a cohesive visual system and digital experience."
                imageSrc="/images/home_silverback.png"
                imageAlt="Silverback MMA"
                variant="large"
                href="/silverback-mma"
              />
            </div>
          </section>
        </Container>
      </main>

      <Footer />
    </>
  );
}
