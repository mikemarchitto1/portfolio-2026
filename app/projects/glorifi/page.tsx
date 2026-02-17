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

              {/* META BLOCK */}
              <div className="mt-[32px] flex flex-col gap-8 sm:flex-row sm:gap-12 lg:gap-16">
                <div>
                  <h3 className="[font-family:var(--font-roboto)] font-normal text-[16px] leading-[24px] tracking-[0.0025em] text-portfolio-black">
                    Industry
                  </h3>
                  <p className="mt-[4px] text-[16px] leading-[24px] text-portfolio-black/80">
                    Fintech
                  </p>
                </div>

                <div>
                  <h3 className="[font-family:var(--font-roboto)] font-normal text-[16px] leading-[24px] tracking-[0.0025em] text-portfolio-black">
                    Project
                  </h3>
                  <p className="mt-[4px] text-[16px] leading-[24px] text-portfolio-black/80">
                    Mobile App and Website
                  </p>
                </div>

                <div>
                  <h3 className="[font-family:var(--font-roboto)] font-normal text-[16px] leading-[24px] tracking-[0.0025em] text-portfolio-black">
                    When
                  </h3>
                  <p className="mt-[4px] text-[16px] leading-[24px] text-portfolio-black/80">
                    2022
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
                  src="/images/desktop_glorifi_hero.png"
                  alt="GloriFi mobile banking app hero screens"
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

              {/* Competitive Audit */}
              <div className="space-y-[16px]">
                <h3 className="[font-family:var(--font-roboto)] font-normal text-[34px] leading-[48px] tracking-[0.0025em] text-portfolio-black">
                  Competitive Audit
                </h3>
                <p className="text-[16px] leading-[24px] text-portfolio-black/80 max-w-3xl">
                  Analyzed competitor apps to identify strengths, weaknesses,
                  and opportunities for differentiation. Focused on user
                  interface, navigation, and feature offerings.
                </p>
                <Image
                  src="/images/desktop_glorifi_audit.png"
                  alt="Competitive audit for GloriFi"
                  width={1328}
                  height={720}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Empathy Map */}
              <div className="space-y-[16px]">
                <h3 className="[font-family:var(--font-roboto)] font-normal text-[34px] leading-[48px] tracking-[0.0025em] text-portfolio-black">
                  Empathy Map and User Interviews
                </h3>
                <p className="text-[16px] leading-[24px] text-portfolio-black/80 max-w-3xl">
                  Conducted user interviews and created empathy maps to
                  understand user needs, behaviors, and pain points.
                </p>
                <Image
                  src="/images/desktop_glorifi_personas.png"
                  alt="Empathy maps and user personas"
                  width={1328}
                  height={720}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </section>

          {/* DEFINE */}
          <section>
            <div className="p-[16px] md:p-[32px] lg:p-[64px] space-y-[48px]">
              <h2 className="[font-family:var(--font-roboto)] font-light text-[60px] leading-[76px] tracking-[-0.005em] text-portfolio-black">
                Define
              </h2>

              <div className="space-y-[16px]">
                <h3 className="[font-family:var(--font-roboto)] font-normal text-[34px] leading-[48px] tracking-[0.0025em] text-portfolio-black">
                  Design System
                </h3>
                <p className="text-[16px] leading-[24px] text-portfolio-black/80 max-w-3xl">
                  Developed a design system to ensure consistency across the
                  app. Included typography, color palette, iconography, and
                  components.
                </p>
                <Image
                  src="/images/desktop_glorifi_design-system.png"
                  alt="GloriFi design system"
                  width={1328}
                  height={720}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </section>

          {/* IDEATE */}
          <section>
            <div className="p-[16px] md:p-[32px] lg:p-[64px] space-y-[48px]">
              <h2 className="[font-family:var(--font-roboto)] font-light text-[60px] leading-[76px] tracking-[-0.005em] text-portfolio-black">
                Ideate
              </h2>

              {/* Wireframe */}
              <div className="space-y-[16px]">
                <h3 className="[font-family:var(--font-roboto)] font-normal text-[34px] leading-[48px] tracking-[0.0025em] text-portfolio-black">
                  Wireframe
                </h3>
                <p className="text-[16px] leading-[24px] text-portfolio-black/80 max-w-3xl">
                  Created wireframes to visualize layout and structure of key
                  screens. Focused on user flow and information hierarchy.
                </p>
                <Image
                  src="/images/desktop_glorifi_wireframe.png"
                  alt="Wireframes for GloriFi"
                  width={1328}
                  height={720}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* UI Exploration */}
              <div className="space-y-[16px]">
                <h3 className="[font-family:var(--font-roboto)] font-normal text-[34px] leading-[48px] tracking-[0.0025em] text-portfolio-black">
                  UI Exploration
                </h3>
                <p className="text-[16px] leading-[24px] text-portfolio-black/80 max-w-3xl">
                  Explored different UI styles and interactions to find the best
                  fit for the brand and user needs.
                </p>
                <Image
                  src="/images/desktop_glorifi_ui-exploration.png"
                  alt="UI exploration for GloriFi"
                  width={1328}
                  height={720}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </section>

          {/* DESIGN */}
          <section>
            <div className="p-[16px] md:p-[32px] lg:p-[64px] space-y-[48px]">
              <h2 className="[font-family:var(--font-roboto)] font-light text-[60px] leading-[76px] tracking-[-0.005em] text-portfolio-black">
                Design
              </h2>

              {/* Today */}
              <div className="space-y-[16px]">
                <h3 className="[font-family:var(--font-roboto)] font-normal text-[34px] leading-[48px] tracking-[0.0025em] text-portfolio-black">
                  Feature: Today
                </h3>
                <p className="text-[16px] leading-[24px] text-portfolio-black/80 max-w-3xl">
                  Dashboard with personalized insights, news, and quick access
                  to key features.
                </p>
                <Image
                  src="/images/desktop_glorifi_today.png"
                  alt="GloriFi Today feature"
                  width={1328}
                  height={720}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Snapshot */}
              <div className="space-y-[16px]">
                <h3 className="[font-family:var(--font-roboto)] font-normal text-[34px] leading-[48px] tracking-[0.0025em] text-portfolio-black">
                  Feature: Snapshot
                </h3>
                <p className="text-[16px] leading-[24px] text-portfolio-black/80 max-w-3xl">
                  Overview of account balances, recent transactions, and
                  financial health.
                </p>
                <Image
                  src="/images/desktop_glorifi_snapshot.png"
                  alt="GloriFi Snapshot feature"
                  width={1328}
                  height={720}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Rewards */}
              <div className="space-y-[16px]">
                <h3 className="[font-family:var(--font-roboto)] font-normal text-[34px] leading-[48px] tracking-[0.0025em] text-portfolio-black">
                  Feature: Rewards
                </h3>
                <p className="text-[16px] leading-[24px] text-portfolio-black/80 max-w-3xl">
                  Access to exclusive offers and rewards based on user activity.
                </p>
                <Image
                  src="/images/desktop_glorifi_rewards.png"
                  alt="GloriFi Rewards feature"
                  width={1328}
                  height={720}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Accounts */}
              <div className="space-y-[16px]">
                <h3 className="[font-family:var(--font-roboto)] font-normal text-[34px] leading-[48px] tracking-[0.0025em] text-portfolio-black">
                  Feature: Accounts
                </h3>
                <p className="text-[16px] leading-[24px] text-portfolio-black/80 max-w-3xl">
                  Manage multiple accounts with detailed views and transaction
                  history.
                </p>
                <Image
                  src="/images/desktop_glorifi_accounts.png"
                  alt="GloriFi Accounts feature"
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
                title="Eddie Bauer"
                description="End-to-end UX and UI design for a modernized ecommerce experience, from research and wireframes to high-fidelity visuals."
                imageSrc="/images/desktop_eddiebauer_hero.png"
                imageAlt="Eddie Bauer ecommerce experience"
                variant="large"
                href="/eddiebauer"
              />
            </div>
          </section>
        </Container>
      </main>

      <Footer />
    </>
  );
}
