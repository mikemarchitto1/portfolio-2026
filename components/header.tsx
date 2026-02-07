"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Container from "@/components/layout/container";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Connect", href: "#connect" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white text-black dark:bg-black dark:text-white border-b border-black/10 dark:border-white/10">
      <Container className="py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo_slogan.png"
              alt="Michael Marchitto Product Design logo"
              width={180}
              height={40}
              className="h-auto w-[180px]"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-[16px] leading-[24px] tracking-[0px] hover:opacity-70 transition-opacity"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <nav className="mt-6 flex flex-col gap-6 md:hidden">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-[18px] leading-[28px] tracking-[0px] hover:opacity-70 transition-opacity"
              >
                {label}
              </Link>
            ))}
          </nav>
        )}
      </Container>
    </header>
  );
}
