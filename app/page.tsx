"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getImageUrl } from "@/lib/images";

const featuredWorks = [
  {
    src: "/DSCF2112.JPG",
    title: "Landscapes",
    href: "/photo",
  },
  {
    src: "/DSCF1244.JPG",
    title: "Portraits",
    href: "/photo",
  },
  {
    src: "/DSCF2961.JPG",
    title: "Artwork",
    href: "/art",
  },
];

export default function Home() {
  return (
    <div className="-m-4 -mt-16 md:-m-8 md:-mt-8">
      {/* Hero Section */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={getImageUrl("/DSCF2877.JPG")}
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 text-sm uppercase tracking-[0.3em] text-white/80"
          >
            Photography & Art
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-7xl font-light tracking-wide text-white md:text-8xl lg:text-9xl"
          >
            Lume
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-lg font-light tracking-wide text-white/80"
          >
            Capturing light and moments
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12"
          >
            <Link
              href="/photo"
              className="inline-block border border-white/50 px-8 py-3 text-xs uppercase tracking-[0.2em] text-white transition-all hover:bg-white hover:text-black"
            >
              View Work
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs uppercase tracking-widest text-white/60">
              Scroll
            </span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-white/60"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Works Section */}
      <section className="bg-cream px-4 py-24 md:px-8 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="font-serif text-4xl font-light tracking-wide text-text-dark md:text-5xl">
              Featured Works
            </h2>
            <p className="mt-4 text-text-med">
              A curated selection of recent projects
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {featuredWorks.map((work, index) => (
              <motion.div
                key={work.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={work.href} className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden bg-warm-gray">
                    <Image
                      src={getImageUrl(work.src)}
                      alt={work.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
                  </div>
                  <h3 className="mt-4 text-center font-serif text-xl text-text-dark transition-colors group-hover:text-accent">
                    {work.title}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="bg-warm-gray px-4 py-24 md:px-8 dark:bg-zinc-900">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-text-med">
              About
            </p>
            <p className="font-serif text-2xl font-light leading-relaxed text-text-dark md:text-3xl">
              I&apos;m a visual artist and photographer exploring the intersection
              of natural beauty and human experience, finding poetry in both
              grand landscapes and intimate moments.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-block border-b border-accent pb-1 text-sm uppercase tracking-[0.15em] text-accent transition-colors hover:border-text-dark hover:text-text-dark"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="relative overflow-hidden bg-text-dark px-4 py-24 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10 mx-auto max-w-2xl text-center"
        >
          <h2 className="font-serif text-4xl font-light tracking-wide text-white md:text-5xl">
            Let&apos;s Work Together
          </h2>
          <p className="mt-4 text-white/70">
            Available for commissions, collaborations, and creative projects
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-white px-8 py-3 text-xs uppercase tracking-[0.2em] text-text-dark transition-all hover:bg-accent hover:text-white"
          >
            Get In Touch
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
