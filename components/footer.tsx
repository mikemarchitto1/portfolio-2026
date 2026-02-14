import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";

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

export default function Footer() {
  return (
    <footer
      id="connect"
      className="w-full h-[600px] pt-14 pb-16 bg-portfolio-blue text-portfolio-white"
    >
      <Container>
        {/* CHANGE: md:flex-row → lg:flex-row so wrapping happens until 1024px */}
        <div className="flex flex-col gap-12 lg:flex-row lg:flex-nowrap lg:items-center lg:justify-between lg:gap-16">
          {/* LOGO */}
          <div className="flex shrink-0 items-center">
            <Image
              src="/images/logo_slogan.png"
              alt="Let's Build Experiences. Together."
              width={324}
              height={60}
              sizes="324px"
              priority={false}
              unoptimized
            />
          </div>

          {/* MENU BLOCK */}
          <div className="flex shrink-0 flex-col gap-8 sm:flex-row sm:gap-12 lg:gap-12 relative top-[13px]">
            <div>
              <h3 className="text-[16px] leading-[24px] font-semibold text-portfolio-white">
                Contact
              </h3>
              <a
                href={`mailto:${FOOTER_LINKS.contact.email}`}
                className="block text-[16px] leading-[24px] font-normal text-portfolio-white/90 hover:underline"
              >
                {FOOTER_LINKS.contact.email}
              </a>
              <span className="block text-[16px] leading-[24px] font-normal text-portfolio-white/90">
                {FOOTER_LINKS.contact.phone}
              </span>
            </div>

            <div>
              <h3 className="text-[16px] leading-[24px] font-semibold text-portfolio-white">
                Follow
              </h3>
              {FOOTER_LINKS.follow.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[16px] leading-[24px] font-normal text-portfolio-white/90 hover:underline"
                >
                  {label}
                </Link>
              ))}
            </div>

            <div>
              <h3 className="text-[16px] leading-[24px] font-semibold text-portfolio-white">
                Remote Office
              </h3>
              <p className="text-[16px] leading-[24px] font-normal text-portfolio-white/90">
                {FOOTER_LINKS.office.primary}
              </p>
              <p className="text-[16px] leading-[24px] font-normal text-portfolio-white/90">
                {FOOTER_LINKS.office.secondary}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
