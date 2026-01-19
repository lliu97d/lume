"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Lightbox, { LightboxItem } from "@/components/Lightbox";
import { stories } from "@/data/stories";
import { getImageUrl } from "@/lib/images";

type ViewMode = "labels" | "stories";
type PhotoLabel = "all" | "portrait" | "street" | "landscape";

const photos: LightboxItem[] = [
  {
    src: "/DSCF1244.JPG",
    title: "Morning Light",
    label: "Portrait",
    description: "Soft morning light filtering through the window, capturing a quiet moment of reflection.",
  },
  {
    src: "/DSCF1249.JPG",
    title: "Urban Lines",
    label: "Street",
    description: "The geometric patterns of city architecture create a rhythm of light and shadow.",
  },
  {
    src: "/DSCF2112.JPG",
    title: "Mountain Mist",
    label: "Landscape",
    description: "Early morning fog rolling through the mountain valleys, creating layers of depth.",
  },
  {
    src: "/DSCF2632.JPG",
    title: "Candid Moment",
    label: "Portrait",
    description: "An unguarded moment caught in natural light, revealing genuine emotion.",
  },
  {
    src: "/DSCF2715.JPG",
    title: "City Reflections",
    label: "Street",
    description: "Rain-soaked streets mirror the city lights, doubling the urban landscape.",
  },
  {
    src: "/DSCF2955.JPG",
    title: "Endless Horizon",
    label: "Landscape",
    description: "Where sky meets earth, the vastness of nature stretches beyond comprehension.",
  },
];

const filterLabels: { value: PhotoLabel; label: string }[] = [
  { value: "all", label: "All" },
  { value: "portrait", label: "Portrait" },
  { value: "street", label: "Street" },
  { value: "landscape", label: "Landscape" },
];

export default function PhotoPage() {
  const [viewMode, setViewMode] = useState<ViewMode>("labels");
  const [activeFilter, setActiveFilter] = useState<PhotoLabel>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredPhotos =
    activeFilter === "all"
      ? photos
      : photos.filter((p) => p.label.toLowerCase() === activeFilter);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div>
      {/* Section Header */}
      <div className="mb-12 flex flex-col gap-6 border-b border-border pb-8 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="font-serif text-4xl font-light tracking-wide text-text-dark">
          Photography
        </h1>
        <div className="flex gap-1 rounded-full bg-warm-gray p-1">
          <button
            onClick={() => setViewMode("labels")}
            className={`rounded-full px-5 py-2 text-xs font-medium uppercase tracking-wider transition-all ${
              viewMode === "labels"
                ? "bg-white text-text-dark shadow-sm dark:bg-zinc-800"
                : "text-text-med hover:text-text-dark"
            }`}
          >
            By Label
          </button>
          <button
            onClick={() => setViewMode("stories")}
            className={`rounded-full px-5 py-2 text-xs font-medium uppercase tracking-wider transition-all ${
              viewMode === "stories"
                ? "bg-white text-text-dark shadow-sm dark:bg-zinc-800"
                : "text-text-med hover:text-text-dark"
            }`}
          >
            By Story
          </button>
        </div>
      </div>

      {/* Labels View */}
      {viewMode === "labels" && (
        <>
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
            {filteredPhotos.map((photo, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                className="group relative cursor-pointer overflow-hidden rounded-sm bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl dark:bg-zinc-900"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={getImageUrl(photo.src)}
                    alt={photo.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="font-serif text-lg text-white">{photo.title}</h3>
                  <span className="text-xs uppercase tracking-wider text-white/80">
                    {photo.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Stories View */}
      {viewMode === "stories" && (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {stories.map((story) => (
            <Link
              key={story.slug}
              href={`/photo/story/${story.slug}`}
              className="group block"
            >
              <div className="relative mb-4 aspect-[3/2] w-full overflow-hidden rounded-sm bg-white shadow-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl dark:bg-zinc-900">
                <Image
                  src={getImageUrl(story.coverImage)}
                  alt={story.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="font-serif text-2xl text-white">{story.title}</h2>
                  <span className="mt-1 text-xs uppercase tracking-wider text-white/70">
                    {story.photos.length} photographs
                  </span>
                </div>
              </div>
              <p className="line-clamp-2 text-sm leading-relaxed text-text-med transition-colors group-hover:text-text-dark">
                {story.description}
              </p>
            </Link>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          items={filteredPhotos}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  );
}
