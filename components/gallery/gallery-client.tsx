"use client";
import Image from "next/image";
import { useState } from "react";

type GalleryImage = { src: string; alt?: string; aspect?: string };

export function GalleryClient({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState<string | null>(null);
  const activeImage = images.find(i => i.src === active);
  return (
    <>
      <div className="mt-8 columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
        {images.map(img => (
          <button key={img.src} className="mb-4 block w-full overflow-hidden rounded-xl focus:outline-none" onClick={() => setActive(img.src)}>
            <div className="relative w-full" style={{ aspectRatio: img.aspect || "4/3" }}>
              <Image src={img.src} alt={img.alt || ""} fill className="object-cover object-[center_30%]" />
            </div>
          </button>
        ))}
      </div>
      {activeImage && (
        <button className="fixed inset-0 z-50 bg-black/70 backdrop-blur flex items-center justify-center p-6" onClick={() => setActive(null)} aria-label="Close lightbox">
          <div className="relative w-full max-w-5xl aspect-[16/10]">
            <Image src={activeImage.src} alt={activeImage.alt || ""} fill className="object-contain" />
          </div>
        </button>
      )}
    </>
  );
}


