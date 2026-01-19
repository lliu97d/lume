"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getStoryBySlug } from "@/data/stories";
import Lightbox from "@/components/Lightbox";
import { getImageUrl } from "@/lib/images";
import ImageWithLoader from "@/components/ImageWithLoader";

export default function StoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const story = getStoryBySlug(slug);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!story) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center">
        <h1 className="mb-4 font-serif text-3xl text-text-dark">Story not found</h1>
        <Link
          href="/photo"
          className="text-accent transition-colors hover:text-text-dark"
        >
          Back to Photography
        </Link>
      </div>
    );
  }

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div>
      {/* Back link */}
      <Link
        href="/photo"
        className="mb-8 inline-flex items-center gap-2 text-sm text-text-med transition-colors hover:text-text-dark"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
        Back to Photography
      </Link>

      {/* Hero section */}
      <div className="mb-12">
        <h1 className="mb-6 font-serif text-5xl font-light tracking-wide text-text-dark">
          {story.title}
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-text-med">
          {story.description}
        </p>
      </div>

      {/* Photo count */}
      <div className="mb-8 border-b border-border pb-4">
        <span className="text-xs uppercase tracking-wider text-text-med">
          {story.photos.length} photographs
        </span>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {story.photos.map((photo, index) => (
          <div
            key={index}
            onClick={() => openLightbox(index)}
            className="group cursor-pointer"
          >
            <div className="relative mb-4 aspect-[4/5] w-full overflow-hidden rounded-sm bg-white shadow-sm transition-all duration-500 hover:shadow-xl dark:bg-zinc-900">
              <ImageWithLoader
                src={getImageUrl(photo.src)}
                alt={photo.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="font-serif text-lg text-text-dark">{photo.title}</h3>
            {photo.description && (
              <p className="mt-1 text-sm text-text-med">{photo.description}</p>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          items={story.photos}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  );
}
