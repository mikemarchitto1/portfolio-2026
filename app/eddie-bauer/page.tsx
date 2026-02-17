"use client";

import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Container from "@/components/container";
import ProjectCard from "@/components/project-card";

export default function EddieBauerPage() {
  if (typeof window === "undefined") {
    console.log(
      "[EddieBauerPage] Server-side render - /eddie-bauer route is accessible",
    );
  }

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
                Eddie Bauer
              </h1>

              {/* META BLOCK */}
              <div className="mt-[32px] flex flex-col gap-8 sm:flex-row sm:gap-12 lg:gap-16">
                <div>
                  <h3 className="[font-family:var(--font-roboto)] font-normal text-[16px] leading-[24px] tracking-[0.0025em] text-portfolio-black">
                    Industry
                  </h3>
                  <p className="mt-[4px] text-[16px] leading-[24px] text-portfolio-black/80">
                    E-commerce
                  </p>
                </div>

                <div>
                  <h3 className="[font-family:var(--font-roboto)] font-normal text-[16px] leading-[24px] tracking-[0.0025em] text-portfolio-black">
                    Project
                  </h3>
                  <p className="mt-[4px] text-[16px] leading-[24px] text-portfolio-black/80">
                    Website Redesign
                  </p>
                </div>

                <div>
                  <h3 className="[font-family:var(--font-roboto)] font-normal text-[16px] leading-[24px] tracking-[0.0025em] text-portfolio-black">
                    When
                  </h3>
                  <p className="mt-[4px] text-[16px] leading-[24px] text-portfolio-black/80">
                    2023
                  </p>
                </div>

                <div>
                  <h3 className="[font-family:var(--font-roboto)] font-normal text-[16px] leading-[24px] tracking-[0.0025em] text-portfolio-black">
                    Role
                  </h3>
                  <p className="mt-[4px] text-[16px] leading-[24px] text-portfolio-black/80">
                    UX/UI Design
                  </p>
                </div>
              </div>

              {/* HERO IMAGE */}
              <div className="mt-[32px] md:mt-[48px]">
                <Image
                  src="/images/home_eddie-bauer.png"
                  alt="Eddie Bauer website redesign"
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
                    Eddie Bauer needed a modern, user-friendly website that
                    showcases their outdoor apparel and gear while improving the
                    overall shopping experience for customers.
                  </p>
                </div>

                <div>
                  <h3 className="[font-family:var(--font-roboto)] font-normal text-[34px] leading-[48px] tracking-[0.0025em] text-portfolio-black">
                    Task
                  </h3>
                  <p className="mt-[8px] text-[16px] leading-[24px] text-portfolio-black/80">
                    Redesign the website with custom iconography,
                    product-focused visuals, and a more intuitive shopping
                    experience that reflects the brand's outdoor heritage.
                  </p>
                </div>

                <div>
                  <h3 className="[font-family:var(--font-roboto)] font-normal text-[34px] leading-[48px] tracking-[0.0025em] text-portfolio-black">
                    Result
                  </h3>
                  <p className="mt-[8px] text-[16px] leading-[24px] text-portfolio-black/80">
                    The redesigned website successfully improved user engagement
                    and conversion rates, with customers spending more time on
                    the site and completing purchases more easily.
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

              {/* Research */}
              <div className="space-y-[16px]">
                <h3 className="[font-family:var(--font-roboto)] font-normal text-[34px] leading-[48px] tracking-[0.0025em] text-portfolio-black">
                  Research
                </h3>
                <p className="text-[16px] leading-[24px] text-portfolio-black/80 max-w-3xl">
                  Conducted user research to understand customer needs and
                  preferences for outdoor apparel shopping. Analyzed competitor
                  websites to identify best practices and opportunities for
                  differentiation.
                </p>
                <Image
                  src="/images/desktop_eddiebauer_research.png"
                  alt="Eddie Bauer research"
                  width={1328}
                  height={720}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Design System */}
              <div className="space-y-[16px]">
                <h3 className="[font-family:var(--font-roboto)] font-normal text-[34px] leading-[48px] tracking-[0.0025em] text-portfolio-black">
                  Design System
                </h3>
                <p className="text-[16px] leading-[24px] text-portfolio-black/80 max-w-3xl">
                  Created a comprehensive design system with custom iconography,
                  typography, and color palette that reflects Eddie Bauer's
                  outdoor heritage while maintaining modern aesthetics.
                </p>
                <Image
                  src="/images/desktop_eddiebauer_designsystem.png"
                  alt="Eddie Bauer design system"
                  width={1328}
                  height={720}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Wireframes */}
              <div className="space-y-[16px]">
                <h3 className="[font-family:var(--font-roboto)] font-normal text-[34px] leading-[48px] tracking-[0.0025em] text-portfolio-black">
                  Wireframes
                </h3>
                <p className="text-[16px] leading-[24px] text-portfolio-black/80 max-w-3xl">
                  Developed wireframes to establish the information architecture
                  and user flow, focusing on intuitive navigation and product
                  discovery.
                </p>
                <Image
                  src="/images/desktop_eddiebauer_wireframes.png"
                  alt="Eddie Bauer wireframes"
                  width={1328}
                  height={720}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* High-Fidelity Mockups */}
              <div className="space-y-[16px]">
                <h3 className="[font-family:var(--font-roboto)] font-normal text-[34px] leading-[48px] tracking-[0.0025em] text-portfolio-black">
                  High-Fidelity Mockups
                </h3>
                <p className="text-[16px] leading-[24px] text-portfolio-black/80 max-w-3xl">
                  Created detailed mockups showcasing the final design with
                  product-focused visuals, improved typography hierarchy, and
                  enhanced user experience.
                </p>
                <Image
                  src="/images/desktop_eddiebauer_mockups.png"
                  alt="Eddie Bauer high-fidelity mockups"
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

              {/* Product Pages */}
              <div className="space-y-[16px]">
                <h3 className="[font-family:var(--font-roboto)] font-normal text-[34px] leading-[48px] tracking-[0.0025em] text-portfolio-black">
                  Product Pages
                </h3>
                <p className="text-[16px] leading-[24px] text-portfolio-black/80 max-w-3xl">
                  Enhanced product pages with high-quality imagery, detailed
                  product information, and intuitive size/color selection.
                </p>
                <Image
                  src="/images/desktop_eddiebauer_productpages.png"
                  alt="Eddie Bauer product pages"
                  width={1328}
                  height={720}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Custom Iconography */}
              <div className="space-y-[16px]">
                <h3 className="[font-family:var(--font-roboto)] font-normal text-[34px] leading-[48px] tracking-[0.0025em] text-portfolio-black">
                  Custom Iconography
                </h3>
                <p className="text-[16px] leading-[24px] text-portfolio-black/80 max-w-3xl">
                  Designed custom icons that reflect the outdoor theme and
                  enhance the overall user experience.
                </p>
                <Image
                  src="/images/desktop_eddiebauer_icons.png"
                  alt="Eddie Bauer custom iconography"
                  width={1328}
                  height={720}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Mobile Experience */}
              <div className="space-y-[16px]">
                <h3 className="[font-family:var(--font-roboto)] font-normal text-[34px] leading-[48px] tracking-[0.0025em] text-portfolio-black">
                  Mobile Experience
                </h3>
                <p className="text-[16px] leading-[24px] text-portfolio-black/80 max-w-3xl">
                  Optimized the design for mobile devices with responsive
                  layouts and touch-friendly interactions.
                </p>
                <Image
                  src="/images/desktop_eddiebauer_mobile.png"
                  alt="Eddie Bauer mobile experience"
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
                title="Microsoft HITS"
                description="Created an internal research repository by leading end-to-end UX work from foundational research through UI design and agile handoff."
                imageSrc="/images/home_microsoft.png"
                imageAlt="Microsoft HITS collaboration"
                variant="small"
                href="/microsoft-hits"
              />
            </div>
          </section>
        </Container>
      </main>

      <Footer />
    </>
  );
}
