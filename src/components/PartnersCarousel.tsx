"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Keep ITEM_WIDTH = card width + gap in px to avoid jump at the loop seam
const CARD_WIDTH = 260;      // card visual width
const GAP_PX = 24;           // gap-6 = 24px
const ITEM_WIDTH = CARD_WIDTH + GAP_PX;

const partners = [
  { src: "/partners/almadina.jpg", alt: "Almadina" },
  { src: "/partners/sraco.jpg", alt: "SRACO" },
  { src: "/partners/syal.jpg", alt: "Syal" },
];

export default function PartnersCarousel() {
  const [x, setX] = useState(0);
  const [paused, setPaused] = useState(false);
  const displayPartners = [...partners, ...partners];
  const speed = 1.0;
  const rafRef = useRef<number | null>(null);
  const lastRef = useRef<number | null>(null);

  useEffect(() => {
    const tick = (ts: number) => {
      if (lastRef.current == null) lastRef.current = ts;
      const delta = ts - (lastRef.current ?? ts);
      lastRef.current = ts;

      if (!paused) {
        setX((prev) => {
          const totalWidth = partners.length * ITEM_WIDTH;
          let next = prev + speed * (delta / 16.67);
          if (next >= totalWidth) next -= totalWidth;
          return next;
        });
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastRef.current = null;
    };
  }, [paused]);

  return (
    <section id="partners" className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Our International Partners</h2>
          <div className="h-1 w-20 bg-[#d4b996] mx-auto mt-3" />
        </div>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
          aria-label="Scrolling partner logos"
        >
          {/* Edge fades */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white to-transparent" />

          <div
            className="flex items-center gap-6 will-change-transform"
            style={{ transform: `translateX(-${x}px)` }}
          >
            {displayPartners.map((p, i) => (
              <div
                key={`${p.alt}-${i}`}
                className="relative shrink-0 w-[260px] h-24 md:h-28 flex items-center justify-center" // bigger and no gray bg
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 768px) 260px, 260px"
                  className="object-contain opacity-90 hover:opacity-100 transition-opacity"
                  priority={i < 3}
                  quality={95}
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}