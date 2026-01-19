"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox, { LightboxItem } from "@/components/Lightbox";
import { getImageUrl } from "@/lib/images";

const works: LightboxItem[] = [
  {
    src: "/DSCF3741.JPG",
    title: "Experimental Series I",
    label: "Mixed Media",
    description: "An exploration of texture and form, blending traditional techniques with digital manipulation.",
  },
  {
    src: "/DSCF4113.JPG",
    title: "Abstract Thoughts",
    label: "Digital",
    description: "Visual representations of fleeting ideas, captured before they dissolve into memory.",
  },
  {
    src: "/DSCF2961.JPG",
    title: "Found Objects",
    label: "Installation",
    description: "Everyday items reimagined and arranged to reveal hidden narratives and connections.",
  },
  {
    src: "/DSCF3102.JPG",
    title: "Light Studies",
    label: "Experimental",
    description: "Investigations into the behavior of light, shadow, and reflection in controlled environments.",
  },
];

export default function OtherPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div>
      {/* Section Header */}
      <div className="mb-12 border-b border-border pb-8">
        <h1 className="font-serif text-4xl font-light tracking-wide text-text-dark">
          Other Works
        </h1>
        <p className="mt-4 max-w-2xl text-base text-text-med">
          A collection of experimental projects, installations, and works that
          don&apos;t fit neatly into traditional categories. These pieces represent
          creative explorations and personal experiments.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {works.map((work, index) => (
          <div
            key={index}
            onClick={() => openLightbox(index)}
            className="group cursor-pointer"
          >
            <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden rounded-sm bg-white shadow-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl dark:bg-zinc-900">
              <Image
                src={getImageUrl(work.src)}
                alt={work.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-xs uppercase tracking-wider text-white/80">
                  {work.label}
                </span>
              </div>
            </div>
            <h3 className="font-serif text-xl text-text-dark transition-colors group-hover:text-accent">
              {work.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-text-med">
              {work.description}
            </p>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          items={works}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  );
}
