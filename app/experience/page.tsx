"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Container from "@/components/container";

import ExperienceHeroLeft from "@/components/experience-hero-left";
import ExperienceHeroRight from "@/components/experience-hero-right";

import Title from "@/components/title";
import ExperienceResumeButton from "@/components/experience-resume-button";

export default function ExperiencePage() {
  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* LEFT HERO */}
          <div className="p-[16px] md:p-[32px] lg:p-[64px]">
            <Title>Hello,</Title>
            <ExperienceHeroLeft />
          </div>

          {/* RIGHT HERO */}
          <div className="p-[16px] md:p-[32px] lg:p-[64px]">
            <ExperienceHeroRight />
          </div>
        </div>
      </Container>

      {/* EXPERIENCE + BUTTON SECTION */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* BUTTON — mobile above experience, desktop right */}
          <div className="mt-6 p-[16px] md:p-[32px] lg:p-[64px] md:order-2 flex justify-start md:justify-center">
            <ExperienceResumeButton />
          </div>

          {/* EXPERIENCE */}
          <div className="p-[16px] md:p-[32px] lg:p-[64px] md:order-1">
            <Title>Experience</Title>

            <div className="mt-[40px] flex flex-col gap-[40px]">
              {[
                {
                  period: "April 2025 – Present",
                  title: "Michael Marchitto Product Design",
                  description:
                    "Advancing UX practice through independent AI work, leveraging Cursor, OpenAI, and n8n to design RAG‑powered prototypes, intelligent agents, and automated workflows, while building a client base and applying user‑centered design principles.",
                },
                {
                  period: "June 2024 – March 2025",
                  title: "National Restaurant Association",
                  description:
                    "Designed digital platforms by conducting user research, applying interaction design and accessibility standards, creating wireframes and prototypes, and delivering a scalable design system to improve usability and team alignment.",
                },
                {
                  period: "June 2023 – February 2024",
                  title: "Microsoft — Admin Center Software",
                  description:
                    "Enhanced Microsoft Admin Center and enterprise cart functionality through end‑to‑end UX design: driving research, wireframes, prototypes, usability testing, and iterative collaboration with developers to optimize workflows.",
                },
                {
                  period: "November 2021 – February 2023",
                  title: "GloriFi",
                  description:
                    "Designed FinTech solutions by leading the UX process from wireframes and prototypes to hi‑fidelity screens, building a unified design system, and collaborating with developers in agile sprints to deliver scalable financial wellness tools.",
                },
                {
                  period: "January 2020 – April 2021",
                  title: "Remitly",
                  description:
                    "Improved engagement for a digital payments startup by applying responsive web design, refining interaction flows, and elevating visual content across web and email platforms, supported by usability testing and accessibility standards.",
                },
                {
                  period: "April 2019 – December 2019",
                  title: "Microsoft — HITS Software",
                  description:
                    "Created Microsoft HITS (Human Interface Tracking System), an internal research repository software, by applying best practices across the full UX process including research, wireframes, prototypes, UI design, and agile handoff, ensuring alignment with development teams.",
                },
                {
                  period: "June 2018 – January 2019",
                  title: "Mentor Creative Group",
                  description:
                    "Led the redesign of Eddie Bauer’s e‑commerce experience at a retail‑focused agency, creating custom iconography, product‑centered visuals, and a modern, intuitive shopping flow that elevated brand clarity and improved the overall customer journey.",
                },
              ].map((job, i) => (
                <div key={i}>
                  <p className="font-medium mb-[12px]">{job.period}</p>

                  {/* Responsive global h3 scale */}
                  <h3 className="font-normal tracking-[0.25%]">{job.title}</h3>

                  <p className="mt-1">{job.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* EXPERTISE SECTION */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* LEFT COLUMN — restored bottom padding */}
          <div
            className="
              pt-[16px] md:pt-[32px] lg:pt-[64px]
              px-[16px] md:px-[32px] lg:px-[64px]
              pb-[16px] md:pb-[32px] lg:pb-[64px]

            "
          >
            <Title>Expertise</Title>

            <div className="mt-[40px] flex flex-col gap-[40px]">
              <div>
                <h3 className="font-normal tracking-[0.25%]">Skills</h3>
                <p className="mt-1">
                  Accessibility, AI Agents, Analytics, Architecture,Component
                  Design, Debugging, Design Systems, Design Thinking, Frontend,
                  Information Architecture, Interaction Design, Problem Solving,
                  Prototyping, RAG, Responsive Design, Research, Stakeholder
                  Managment, Testing, UX Design, Vibe Coding, Visual Design,
                  Wireframing, Workflow Automation
                </p>
              </div>

              <div>
                <h3 className="font-normal tracking-[0.25%]">Tools</h3>
                <p className="mt-1">
                  Adobe, Asana, CSS, Cursor, Figma, Fluent, GitHub, HTML, Jira,
                  Material Design, n8n, Next.js, Node, OpenAI, React, Tailwind,
                  Trello, TypeScript, Vercel, Webflow
                </p>
              </div>

              <div>
                <h3 className="font-normal tracking-[0.25%]">Education</h3>
                <p className="mt-1">
                  Board Infinity — AI Integrated Design, Google Career — UX
                  Design, Seattle Central College — Web Design, University of
                  Illinois at Chicago — Graphic Design
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT EMPTY COLUMN */}
          <div className="p-[16px] md:p-[32px] lg:p-[64px]"></div>
        </div>
      </Container>

      {/* DESKTOP‑ONLY GAP BELOW EXPERTISE */}
      <div className="hidden md:block md:mb-[64px]" />

      <Footer />
    </>
  );
}
