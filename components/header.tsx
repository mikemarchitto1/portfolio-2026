"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/layout/container";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#connect", label: "Connect" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="mb-32 bg-portfolio-white pt-16 pb-0">
      <Container
        innerClassName="flex w-full items-center justify-between"
      >
        <Link
          href="/"
          className="flex flex-shrink-0 items-center text-portfolio-black no-underline"
          aria-label="Michael Marchitto Product Design - Home"
        >
          <Image
            src="/images/logo_mmpd.png"
            alt=""
            width={210}
            height={48}
            className="h-10 w-auto flex-shrink-0 object-contain md:h-12"
            priority
          />
        </Link>

        <div className="flex flex-shrink-0 items-center justify-end">
          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium text-portfolio-black hover:underline"
              >
                {label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center text-portfolio-black md:hidden"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {mobileMenuOpen && (
        <div className="border-t border-portfolio-black/10 bg-portfolio-white px-4 py-6 md:hidden">
          <nav
            className="flex flex-col gap-4"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-base font-medium text-portfolio-black"
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
