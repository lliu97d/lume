"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/photo", label: "Photo" },
  { href: "/art", label: "Art" },
  { href: "/other", label: "Other" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile hamburger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-4 top-4 z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded bg-white dark:bg-zinc-950 md:hidden"
        aria-label="Toggle menu"
      >
        <span
          className={`h-0.5 w-6 bg-zinc-600 transition-transform dark:bg-zinc-400 ${isOpen ? "translate-y-2 rotate-45" : ""}`}
        />
        <span
          className={`h-0.5 w-6 bg-zinc-600 dark:bg-zinc-400 ${isOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`h-0.5 w-6 bg-zinc-600 transition-transform dark:bg-zinc-400 ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}
        />
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Navigation sidebar */}
      <nav
        className={`fixed left-0 top-0 z-40 h-full w-48 border-r border-zinc-200 bg-white p-6 transition-transform dark:border-zinc-800 dark:bg-zinc-950 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <ul className="mt-12 flex flex-col gap-2 md:mt-0">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block rounded px-3 py-2 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
