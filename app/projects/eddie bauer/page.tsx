import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/container";

const FOOTER_LINKS = {
  contact: {
    email: "mikemarchitto@gmail.com",
    phone: "312-879-908zero",
  },
  follow: {
    behance: "https://behance.net",
    linkedin: "https://linkedin.com",
  },
  office: {
    primary: "Brickell",
    secondary: "Miami, Florida",
  },
};

export default function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-black border-t border-black/10 dark:border-white/10">
      <Container className="py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-8">
            <div className="relative w-full max-w-[460px] aspect-[4/3]">
              <Image
                src="/images/desktop_connect.png"
                alt="Michael Marchitto"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-[16px] leading-[24px] italic text-black/80 dark:text-white/80">
                &quot;Live the questions now, and someday you will live your way into the answers.&quot;
              </p>
              <p className="text-[14px] leading-[20px] text-black/60 dark:text-white/60">
                — Rainer Maria Rilke
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <h2 className="text-[40px] md:text-[48px] leading-[48px] md:leading-[56px] font-normal text-black dark:text-white">
                Thanks for visiting.
              </h2>

              <div className="flex flex-col gap-4 text-[16px] leading-[24px] text-black/70 dark:text-white/70">
                <p>
                  I&apos;d love to hear what you&apos;re working on—whether it&apos;s a new product, a design challenge, or something unexpected. I&apos;m always open to good conversations and creative collaborations.
                </p>
                <p>
                  If you&apos;re in Miami, let&apos;s grab a coffee or go for a bike ride. I&apos;m usually somewhere between Brickell and the beach, exploring the city, checking out new spots, and taking it in.
                </p>
              </div>
            </div>

            {/* GRID: CONTACT / FOLLOW / OFFICE */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              
              {/* CONTACT */}
              <div className="flex flex-col gap-2">
                <h3 className="text-[14px] leading-[20px] font-semibold text-black dark:text-white">
                  Contact
                </h3>

                <a
                  href={`mailto:${FOOTER_LINKS.contact.email}`}
                  className="text-[14px] leading-[20px] text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors"
                >
                  {FOOTER_LINKS.contact.email}
                </a>

                <span className="text-[14px] leading-[20px] text-black/70 dark:text-white/70">
                  {FOOTER_LINKS.contact.phone}
                </span>
              </div>

              {/* FOLLOW */}
              <div className="flex flex-col gap-2">
                <h3 className="text-[14px] leading-[20px] font-semibold text-black dark:text-white">
                  Follow
                </h3>

                <Link
                  href={FOOTER_LINKS.follow.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] leading-[20px] text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors"
                >
                  Behance
                </Link>

                <Link
                  href={FOOTER_LINKS.follow.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] leading-[20px] text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors"
                >
                  LinkedIn
                </Link>
              </div>

              {/* OFFICE */}
              <div className="flex flex-col gap-2">
                <h3 className="text-[14px] leading-[20px] font-semibold text-black dark:text-white">
                  Remote Office
                </h3>

                <span className="text-[14px] leading-[20px] text-black/70 dark:text-white/70">
                  {FOOTER_LINKS.office.primary}
                </span>

                <span className="text-[14px] leading-[20px] text-black/70 dark:text-white/70">
                  {FOOTER_LINKS.office.secondary}
                </span>
              </div>

            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
