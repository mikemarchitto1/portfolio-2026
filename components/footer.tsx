import Link from "next/link";
import { Container } from "@/components/layout/container";

const FOOTER_LINKS = {
  contact: {
    email: "michael.marchitto@gmail.com",
    phone: "212-678-8380",
  },
  follow: [{ label: "LinkedIn", href: "https://linkedin.com" }],
  office: { primary: "NY", secondary: "Miami, Florida" },
};

export function Footer() {
  return (
    <footer
      id="connect"
      className="bg-portfolio-blue py-16 text-portfolio-white md:py-20"
    >
      <Container as="footer">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between md:gap-12">
          <div className="flex items-start gap-4">
            <div
              className="h-12 w-12 flex-shrink-0 bg-portfolio-white/20"
              aria-hidden
            />
            <p className="text-xl font-bold leading-tight md:text-2xl">
              Let&apos;s Build Experiences. Together.
            </p>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:gap-12 md:gap-16">
            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide">
                Contact
              </h3>
              <a
                href={`mailto:${FOOTER_LINKS.contact.email}`}
                className="block text-portfolio-white/90 hover:underline"
              >
                {FOOTER_LINKS.contact.email}
              </a>
              <a
                href={`tel:${FOOTER_LINKS.contact.phone.replace(/-/g, "")}`}
                className="mt-1 block text-portfolio-white/90 hover:underline"
              >
                {FOOTER_LINKS.contact.phone}
              </a>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide">
                Follow
              </h3>
              {FOOTER_LINKS.follow.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-portfolio-white/90 hover:underline"
                >
                  {label}
                </Link>
              ))}
            </div>
            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide">
                Remote Office
              </h3>
              <p className="text-portfolio-white/90">
                {FOOTER_LINKS.office.primary}
              </p>
              <p className="text-portfolio-white/90">
                {FOOTER_LINKS.office.secondary}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
