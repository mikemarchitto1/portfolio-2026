"use client";

import Header from "@/components/header";
import Container from "@/components/container";
import Image from "next/image";

export default function ExperiencePage() {
  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 mb-24">
          <div>
            <h1 className="text-5xl font-semibold mb-6">Hello,</h1>
            <p className="text-neutral-300 leading-relaxed mb-6">
              I’m Michael Marchitto — a product designer with roots in graphic
              design, a move to Seattle that reshaped my career, and a decade of
              building digital experiences with clarity, intention, and
              operational rigor.
            </p>

            <p className="text-neutral-400 italic">
              “A king is a man who turns hope into action.” — Ralph Waldo
              Emerson
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              src="/images/profile_king.png"
              alt="Michael wearing a crown"
              width={360}
              height={360}
              className="rounded-lg"
            />
          </div>
        </div>
      </Container>

      {/* EXPERIENCE SECTION */}
      <Container>
        <h2 className="text-4xl font-semibold mb-12">Experience</h2>

        <div className="flex flex-col gap-16">
          {[
            {
              title: "Michael Marchitto Product Design",
              period: "April 2025 – Present",
              description:
                "Independent product design practice focused on systems, workflows, and digital experiences built with clarity and operational rigor.",
            },
            {
              title: "National Restaurant Association",
              period: "June 2024 – March 2025",
              description:
                "Led product design across enterprise tools, analytics dashboards, and operational workflows for national food‑service organizations.",
            },
            {
              title: "Microsoft — Admin Center Software",
              period: "June 2023 – February 2024",
              description:
                "Designed admin experiences, system controls, and scalable UI patterns for enterprise management tools.",
            },
            {
              title: "GloriFi",
              period: "November 2021 – February 2023",
              description:
                "Built financial product experiences, design systems, and cross‑platform UI for a high‑growth fintech startup.",
            },
            {
              title: "Remitly",
              period: "January 2020 – April 2021",
              description:
                "Designed customer‑facing flows, onboarding, and mobile experiences for global money transfer products.",
            },
            {
              title: "Microsoft — HITS Software",
              period: "April 2019 – December 2019",
              description:
                "Worked on internal tooling, workflow optimization, and UI improvements for enterprise software teams.",
            },
            {
              title: "Mentor Creative Group",
              period: "June 2018 – January 2019",
              description:
                "Supported branding, web design, and digital creative for a range of client projects.",
            },
          ].map((job, i) => (
            <div key={i} className="border-b border-neutral-800 pb-10">
              <h3 className="text-2xl font-semibold">{job.title}</h3>
              <p className="text-neutral-500 text-sm mb-4">{job.period}</p>
              <p className="text-neutral-300 leading-relaxed">
                {job.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="/resume.pdf"
            className="inline-block border border-neutral-700 px-6 py-3 rounded-md hover:bg-neutral-800 transition"
          >
            Download my resume
          </a>
        </div>
      </Container>

      {/* PROFILE SECTION */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-24 mb-32">
          {/* SKILLS */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Skills</h3>
            <ul className="text-neutral-300 space-y-2">
              <li>Accessibility</li>
              <li>AI Agent Design</li>
              <li>Analytics</li>
              <li>Design Systems</li>
              <li>Interaction Design</li>
              <li>Information Architecture</li>
              <li>Product Strategy</li>
              <li>Prototyping</li>
              <li>Research</li>
              <li>UX Writing</li>
            </ul>
          </div>

          {/* TOOLS */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Tools</h3>
            <ul className="text-neutral-300 space-y-2">
              <li>Adobe</li>
              <li>Cursor</li>
              <li>CSS / HTML</li>
              <li>Figma</li>
              <li>GitHub</li>
              <li>Google Material</li>
              <li>Jira</li>
              <li>Trello</li>
              <li>Asana</li>
              <li>Microsoft Fluent</li>
              <li>OpenAI</li>
              <li>Webflow</li>
            </ul>
          </div>

          {/* EDUCATION */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Education</h3>
            <ul className="text-neutral-300 space-y-4">
              <li>Board Infinity — AI Integrated Design</li>
              <li>Google Career — UX Design</li>
              <li>Seattle Central College — Web Design</li>
              <li>University of Illinois at Chicago — Graphic Design</li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
}
