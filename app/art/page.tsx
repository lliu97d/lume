"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox, { LightboxItem } from "@/components/Lightbox";
import { getImageUrl } from "@/lib/images";

type ArtLabel = "all" | "digital" | "traditional" | "mixed";

const artworks: LightboxItem[] = [
  {
    src: "/DSCF2961.JPG",
    title: "Chromatic Dreams",
    label: "Digital",
    description: "An exploration of color and form through digital manipulation, creating dreamlike landscapes.",
  },
  {
    src: "/DSCF3102.JPG",
    title: "Brushwork Study",
    label: "Traditional",
    description: "Traditional brushwork techniques applied to contemporary subjects, bridging past and present.",
  },
  {
    src: "/DSCF3741.JPG",
    title: "Collage No. 5",
    label: "Mixed Media",
    description: "Layered textures and found materials come together to create new visual narratives.",
  },
  {
    src: "/DSCF4113.JPG",
    title: "Geometric Harmony",
    label: "Digital",
    description: "Mathematical precision meets artistic intuition in this study of geometric relationships.",
  },
  {
    src: "/DSCF2877.JPG",
    title: "Abstract Forms",
    label: "Traditional",
    description: "Organic shapes emerge from controlled chaos, revealing hidden patterns in nature.",
  },
];

const filterLabels: { value: ArtLabel; label: string }[] = [
  { value: "all", label: "All" },
  { value: "digital", label: "Digital" },
  { value: "traditional", label: "Traditional" },
  { value: "mixed", label: "Mixed Media" },
];

export default function ArtPage() {
  const [activeFilter, setActiveFilter] = useState<ArtLabel>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredArtworks =
    activeFilter === "all"
      ? artworks
      : artworks.filter((a) => a.label.toLowerCase() === activeFilter || (activeFilter === "mixed" && a.label === "Mixed Media"));

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div>
      {/* Section Header */}
      <div className="mb-12 border-b border-border pb-8">
        <h1 className="font-serif text-4xl font-light tracking-wide text-text-dark">
          Artwork
        </h1>
      </div>

      {/* Filter Pills */}
      <div className="mb-12 flex flex-wrap gap-3">
        {filterLabels.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`rounded-full border px-6 py-2.5 text-xs font-medium uppercase tracking-wider transition-all ${
              activeFilter === filter.value
                ? "border-accent bg-accent text-white"
                : "border-border text-text-med hover:border-accent hover:text-text-dark"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredArtworks.map((artwork, index) => (
          <div
            key={index}
            onClick={() => openLightbox(index)}
            className="group relative cursor-pointer overflow-hidden rounded-sm bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl dark:bg-zinc-900"
          >
            <div className="relative aspect-square w-full overflow-hidden">
              <Image
                src={getImageUrl(artwork.src)}
                alt={artwork.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h3 className="font-serif text-lg text-white">{artwork.title}</h3>
              <span className="text-xs uppercase tracking-wider text-white/80">
                {artwork.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          items={filteredArtworks}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  );
}
