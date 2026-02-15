// app/glorifi/page.tsx

import Image from "next/image";
import Container from "@/components/container";
import ProjectCard from "@/components/project-card";

export default function GlorifiPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-portfolio-border">
        <Container className="py-16 md:py-24">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-2">
              <h1 className="text-left [font-family:var(--font-roboto)] text-[32px] font-normal leading-[40px] tracking-[0.0025em] md:text-[40px] md:leading-[48px] text-portfolio-black">
                GloriFi
              </h1>
            </div>

            <div className="flex flex-col items-start gap-1 text-left md:items-end">
              <p className="text-[14px] font-normal leading-[20px] tracking-[0.01em] text-portfolio-black/70 [font-family:var(--font-roboto)]">
                UX/UI Design
              </p>
              <p className="text-[14px] font-normal leading-[20px] tracking-[0.01em] text-portfolio-black/70 [font-family:var(--font-roboto)]">
                2022
              </p>
            </div>
          </div>

          <div className="mt-8 md:mt-12">
            <div className="relative w-full overflow-hidden">
              <Image
                src="/images/desktop_glorifi_hero.png"
                alt="GloriFi mobile banking app hero screens"
                width={1328}
                height={720}
                className="h-auto w-full object-cover"
                sizes="(min-width: 1024px) 1328px, 100vw"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* OVERVIEW */}
      <section className="border-b border-portfolio-border">
        <Container className="py-16 md:py-24">
          <h2 className="mb-8 text-left text-[20px] font-normal leading-[28px] tracking-[0.01em] text-portfolio-black [font-family:var(--font-roboto)]">
            Overview
          </h2>

          <div className="grid gap-12 md:grid-cols-3 md:gap-16">
            <div className="flex flex-col gap-2">
              <h3 className="text-[14px] font-medium leading-[20px] tracking-[0.08em] uppercase text-portfolio-black/70 [font-family:var(--font-roboto)]">
                Situation
              </h3>
              <p className="text-[14px] font-normal leading-[22px] text-portfolio-black/80 [font-family:var(--font-roboto)]">
                GloriFi is a mobile banking app that aims to provide users with
                a seamless and secure banking experience. The app includes
                features such as account management, rewards, and financial
                insights.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-[14px] font-medium leading-[20px] tracking-[0.08em] uppercase text-portfolio-black/70 [font-family:var(--font-roboto)]">
                Task
              </h3>
              <p className="text-[14px] font-normal leading-[22px] text-portfolio-black/80 [font-family:var(--font-roboto)]">
                Redesign the mobile app to improve user experience, enhance
                visual appeal, and ensure consistency across different features.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-[14px] font-medium leading-[20px] tracking-[0.08em] uppercase text-portfolio-black/70 [font-family:var(--font-roboto)]">
                Result
              </h3>
              <p className="text-[14px] font-normal leading-[22px] text-portfolio-black/80 [font-family:var(--font-roboto)]">
                A redesigned mobile app with a modern interface, improved
                usability, and cohesive design language that aligns with the
                brand identity.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* EMPATHIZE */}
      <section className="border-b border-portfolio-border">
        <Container className="py-16 md:py-24 space-y-12 md:space-y-16">
          <h2 className="text-left text-[20px] font-normal leading-[28px] tracking-[0.01em] text-portfolio-black [font-family:var(--font-roboto)]">
            Empathize
          </h2>

          <div className="space-y-6">
            <h3 className="text-[14px] font-medium leading-[20px] tracking-[0.08em] uppercase text-portfolio-black/70 [font-family:var(--font-roboto)]">
              Competitive Audit
            </h3>
            <p className="max-w-3xl text-[14px] font-normal leading-[22px] text-portfolio-black/80 [font-family:var(--font-roboto)]">
              Analyzed competitor apps to identify strengths, weaknesses, and
              opportunities for differentiation. Focused on user interface,
              navigation, and feature offerings.
            </p>
            <div className="relative w-full overflow-hidden">
              <Image
                src="/images/desktop_glorifi_audit.png"
                alt="Competitive audit for GloriFi mobile banking app"
                width={1328}
                height={720}
                className="h-auto w-full object-cover"
                sizes="(min-width: 1024px) 1328px, 100vw"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-[14px] font-medium leading-[20px] tracking-[0.08em] uppercase text-portfolio-black/70 [font-family:var(--font-roboto)]">
              Empathy Map and User Interviews
            </h3>
            <p className="max-w-3xl text-[14px] font-normal leading-[22px] text-portfolio-black/80 [font-family:var(--font-roboto)]">
              Conducted user interviews and created empathy maps to understand
              user needs, behaviors, and pain points.
            </p>
            <div className="relative w-full overflow-hidden">
              <Image
                src="/images/desktop_glorifi_personas.png"
                alt="Empathy maps and user personas for GloriFi"
                width={1328}
                height={720}
                className="h-auto w-full object-cover"
                sizes="(min-width: 1024px) 1328px, 100vw"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* DEFINE */}
      <section className="border-b border-portfolio-border">
        <Container className="py-16 md:py-24 space-y-12 md:space-y-16">
          <h2 className="text-left text-[20px] font-normal leading-[28px] tracking-[0.01em] text-portfolio-black [font-family:var(--font-roboto)]">
            Define
          </h2>

          <div className="space-y-6">
            <h3 className="text-[14px] font-medium leading-[20px] tracking-[0.08em] uppercase text-portfolio-black/70 [font-family:var(--font-roboto)]">
              Design System
            </h3>
            <p className="max-w-3xl text-[14px] font-normal leading-[22px] text-portfolio-black/80 [font-family:var(--font-roboto)]">
              Developed a design system to ensure consistency across the app.
              Included typography, color palette, iconography, and components.
            </p>
            <div className="relative w-full overflow-hidden">
              <Image
                src="/images/desktop_glorifi_design system.png"
                alt="GloriFi design system including typography, color, and components"
                width={1328}
                height={720}
                className="h-auto w-full object-cover"
                sizes="(min-width: 1024px) 1328px, 100vw"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* IDEATE */}
      <section className="border-b border-portfolio-border">
        <Container className="py-16 md:py-24 space-y-12 md:space-y-16">
          <h2 className="text-left text-[20px] font-normal leading-[28px] tracking-[0.01em] text-portfolio-black [font-family:var(--font-roboto)]">
            Ideate
          </h2>

          <div className="space-y-6">
            <h3 className="text-[14px] font-medium leading-[20px] tracking-[0.08em] uppercase text-portfolio-black/70 [font-family:var(--font-roboto)]">
              Wireframe
            </h3>
            <p className="max-w-3xl text-[14px] font-normal leading-[22px] text-portfolio-black/80 [font-family:var(--font-roboto)]">
              Created wireframes to visualize layout and structure of key
              screens. Focused on user flow and information hierarchy.
            </p>
            <div className="relative w-full overflow-hidden">
              <Image
                src="/images/desktop_glorifi_wireframe.png"
                alt="Wireframes for GloriFi mobile banking app"
                width={1328}
                height={720}
                className="h-auto w-full object-cover"
                sizes="(min-width: 1024px) 1328px, 100vw"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-[14px] font-medium leading-[20px] tracking-[0.08em] uppercase text-portfolio-black/70 [font-family:var(--font-roboto)]">
              UI Exploration
            </h3>
            <p className="max-w-3xl text-[14px] font-normal leading-[22px] text-portfolio-black/80 [font-family:var(--font-roboto)]">
              Explored different UI styles and interactions to find the best fit
              for the brand and user needs.
            </p>
            <div className="relative w-full overflow-hidden">
              <Image
                src="/images/desktop_glorifi_ui exploration.png"
                alt="UI exploration for GloriFi mobile banking app"
                width={1328}
                height={720}
                className="h-auto w-full object-cover"
                sizes="(min-width: 1024px) 1328px, 100vw"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* DESIGN */}
      <section className="border-b border-portfolio-border">
        <Container className="py-16 md:py-24 space-y-12 md:space-y-16">
          <h2 className="text-left text-[20px] font-normal leading-[28px] tracking-[0.01em] text-portfolio-black [font-family:var(--font-roboto)]">
            Design
          </h2>

          {/* Today */}
          <div className="space-y-6">
            <h3 className="text-[14px] font-medium leading-[20px] tracking-[0.08em] uppercase text-portfolio-black/70 [font-family:var(--font-roboto)]">
              Feature: Today
            </h3>
            <p className="max-w-3xl text-[14px] font-normal leading-[22px] text-portfolio-black/80 [font-family:var(--font-roboto)]">
              Dashboard with personalized insights, news, and quick access to
              key features.
            </p>
            <div className="relative w-full overflow-hidden">
              <Image
                src="/images/desktop_glorifi_today.png"
                alt="GloriFi Today dashboard feature"
                width={1328}
                height={720}
                className="h-auto w-full object-cover"
                sizes="(min-width: 1024px) 1328px, 100vw"
              />
            </div>
          </div>

          {/* Snapshot */}
          <div className="space-y-6">
            <h3 className="text-[14px] font-medium leading-[20px] tracking-[0.08em] uppercase text-portfolio-black/70 [font-family:var(--font-roboto)]">
              Feature: Snapshot
            </h3>
            <p className="max-w-3xl text-[14px] font-normal leading-[22px] text-portfolio-black/80 [font-family:var(--font-roboto)]">
              Overview of account balances, recent transactions, and financial
              health.
            </p>
            <div className="relative w-full overflow-hidden">
              <Image
                src="/images/desktop_glorifi_snapshot.png"
                alt="GloriFi Snapshot feature"
                width={1328}
                height={720}
                className="h-auto w-full object-cover"
                sizes="(min-width: 1024px) 1328px, 100vw"
              />
            </div>
          </div>

          {/* Rewards */}
          <div className="space-y-6">
            <h3 className="text-[14px] font-medium leading-[20px] tracking-[0.08em] uppercase text-portfolio-black/70 [font-family:var(--font-roboto)]">
              Feature: Rewards
            </h3>
            <p className="max-w-3xl text-[14px] font-normal leading-[22px] text-portfolio-black/80 [font-family:var(--font-roboto)]">
              Access to exclusive offers and rewards based on user activity.
            </p>
            <div className="relative w-full overflow-hidden">
              <Image
                src="/images/desktop_glorifi_rewards.png"
                alt="GloriFi Rewards feature"
                width={1328}
                height={720}
                className="h-auto w-full object-cover"
                sizes="(min-width: 1024px) 1328px, 100vw"
              />
            </div>
          </div>

          {/* Accounts */}
          <div className="space-y-6">
            <h3 className="text-[14px] font-medium leading-[20px] tracking-[0.08em] uppercase text-portfolio-black/70 [font-family:var(--font-roboto)]">
              Feature: Accounts
            </h3>
            <p className="max-w-3xl text-[14px] font-normal leading-[22px] text-portfolio-black/80 [font-family:var(--font-roboto)]">
              Manage multiple accounts with detailed views and transaction
              history.
            </p>
            <div className="relative w-full overflow-hidden">
              <Image
                src="/images/desktop_glorifi_accounts.png"
                alt="GloriFi Accounts feature"
                width={1328}
                height={720}
                className="h-auto w-full object-cover"
                sizes="(min-width: 1024px) 1328px, 100vw"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* NEXT PROJECT */}
      <section>
        <Container className="py-16 md:py-24 space-y-8 md:space-y-10">
          <h2 className="text-left text-[20px] font-normal leading-[28px] tracking-[0.01em] text-portfolio-black [font-family:var(--font-roboto)]">
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
        </Container>
      </section>
    </main>
  );
}
