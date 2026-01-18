"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="-m-4 -mt-16 md:-m-8 md:-mt-8">
      {/* Hero Section with Monotone Background */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
        {/* Background Image - Monotone */}
        <div className="absolute inset-0">
          <Image
            src="/DSCF1244.JPG"
            alt="Portrait"
            fill
            className="object-cover grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-cream dark:to-zinc-950" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 px-4 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 text-sm uppercase tracking-[0.3em] text-white/80"
          >
            The Artist
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-5xl font-light tracking-wide text-white md:text-7xl"
          >
            About
          </motion.h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-cream px-4 py-24 md:px-8 dark:bg-zinc-950">
        <div className="mx-auto max-w-3xl">
          {/* Intro Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <p className="font-serif text-2xl font-light leading-relaxed text-text-dark md:text-3xl">
              &ldquo;I believe the most compelling images emerge when we allow
              ourselves to be fully present, attuned to the subtle shifts in
              light, mood, and atmosphere.&rdquo;
            </p>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 text-base leading-relaxed text-text-med"
          >
            <p>
              I&apos;m a visual artist and photographer based between cities,
              always chasing the perfect light. My work explores the
              intersection of natural beauty and human experience, finding
              poetry in both grand landscapes and intimate moments.
            </p>
            <p>
              With over a decade of experience, I&apos;ve had the privilege of
              exhibiting internationally and collaborating with brands that
              share my vision for authentic, evocative imagery. Each project is
              an opportunity to tell a story that resonates beyond the frame.
            </p>
            <p>
              When I&apos;m not behind the camera, you&apos;ll find me exploring
              new trails, experimenting with traditional painting techniques, or
              getting lost in used bookstores.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-text-dark px-4 py-24 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10 mx-auto max-w-2xl text-center"
        >
          <h2 className="font-serif text-3xl font-light tracking-wide text-white md:text-4xl">
            Interested in working together?
          </h2>
          <p className="mt-4 text-white/70">
            I&apos;d love to hear about your project
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
