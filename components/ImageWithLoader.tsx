"use client";

import Image, { ImageProps } from "next/image";
import { useState, useEffect } from "react";

type ImageWithLoaderProps = Omit<ImageProps, "onLoad">;

// Cache of loaded image URLs
const loadedImages = new Set<string>();

export default function ImageWithLoader({
  className = "",
  alt,
  fill,
  src,
  ...props
}: ImageWithLoaderProps) {
  const srcString = typeof src === "string" ? src : "";
  const alreadyLoaded = loadedImages.has(srcString);
  const [isLoading, setIsLoading] = useState(!alreadyLoaded);

  useEffect(() => {
    if (alreadyLoaded) {
      setIsLoading(false);
    }
  }, [alreadyLoaded]);

  const handleLoad = () => {
    if (srcString) {
      loadedImages.add(srcString);
    }
    setIsLoading(false);
  };

  return (
    <>
      {/* Skeleton loader */}
      <div
        className={`absolute inset-0 z-10 overflow-hidden bg-warm-gray transition-opacity duration-700 ease-out ${
          isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      {/* Actual image */}
      <Image
        {...props}
        src={src}
        alt={alt}
        fill={fill}
        className={`transition-opacity duration-700 ease-out ${
          isLoading ? "opacity-0" : "opacity-100"
        } ${className}`}
        onLoad={handleLoad}
      />
    </>
  );
}
