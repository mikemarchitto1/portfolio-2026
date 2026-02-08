import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";

const FOOTER_LINKS = {
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

export function Footer() {
  return (
    <footer
      id="connect"
      className="h-[600px] w-full pt-16 bg-portfolio-blue text-portfolio-white"
    >
      <Container>
        <div className="flex flex-col gap-12 md:flex-row md:flex-nowrap md:items-center md:justify-between md:gap-16">
          {/* Logo: fixed 324×60 at all breakpoints */}
          <div className="flex shrink-0 items-center">
            <Image
              src="/images/logo_slogan.png"
              alt="Let's Build Experiences. Together."
              width={324}
              height={60}
              priority={false}
              style={{ width: 324, height: 60 }}
            />
          </div>

          {/* Contact, Follow, Remote Office - right side of wrapper, same row as logo on desktop */}
          <div className="flex shrink-0 flex-col gap-8 sm:flex-row sm:gap-12 md:gap-16">
            <div>
              <h3 className="mb-2 text-sm font-semibold text-portfolio-white">
                Contact
              </h3>
              <a
                href={`mailto:${FOOTER_LINKS.contact.email}`}
                className="block text-sm font-normal text-portfolio-white/90 hover:underline"
              >
                {FOOTER_LINKS.contact.email}
              </a>
              <span className="mt-1 block text-sm font-normal text-portfolio-white/90">
                {FOOTER_LINKS.contact.phone}
              </span>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-semibold text-portfolio-white">
                Follow
              </h3>
              {FOOTER_LINKS.follow.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm font-normal text-portfolio-white/90 hover:underline"
                >
                  {label}
                </Link>
              ))}
            </div>
            <div>
              <h3 className="mb-2 text-sm font-semibold text-portfolio-white">
                Remote Office
              </h3>
              <p className="text-sm font-normal text-portfolio-white/90">
                {FOOTER_LINKS.office.primary}
              </p>
              <p className="text-sm font-normal text-portfolio-white/90">
                {FOOTER_LINKS.office.secondary}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
