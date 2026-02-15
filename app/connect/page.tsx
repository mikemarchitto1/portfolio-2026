"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Container from "@/components/container";
import Title from "@/components/title";

const CONTACT_BLOCK = {
  contact: {
    email: "mikemarchitto@gmail.com",
    phone: "312-879-908zero",
  },
  follow: [
    { label: "Behance", href: "https://behance.net" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
  office: { primary: "Brickell", secondary: "Miami, Florida" },
};

export default function ConnectPage() {
  return (
    <>
      <Header />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* LEFT COLUMN */}
          <div className="p-[16px] md:p-[32px] lg:p-[64px]">
            <Title>Thanks for visiting.</Title>

            <div className="mt-[24px] space-y-[24px]">
              <p>
                I&apos;d love to hear what you&apos;re working on—whether
                it&apos;s a new product, a design challenge, or something
                unexpected. I&apos;m always open to good conversations and
                creative collaborations.
              </p>

              <p>
                If you&apos;re in Miami, let&apos;s grab a coffee or go for a
                bike ride. I&apos;m usually somewhere between Brickell and the
                beach, exploring the city, checking out new spots, and taking it
                in.
              </p>
            </div>

            {/* CONTACT BLOCK — SAME STRUCTURE AS FOOTER, BLACK TEXT */}
            <div className="mt-[40px] flex flex-col gap-8 sm:flex-row sm:gap-12 lg:gap-12">
              {/* CONTACT */}
              <div>
                <h3 className="text-[16px] leading-[24px] font-semibold">
                  Contact
                </h3>
                <a
                  href={`mailto:${CONTACT_BLOCK.contact.email}`}
                  className="block text-[16px] leading-[24px] font-normal hover:underline"
                >
                  {CONTACT_BLOCK.contact.email}
                </a>
                <span className="block text-[16px] leading-[24px] font-normal">
                  {CONTACT_BLOCK.contact.phone}
                </span>
              </div>

              {/* FOLLOW */}
              <div>
                <h3 className="text-[16px] leading-[24px] font-semibold">
                  Follow
                </h3>
                {CONTACT_BLOCK.follow.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[16px] leading-[24px] font-normal hover:underline"
                  >
                    {label}
                  </Link>
                ))}
              </div>

              {/* REMOTE OFFICE */}
              <div>
                <h3 className="text-[16px] leading-[24px] font-semibold">
                  Remote Office
                </h3>
                <p className="text-[16px] leading-[24px] font-normal">
                  {CONTACT_BLOCK.office.primary}
                </p>
                <p className="text-[16px] leading-[24px] font-normal">
                  {CONTACT_BLOCK.office.secondary}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — PROFILE IMAGE + QUOTE */}
          <div className="p-[16px] md:p-[32px] lg:p-[64px] flex flex-col items-center">
            {/* PROFILE IMAGE */}
            <Image
              src="/images/profile_window.png"
              alt="Michael Marchitto"
              width={800}
              height={1000}
              className="w-full h-auto object-cover"
              priority
            />

            {/* QUOTE — MATCH EXPERIENCE PAGE SPACING */}
            <div className="mt-[24px] max-w-[480px] text-center mb-[64px]">
              <p className="italic">
                &quot;Live the questions now, and someday you will live your way
                into the answers.&quot;
              </p>
              <p className="mt-[8px]">— Rainer Maria Rilke</p>
            </div>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
}
