"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Container from "@/components/container";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#connect", label: "Connect" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="py-[16px] md:py-[32px] lg:py-[64px]">
      <Container>
        <div className="flex w-full items-center justify-between px-[16px] md:px-[32px] lg:px-[64px]">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo_mmpd.png"
              alt="Michael Marchitto Product Design"
              width={264}
              height={64}
              priority
              unoptimized
            />
          </Link>

          <nav className="hidden md:flex gap-12 items-center">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-[16px] font-medium text-portfolio-black hover:underline"
              >
                {label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="md:hidden flex h-10 w-10 items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>
    </header>
  );
}
