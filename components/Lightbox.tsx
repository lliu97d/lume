"use client";

import Image from "next/image";
import { useEffect, useCallback } from "react";

export interface LightboxItem {
  src: string;
  title: string;
  label: string;
  description?: string;
}

interface LightboxProps {
  items: LightboxItem[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({
  items,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const currentItem = items[currentIndex];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        onNavigate(currentIndex > 0 ? currentIndex - 1 : items.length - 1);
      } else if (e.key === "ArrowRight") {
        onNavigate(currentIndex < items.length - 1 ? currentIndex + 1 : 0);
      }
    },
    [currentIndex, items.length, onClose, onNavigate]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black/95">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        aria-label="Close"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Navigation arrows */}
      <button
        onClick={() =>
          onNavigate(currentIndex > 0 ? currentIndex - 1 : items.length - 1)
        }
        className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        aria-label="Previous"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        onClick={() =>
          onNavigate(currentIndex < items.length - 1 ? currentIndex + 1 : 0)
        }
        className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        aria-label="Next"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Main image area */}
      <div className="flex flex-1 items-center justify-center p-4 pb-0">
        <div className="relative h-full w-full max-w-5xl">
          <Image
            src={currentItem.src}
            alt={currentItem.title}
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Bottom section: description + thumbnails */}
      <div className="flex-shrink-0 bg-gradient-to-t from-black to-transparent px-4 pb-4 pt-8">
        {/* Description */}
        <div className="mx-auto mb-4 max-w-2xl text-center">
          <h2 className="font-serif text-xl text-white">{currentItem.title}</h2>
          <p className="mt-1 text-sm uppercase tracking-wider text-white/60">
            {currentItem.label}
          </p>
          {currentItem.description && (
            <p className="mt-2 text-sm text-white/80">
              {currentItem.description}
            </p>
          )}
        </div>

        {/* Thumbnails */}
        <div className="flex justify-center gap-2 overflow-x-auto py-2">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => onNavigate(index)}
              className={`relative h-16 w-16 flex-shrink-0 overflow-hidden rounded transition-all ${
                index === currentIndex
                  ? "ring-2 ring-white ring-offset-2 ring-offset-black"
                  : "opacity-50 hover:opacity-100"
              }`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
