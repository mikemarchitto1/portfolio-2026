"use client";

import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Container from "@/components/container";
import ProjectCard from "@/components/project-card";

export default function SilverbackMMAPage() {
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
                Silverback MMA
              </h1>

              {/* META BLOCK */}
              <div className="mt-[32px] flex flex-col gap-8 sm:flex-row sm:gap-12 lg:gap-16">
                <div>
                  <h3 className="[font-family:var(--font-roboto)] font-normal text-[16px] leading-[24px] tracking-[0.0025em] text-portfolio-black">
                    Industry
                  </h3>
                  <p className="mt-[4px] text-[16px] leading-[24px] text-portfolio-black/80">
                    Fitness & Sports
                  </p>
                </div>

                <div>
                  <h3 className="[font-family:var(--font-roboto)] font-normal text-[16px] leading-[24px] tracking-[0.0025em] text-portfolio-black">
                    Project
                  </h3>
                  <p className="mt-[4px] text-[16px] leading-[24px] text-portfolio-black/80">
                    Brand Identity & Website
                  </p>
                </div>

                <div>
                  <h3 className="[font-family:var(--font-roboto)] font-normal text-[16px] leading-[24px] tracking-[0.0025em] text-portfolio-black">
                    When
                  </h3>
                  <p className="mt-[4px] text-[16px] leading-[24px] text-portfolio-black/80">
                    2020
                  </p>
                </div>

                <div>
                  <h3 className="[font-family:var(--font-roboto)] font-normal text-[16px] leading-[24px] tracking-[0.0025em] text-portfolio-black">
                    Role
                  </h3>
                  <p className="mt-[4px] text-[16px] leading-[24px] text-portfolio-black/80">
                    Brand & Web Design
                  </p>
                </div>
              </div>

              {/* HERO IMAGE */}
              <div className="mt-[32px] md:mt-[48px]">
                <Image
                  src="/images/home_silverback.png"
                  alt="Silverback MMA brand identity and website"
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
                    Silverback MMA needed a complete brand identity and website
                    to establish their presence in the competitive mixed martial
                    arts training market and attract new students.
                  </p>
                </div>

                <div>
                  <h3 className="[font-family:var(--font-roboto)] font-normal text-[34px] leading-[48px] tracking-[0.0025em] text-portfolio-black">
                    Task
                  </h3>
                  <p className="mt-[8px] text-[16px] leading-[24px] text-portfolio-black/80">
                    Design the full brand identity and website for a mixed
                    martial arts training program, building a cohesive visual
                    system and digital experience that reflects strength,
                    discipline, and community.
                  </p>
                </div>

                <div>
                  <h3 className="[font-family:var(--font-roboto)] font-normal text-[34px] leading-[48px] tracking-[0.0025em] text-portfolio-black">
                    Result
                  </h3>
                  <p className="mt-[8px] text-[16px] leading-[24px] text-portfolio-black/80">
                    Successfully created a powerful brand identity and engaging
                    website that helped Silverback MMA establish a strong market
                    presence and attract a growing community of students and
                    practitioners.
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

              {/* Brand Research */}
              <div className="space-y-[16px]">
                <h3 className="[font-family:var(--font-roboto)] font-normal text-[34px] leading-[48px] tracking-[0.0025em] text-portfolio-black">
                  Brand Research
                </h3>
                <p className="text-[16px] leading-[24px] text-portfolio-black/80 max-w-3xl">
                  Conducted market research to understand the MMA training
                  landscape, competitor analysis, and target audience
                  preferences to inform the brand strategy.
                </p>
                <Image
                  src="/images/desktop_silverback_research.png"
                  alt="Silverback MMA brand research"
                  width={1328}
                  height={720}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Logo and Identity Design */}
              <div className="space-y-[16px]">
                <h3 className="[font-family:var(--font-roboto)] font-normal text-[34px] leading-[48px] tracking-[0.0025em] text-portfolio-black">
                  Logo and Identity Design
                </h3>
                <p className="text-[16px] leading-[24px] text-portfolio-black/80 max-w-3xl">
                  Created a comprehensive brand identity system including logo,
                  typography, color palette, and visual elements that convey
                  strength, discipline, and the spirit of martial arts.
                </p>
                <Image
                  src="/images/desktop_silverback_identity.png"
                  alt="Silverback MMA brand identity"
                  width={1328}
                  height={720}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Website Design */}
              <div className="space-y-[16px]">
                <h3 className="[font-family:var(--font-roboto)] font-normal text-[34px] leading-[48px] tracking-[0.0025em] text-portfolio-black">
                  Website Design
                </h3>
                <p className="text-[16px] leading-[24px] text-portfolio-black/80 max-w-3xl">
                  Designed a responsive website that showcases the brand
                  identity, training programs, instructor profiles, and class
                  schedules while providing an engaging user experience.
                </p>
                <Image
                  src="/images/desktop_silverback_website.png"
                  alt="Silverback MMA website design"
                  width={1328}
                  height={720}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </section>

          {/* KEY ELEMENTS */}
          <section>
            <div className="p-[16px] md:p-[32px] lg:p-[64px] space-y-[48px]">
              <h2 className="[font-family:var(--font-roboto)] font-light text-[60px] leading-[76px] tracking-[-0.005em] text-portfolio-black">
                Key Elements
              </h2>

              {/* Logo Design */}
              <div className="space-y-[16px]">
                <h3 className="[font-family:var(--font-roboto)] font-normal text-[34px] leading-[48px] tracking-[0.0025em] text-portfolio-black">
                  Logo Design
                </h3>
                <p className="text-[16px] leading-[24px] text-portfolio-black/80 max-w-3xl">
                  Designed a powerful logo that combines the strength of a
                  silverback gorilla with the discipline of martial arts,
                  creating a memorable and impactful brand mark.
                </p>
                <Image
                  src="/images/desktop_silverback_logo.png"
                  alt="Silverback MMA logo design"
                  width={1328}
                  height={720}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Brand Assets */}
              <div className="space-y-[16px]">
                <h3 className="[font-family:var(--font-roboto)] font-normal text-[34px] leading-[48px] tracking-[0.0025em] text-portfolio-black">
                  Brand Assets
                </h3>
                <p className="text-[16px] leading-[24px] text-portfolio-black/80 max-w-3xl">
                  Created comprehensive brand assets including business cards,
                  apparel designs, signage, and promotional materials that
                  maintain brand consistency across all touchpoints.
                </p>
                <Image
                  src="/images/desktop_silverback_assets.png"
                  alt="Silverback MMA brand assets"
                  width={1328}
                  height={720}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Website Features */}
              <div className="space-y-[16px]">
                <h3 className="[font-family:var(--font-roboto)] font-normal text-[34px] leading-[48px] tracking-[0.0025em] text-portfolio-black">
                  Website Features
                </h3>
                <p className="text-[16px] leading-[24px] text-portfolio-black/80 max-w-3xl">
                  Implemented key website features including class schedules,
                  instructor profiles, student testimonials, photo galleries,
                  and easy contact forms to enhance user engagement.
                </p>
                <Image
                  src="/images/desktop_silverback_features.png"
                  alt="Silverback MMA website features"
                  width={1328}
                  height={720}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </section>

          {/* BACK TO HOME */}
          <section>
            <div className="p-[16px] md:p-[32px] lg:p-[64px] space-y-[40px]">
              <h2 className="[font-family:var(--font-roboto)] font-light text-[60px] leading-[76px] tracking-[-0.005em] text-portfolio-black">
                Back to Home
              </h2>

              <ProjectCard
                title="GloriFi"
                description="Led end-to-end UX for FinTech products, from wireframes and prototypes to hi-fidelity screens and a unified design system."
                imageSrc="/images/home_glorifi.png"
                imageAlt="GloriFi project"
                variant="large"
                href="/glorifi"
              />
            </div>
          </section>
        </Container>
      </main>

      <Footer />
    </>
  );
}
