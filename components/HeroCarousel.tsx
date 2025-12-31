"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function HeroCarousel({
  images,
  interval = 5000,
  className = "",
}: {
  images: string[];
  interval?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images, interval]);

  return (
    <div
      className={`absolute inset-0 z-0 overflow-hidden ${className}`}
      aria-hidden
    >
      {images.map((src, i) => (
        <div
          key={src + i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out transform-gpu ${
            i === index
              ? "opacity-100 z-0 scale-100"
              : "opacity-0 -z-10 scale-105"
          }`}
        >
          <Image
            src={src}
            alt={`Background ${i + 1}`}
            fill
            className="object-cover w-full h-full"
            sizes="(max-width: 1024px) 100vw, 1920px"
            priority={i === 0}
          />
        </div>
      ))}
      {/* subtle overlay to keep text readable */}
      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
}
