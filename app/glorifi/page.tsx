"use client";

import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Container from "@/components/container";
import ProjectCard from "@/components/project-card";

export default function GlorifiPage() {
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
                GloriFi
              </h1>

              {/* META BLOCK — ORIGINAL H3 STYLE */}
              <div className="mt-[32px] flex flex-col gap-8 sm:flex-row sm:gap-12 lg:gap-16">
                <div>
                  <h3 className="text-[16px] leading-[24px] font-semibold">
                    Industry
                  </h3>
                  <p className="mt-[4px] text-[16px] leading-[24px] text-portfolio-black/80">
                    Fintech
                  </p>
                </div>

                <div>
                  <h3 className="text-[16px] leading-[24px] font-semibold">
                    Project
                  </h3>
                  <p className="mt-[4px] text-[16px] leading-[24px] text-portfolio-black/80">
                    Mobile App and Website
                  </p>
                </div>

                <div>
                  <h3 className="text-[16px] leading-[24px] font-semibold">
                    When
                  </h3>
                  <p className="mt-[4px] text-[16px] leading-[24px] text-portfolio-black/80">
                    2022
                  </p>
                </div>

                <div>
                  <h3 className="text-[16px] leading-[24px] font-semibold">
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
                  src="/images/desktop_glorifi_hero.png"
                  alt="GloriFi mobile banking app hero screens"
                  width={1328}
                  height={720}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </section>

          {/* OVERVIEW */}
          <section>
            <div className="p-[16px] md:p-[32px] lg:p-[64px]">
              <h2 className="[font-family:var(--font-roboto)] font-light text-[60px] leading-[76px] tracking-[-0.005em] text-portfolio-black mb-[32px]">
                Overview
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px] md:gap-[48px]">
                <div>
                  <h3 className="[font-family:var(--font-roboto)] font-normal text-[34px] leading-[48px] tracking-[0.0025em] text-portfolio-black">
                    Situation
                  </h3>
                  <p className="mt-[8px] text-[16px] leading-[24px] text-portfolio-black/80">
                    GloriFi’s goal is to offer a functional financial banking
                    app that focuses on financial wellness information via their
                    mobile and web application. The timeline is to launch a beta
                    and MVP application in eight months to validate market
                    interest and secure more funding.
                  </p>
                </div>

                <div>
                  <h3 className="[font-family:var(--font-roboto)] font-normal text-[34px] leading-[48px] tracking-[0.0025em] text-portfolio-black">
                    Task
                  </h3>
                  <p className="mt-[8px] text-[16px] leading-[24px] text-portfolio-black/80">
                    Design a global financial news feed and data‑insights hub
                    that delivers real‑time information and engages U.S.
                    cultural and financial communities. The experience needs to
                    reflect trust, security, and privacy while supporting
                    account creation and interaction with financial content.
                  </p>
                </div>

                <div>
                  <h3 className="[font-family:var(--font-roboto)] font-normal text-[34px] leading-[48px] tracking-[0.0025em] text-portfolio-black">
                    Result
                  </h3>
                  <p className="mt-[8px] text-[16px] leading-[24px] text-portfolio-black/80">
                    Following the initial release, which involved a successful
                    launch of the app, it was reported that more than 40,000
                    individuals had downloaded the application, which was a
                    significant achievement, as it ranked 11th among all
                    financial apps available on the market.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* EMPATHIZE */}
          <section>
            <div className="p-[16px] md:p-[32px] lg:p-[64px] space-y-[48px]">
              <h2 className="[font-family:var(--font-roboto)] font-light text-[60px] leading-[76px] tracking-[-0.005em] text-portfolio-black">
                Empathize
              </h2>

              {/* COMPETITIVE AUDIT — 4/8 GRID */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-[32px] md:gap-[48px]">
                <div className="md:col-span-4 space-y-[16px]">
                  <h3 className="[font-family:var(--font-roboto)] font-normal text-[34px] leading-[48px] tracking-[0.0025em] text-portfolio-black">
                    Competitive Audit
                  </h3>
                  <p className="text-[16px] leading-[24px] text-portfolio-black/80">
                    We carefully reviewed several banking and financial apps,
                    evaluating their features and identifying areas for
                    improvement. This helped us gain a comprehensive
                    understanding of the app landscape.
                  </p>
                </div>

                <div className="md:col-span-8">
                  <Image
                    src="/images/desktop_glorifi_audit.png"
                    alt="Competitive audit for GloriFi"
                    width={1328}
                    height={720}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* EMPATHY MAP — FLIPPED 8/4 */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-[32px] md:gap-[48px]">
                <div className="md:col-span-8">
                  <Image
                    src="/images/desktop_glorifi_personas.png"
                    alt="Empathy maps and user personas"
                    width={1328}
                    height={720}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="md:col-span-4 space-y-[16px]">
                  <h3 className="[font-family:var(--font-roboto)] font-normal text-[34px] leading-[48px] tracking-[0.0025em] text-portfolio-black">
                    Empathy Map and User Interviews
                  </h3>
                  <p className="text-[16px] leading-[24px] text-portfolio-black/80">
                    We used empathy mapping workshops to comprehend our users
                    better. The workshops aided in creating personas that
                    reflect distinct qualities and motivations, revealing areas
                    for improvement and leading to a better user experience.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* DEFINE — 4/8 GRID */}
          <section>
            <div className="p-[16px] md:p-[32px] lg:p-[64px] space-y-[48px]">
              <h2 className="[font-family:var(--font-roboto)] font-light text-[60px] leading-[76px] tracking-[-0.005em] text-portfolio-black">
                Define
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-[32px] md:gap-[48px]">
                <div className="md:col-span-4 space-y-[16px]">
                  <h3 className="[font-family:var(--font-roboto)] font-normal text-[34px] leading-[48px] tracking-[0.0025em] text-portfolio-black">
                    Design System
                  </h3>
                  <p className="text-[16px] leading-[24px] text-portfolio-black/80">
                    This UI framework saved time and effort for the team by
                    providing pre-built components promoting accessibility and
                    best UX practices. This also allowed for easier maintenance
                    and updates without compromising the site's integrity.
                  </p>
                </div>

                <div className="md:col-span-8">
                  <Image
                    src="/images/desktop_glorifi_design system.png"
                    alt="GloriFi design system"
                    width={1328}
                    height={720}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* IDEATE — Wireframe 4/8, UI Exploration flipped 8/4 */}
          <section>
            <div className="p-[16px] md:p-[32px] lg:p-[64px] space-y-[48px]">
              <h2 className="[font-family:var(--font-roboto)] font-light text-[60px] leading-[76px] tracking-[-0.005em] text-portfolio-black">
                Ideate
              </h2>

              {/* WIREFRAME — 4/8 */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-[32px] md:gap-[48px]">
                <div className="md:col-span-4 space-y-[16px]">
                  <h3 className="[font-family:var(--font-roboto)] font-normal text-[34px] leading-[48px] tracking-[0.0025em] text-portfolio-black">
                    Wireframe
                  </h3>
                  <p className="text-[16px] leading-[24px] text-portfolio-black/80">
                    We created user flows and wireframes, examining the design
                    process and identifying areas for improvement. We discussed
                    potential issues, and brainstormed solutions to ensure a
                    seamless and user-friendly experience.
                  </p>
                </div>

                <div className="md:col-span-8">
                  <Image
                    src="/images/desktop_glorifi_wireframe.png"
                    alt="Wireframes for GloriFi"
                    width={1328}
                    height={720}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* UI EXPLORATION — FLIPPED */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-[32px] md:gap-[48px]">
                <div className="md:col-span-8">
                  <Image
                    src="/images/desktop_glorifi_ui exploration.png"
                    alt="UI exploration for GloriFi"
                    width={1328}
                    height={720}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="md:col-span-4 space-y-[16px]">
                  <h3 className="[font-family:var(--font-roboto)] font-normal text-[34px] leading-[48px] tracking-[0.0025em] text-portfolio-black">
                    UI Exploration
                  </h3>
                  <p className="text-[16px] leading-[24px] text-portfolio-black/80">
                    We used our brand styles and design system components to
                    create consistent and visually appealing mockups. This
                    approach ensured that our final product was effective and
                    aligned with our brand's guidelines and design principles.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </Container>

        {/* ⭐ DESIGN — FULL BLEED SECTION ⭐ */}
        <section className="w-full bg-[#1F3B73]">
          <Container>
            <div className="p-[16px] md:p-[32px] lg:p-[64px]">
              <h2 className="[font-family:var(--font-roboto)] font-light text-[60px] leading-[76px] tracking-[-0.005em] text-white">
                Design
              </h2>

              <div className="space-y-[48px] mt-[48px]">
                {/* TODAY */}
                <div className="space-y-[16px]">
                  <div className="grid grid-cols-1 md:grid-cols-12">
                    <div className="md:col-span-5 space-y-[16px]">
                      <h3 className="[font-family:var(--font-roboto)] font-normal text-[34px] leading-[48px] tracking-[0.0025em] text-white">
                        Feature: Today
                      </h3>
                      <p className="text-[16px] leading-[24px] text-white/80">
                        This news feed presents global and financial news with a
                        TikTok-style swipe interface. It's easy to browse and
                        visually engaging for both casual readers and investors
                        who want to stay informed.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12">
                    <div className="md:col-span-8 md:col-start-3">
                      <Image
                        src="/images/desktop_glorifi_today.png"
                        alt="GloriFi Today feature"
                        width={1328}
                        height={720}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* SNAPSHOT */}
                <div className="space-y-[16px]">
                  <div className="grid grid-cols-1 md:grid-cols-12">
                    <div className="md:col-span-5 space-y-[16px]">
                      <h3 className="[font-family:var(--font-roboto)] font-normal text-[34px] leading-[48px] tracking-[0.0025em] text-white">
                        Feature: Snapshot
                      </h3>
                      <p className="text-[16px] leading-[24px] text-white/80">
                        This dashboard helps you view income, expenses,
                        investments, and debts. You can monitor progress,
                        identify improvement areas, and make informed decisions.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12">
                    <div className="md:col-span-8 md:col-start-3">
                      <Image
                        src="/images/desktop_glorifi_snapshot.png"
                        alt="GloriFi Snapshot feature"
                        width={1328}
                        height={720}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* REWARDS */}
                <div className="space-y-[16px]">
                  <div className="grid grid-cols-1 md:grid-cols-12">
                    <div className="md:col-span-5 space-y-[16px]">
                      <h3 className="[font-family:var(--font-roboto)] font-normal text-[34px] leading-[48px] tracking-[0.0025em] text-white">
                        Feature: Rewards
                      </h3>
                      <p className="text-[16px] leading-[24px] text-white/80">
                        We designed the vendor loyalty feature so users get
                        rewards and discounts from their favorite service
                        providers.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12">
                    <div className="md:col-span-8 md:col-start-3">
                      <Image
                        src="/images/desktop_glorifi_rewards.png"
                        alt="GloriFi Rewards feature"
                        width={1328}
                        height={720}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* ACCOUNTS */}
                <div className="space-y-[16px]">
                  <div className="grid grid-cols-1 md:grid-cols-12">
                    <div className="md:col-span-5 space-y-[16px]">
                      <h3 className="[font-family:var(--font-roboto)] font-normal text-[34px] leading-[48px] tracking-[0.0025em] text-white">
                        Feature: Accounts
                      </h3>
                      <p className="text-[16px] leading-[24px] text-white/80">
                        Reusable marketing cards and user flow screens simplify
                        bank account opening. This approach helps users select
                        the right account and quickly complete the task.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12">
                    <div className="md:col-span-8 md:col-start-3">
                      <Image
                        src="/images/desktop_glorifi_accounts.png"
                        alt="GloriFi Accounts feature"
                        width={1328}
                        height={720}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* NEXT PROJECT */}
        <Container>
          <section>
            <div className="p-[16px] md:p-[32px] lg:p-[64px]">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-[32px] md:gap-[48px] items-start">
                {/* LEFT SIDE — TEXT */}
                <div className="md:col-span-7">
                  <h2 className="[font-family:var(--font-roboto)] font-light text-[60px] leading-[76px] tracking-[-0.005em] text-portfolio-black">
                    Next Project
                  </h2>
                </div>

                {/* RIGHT SIDE — EDDIE BAUER CARD (5 columns) */}
                <div className="md:col-span-5">
                  <ProjectCard
                    title="Eddie Bauer"
                    description="Redesigned website with custom iconography product-focused visuals, and a more intuitive shopping experience."
                    imageSrc="/images/home_eddie%20bauer.png"
                    imageAlt="Eddie Bauer outdoors"
                    variant="small"
                    href="/eddiebauer"
                  />
                </div>
              </div>
            </div>
          </section>
        </Container>
      </main>

      <Footer />
    </>
  );
}
