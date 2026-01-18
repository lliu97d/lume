"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/photo", label: "Photo" },
  { href: "/art", label: "Art" },
  { href: "/other", label: "Other" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://instagram.com", label: "Ig" },
  { href: "https://twitter.com", label: "Tw" },
  { href: "https://behance.net", label: "Be" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile hamburger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-4 top-4 z-50 flex h-12 w-12 flex-col items-center justify-center gap-1.5 bg-transparent md:hidden"
        aria-label="Toggle menu"
      >
        <span
          className={`h-0.5 w-6 bg-text-dark transition-all duration-300 ${isOpen ? "translate-y-2 rotate-45" : ""}`}
        />
        <span
          className={`h-0.5 w-6 bg-text-dark transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`h-0.5 w-6 bg-text-dark transition-all duration-300 ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}
        />
      </button>

      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0 z-30 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Navigation sidebar */}
      <nav
        className={`fixed left-0 top-0 z-40 flex h-full w-64 flex-col border-r border-border bg-cream transition-transform duration-300 dark:bg-zinc-950 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {/* Logo */}
        <div className="px-8 pb-8 pt-12">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="font-serif text-2xl tracking-wide text-text-dark transition-colors hover:text-accent"
          >
            Lume
          </Link>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-text-med">
            Photography & Art
          </p>
        </div>

        {/* Nav Links */}
        <ul className="flex flex-1 flex-col gap-1 px-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`group relative block px-4 py-3 text-sm uppercase tracking-[0.15em] transition-all duration-300 ${
                    isActive
                      ? "text-text-dark"
                      : "text-text-med hover:text-text-dark"
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {/* Active indicator */}
                  <span
                    className={`absolute left-0 top-1/2 h-px -translate-y-1/2 bg-accent transition-all duration-300 ${
                      isActive ? "w-3" : "w-0 group-hover:w-2"
                    }`}
                  />
                  {/* Hover background */}
                  <span
                    className={`absolute inset-0 -z-0 rounded bg-warm-gray transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0 group-hover:opacity-50"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Bottom section */}
        <div className="border-t border-border px-8 py-6">
          {/* Social Links */}
          <div className="mb-4 flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-wider text-text-med transition-colors hover:text-accent"
              >
                {social.label}
              </a>
            ))}
          </div>
          {/* Copyright */}
          <p className="text-xs text-text-med/60">
            © {new Date().getFullYear()} Lume
          </p>
        </div>
      </nav>
    </>
  );
}
