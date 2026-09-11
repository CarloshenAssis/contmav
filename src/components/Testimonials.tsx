"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site-config";
import { testimonials } from "@/lib/data";

const AUTOPLAY_MS = 5000;

function useVisibleCount() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setCount(3);
      else if (window.innerWidth >= 640) setCount(2);
      else setCount(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return count;
}

function TestimonialCard({ name, text }: { name: string; text: string }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = text.length > 220;
  const display = !isLong || expanded ? text : `${text.slice(0, 220).trim()}…`;

  return (
    <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-7">
      <div className="flex text-gold">
        {"★★★★★".split("").map((s, i) => (
          <span key={i}>{s}</span>
        ))}
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-graphite/75">
        &ldquo;{display}&rdquo;
        {isLong && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="ml-1.5 inline font-semibold text-blue hover:text-gold"
          >
            {expanded ? "Ler menos" : "Ler mais"}
          </button>
        )}
      </p>
      <p className="mt-5 text-sm font-semibold text-navy-dark">{name}</p>
      <p className="text-xs text-graphite/50">Avaliação no Google</p>
    </div>
  );
}

export function Testimonials() {
  const visibleCount = useVisibleCount();
  const maxIndex = Math.max(0, testimonials.length - visibleCount);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const [lastMaxIndex, setLastMaxIndex] = useState(maxIndex);

  if (maxIndex !== lastMaxIndex) {
    setLastMaxIndex(maxIndex);
    setIndex((i) => Math.min(i, maxIndex));
  }

  const next = useCallback(() => {
    setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  }, [maxIndex]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [next, paused]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 40) prev();
    else if (delta < -40) next();
    touchStartX.current = null;
  };

  return (
    <section
      id="avaliacoes"
      className="scroll-mt-20 bg-gray-50 py-20 sm:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="Avaliações"
          title="Quem conhece, recomenda."
          subtitle={`${siteConfig.google.rating} estrelas no Google com ${siteConfig.google.reviews} avaliações.`}
          align="center"
        />

        <div
          className="relative mt-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${(index * 100) / visibleCount}%)`,
              }}
            >
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="shrink-0 px-2.5"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <TestimonialCard name={t.name} text={t.text} />
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={prev}
            aria-label="Avaliação anterior"
            className="absolute left-0 top-1/2 hidden -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white p-2.5 text-navy-dark shadow-sm hover:bg-gray-50 sm:flex"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 6-6 6 6 6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Próxima avaliação"
            className="absolute right-0 top-1/2 hidden translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white p-2.5 text-navy-dark shadow-sm hover:bg-gray-50 sm:flex"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 6 6 6-6 6" />
            </svg>
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Ir para avaliação ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-gold" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={siteConfig.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-blue hover:text-gold"
          >
            Ver todas as avaliações no Google →
          </a>
        </div>
      </Container>
    </section>
  );
}
