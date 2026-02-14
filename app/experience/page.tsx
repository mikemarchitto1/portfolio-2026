"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import Container from "@/components/container";

export default function ExperiencePage() {
  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 lg:gap-[128px] mt-20">
          {/* LEFT COLUMN */}
          <div>
            <h1 className="text-[60px] leading-[76px] font-light tracking-[0.5%] text-black mb-6 font-['Roboto']">
              Hello,
            </h1>

            <p className="leading-relaxed mb-6 text-black">
              I’m originally from Chicago, where I studied graphic design at
              UIC—a program rooted in Swiss and International design principles.
              That foundation shaped my early work in marketing and
              communications, where I developed a strong sense of visual design
              and storytelling. I’ve always been drawn to typography, simple
              communication, and design that feels useful.
            </p>

            <p className="leading-relaxed mb-6 text-black">
              After relocating to Seattle, I moved into UX, drawn to digital
              design and the need for better product experiences. Over the
              years, I’ve worked across corporations, agencies, and
              startups—advocating for user‑centered design. I'm recently
              exploring how AI is reshaping creative work through automation,
              prototyping, and collaboration.
            </p>

            <p className="leading-relaxed mb-6 text-black">
              Currently based in Miami, I’m a cyclist and outdoors enthusiast
              who finds peace on the trail. Time outside helps reset and balance
              my life. Whether riding through city streets or remote gravel
              paths, I’m always looking for great scenic routes to the next bike
              camping destination.
            </p>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col items-end">
            <Image
              src="/images/profile_king.png"
              alt="Michael wearing a crown"
              width={800}
              height={800}
              className="w-full max-w-[600px] h-auto"
            />

            <p className="mt-[24px] text-left text-black max-w-[600px] self-start">
              <span className="italic block">
                “A king is a man who turns hope into action.”
              </span>
              <span className="not-italic block mt-[13px]">
                — Ralph Waldo Emerson
              </span>
            </p>
          </div>
        </div>

        {/* SECTION GAP */}
        <div className="mt-4 sm:mt-8 lg:mt-[128px]" />
      </Container>

      {/* EXPERIENCE HEADER */}
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          {/* BUTTON — MOBILE + TABLET ABOVE TITLE, DESKTOP RIGHT */}
          <a
            href="/resume.pdf"
            className="
              order-1 lg:order-2
              inline-flex items-center justify-center
              h-[48px] px-6
              rounded-[6px]
              bg-[#264D99] text-white
              font-['Roboto'] text-[16px] leading-[24px] font-semibold tracking-[0.5%]
              hover:opacity-90

              w-full md:w-auto
              self-center md:self-start lg:self-end

              mb-4 sm:mb-8 md:mb-8 lg:mb-0
            "
          >
            Download my resume
          </a>

          {/* EXPERIENCE TITLE */}
          <h2
            className="
              order-2 lg:order-1
              text-[60px] leading-[76px]
              font-light tracking-[0.5%]
              text-black font-['Roboto']
            "
          >
            Experience
          </h2>
        </div>

        {/* SECTION GAP */}
        <div className="mt-4 sm:mt-8 lg:mt-[128px]" />
      </Container>

      {/* EXPERIENCE LIST */}
      <Container>
        <div className="w-full md:w-1/2 flex flex-col gap-[40px]">
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
              <p className="text-base font-medium text-black mb-[12px] pl-1">
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

        {/* SECTION GAP */}
        <div className="mt-4 sm:mt-8 lg:mt-[128px]" />
      </Container>

      {/* PROFILE SECTION */}
      <Container>
        <div className="w-full md:w-1/2 flex flex-col gap-[40px]">
          <div>
            <h3 className="font-['Roboto'] font-normal text-[34px] leading-[48px] tracking-[0.25%] text-black">
              Skills
            </h3>
            <p className="leading-relaxed text-black mt-1">
              Accessibility, AI Agent Design, Analytics, Design Systems, Design
              Thinking, Information Architecture, Interaction Design, Mobile
              Design, Problem Solving, Prototyping, RAG Pipelines, Responsive
              Web, Stakeholder Engagement, Usability Testing, UX Design, UX
              Research, Vibe Coding, Visual Design, Wireframing, Workflow
              Automation
            </p>
          </div>

          <div>
            <h3 className="font-['Roboto'] font-normal text-[34px] leading-[48px] tracking-[0.25%] text-black">
              Tools
            </h3>
            <p className="leading-relaxed text-black mt-1">
              Adobe, Cursor, CSS, HTML, Figma, GitHub, Google Material, Jira,
              Trello, Asana, Microsoft Fluent, n8n, OpenAI, Webflow
            </p>
          </div>

          <div>
            <h3 className="font-['Roboto'] font-normal text-[34px] leading-[48px] tracking-[0.25%] text-black">
              Education
            </h3>
            <p className="leading-relaxed text-black mt-1">
              Board Infinity — AI Integrated Design, Google Career — UX Design,
              Seattle Central College — Web Design, University of Illinois at
              Chicago — Graphic Design
            </p>
          </div>
        </div>

        {/* SECTION GAP */}
        <div className="mt-4 sm:mt-8 lg:mt-[128px]" />
      </Container>

      <Footer />
    </>
  );
}
