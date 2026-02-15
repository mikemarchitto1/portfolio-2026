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
          <div className="p-[64px] bg-yellow-200">
            <ExperienceHeroLeft />
          </div>

          {/* RIGHT HERO */}
          <div className="p-[64px] bg-pink-200">
            <ExperienceHeroRight />
          </div>
        </div>
      </Container>

      {/* EXPERIENCE SECTION */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* LEFT COLUMN — MATCHES HELLO */}
          <div className="p-[64px] bg-blue-200">
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
                  <p className="text-base font-medium text-black mb-[12px]">
                    {job.period}
                  </p>

                  <h3 className="font-['Roboto'] font-normal text-[34px] leading-[48px] tracking-[0.25%] text-black">
                    {job.title}
                  </h3>

                  <p className="leading-relaxed text-black mt-1">
                    {job.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN — BUTTON */}
          <div className="py-[80px] px-[64px] flex items-start md:items-top justify-start md:justify-center bg-green-200">
            <ExperienceResumeButton />
          </div>
        </div>
      </Container>

      {/* EXPERTISE SECTION */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* LEFT COLUMN — MATCHES HELLO */}
          <div className="p-[64px] bg-yellow-200">
            <Title>Expertise</Title>

            <div className="mt-[40px] flex flex-col gap-[40px] mb-64px">
              <div>
                <h3 className="font-['Roboto'] font-normal text-[34px] leading-[48px] tracking-[0.25%] text-black">
                  Skills
                </h3>
                <p className="leading-relaxed text-black mt-1">
                  Accessibility, AI Agent Design, Analytics, Design Systems,
                  Design Thinking, Information Architecture, Interaction Design,
                  Mobile Design, Problem Solving, Prototyping, RAG Pipelines,
                  Responsive Web, Stakeholder Engagement, Usability Testing, UX
                  Design, UX Research, Vibe Coding, Visual Design, Wireframing,
                  Workflow Automation
                </p>
              </div>

              <div>
                <h3 className="font-['Roboto'] font-normal text-[34px] leading-[48px] tracking-[0.25%] text-black">
                  Tools
                </h3>
                <p className="leading-relaxed text-black mt-1">
                  Adobe, Cursor, CSS, HTML, Figma, GitHub, Google Material,
                  Jira, Trello, Asana, Microsoft Fluent, n8n, OpenAI, Webflow
                </p>
              </div>

              <div>
                <h3 className="font-['Roboto'] font-normal text-[34px] leading-[48px] tracking-[0.25%] text-black">
                  Education
                </h3>
                <p className="leading-relaxed text-black mt-1">
                  Board Infinity — AI Integrated Design, Google Career — UX
                  Design, Seattle Central College — Web Design, University of
                  Illinois at Chicago — Graphic Design
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT EMPTY COLUMN */}
          <div className="p-[64px]"></div>
        </div>
      </Container>

      <Footer />
    </>
  );
}
