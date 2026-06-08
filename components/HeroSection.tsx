'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES = [
  { id: 'product', duration: 5 },
  { id: 'video',   duration: 10 },
];

export default function HeroSection() {
  const [current, setCurrent]     = useState(0);
  const [countdown, setCountdown] = useState(SLIDES[0].duration);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  /* ─── countdown ticker ─── */
  const clearAll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const startCountdown = useCallback((slideIndex: number) => {
    clearAll();
    const total = SLIDES[slideIndex].duration;
    setCountdown(total);
    intervalRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearAll();
          setCurrent((c) => (c + 1) % SLIDES.length);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    startCountdown(current);
    return clearAll;
  }, [current, startCountdown]);

  const goTo = (idx: number) => { clearAll(); setCurrent(idx); };
  const prev = () => goTo((current - 1 + SLIDES.length) % SLIDES.length);
  const next = () => goTo((current + 1) % SLIDES.length);

  const isVideo = current === 1;
  const total   = SLIDES[current].duration;

  return (
    <section className="relative bg-[#0a0a0a] overflow-hidden" style={{ minHeight: 600 }}>

      {/* ══════════════════════════════════════════════
          VIDEO — always in DOM so autoPlay never breaks
          ══════════════════════════════════════════════ */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          opacity: isVideo ? 1 : 0,
          transition: 'opacity 0.8s ease',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <source
          src="https://res.cloudinary.com/de89avfvi/video/upload/v1780607848/product-video_jjcusc.mp4"
          type="video/mp4"
        />
      </video>

      {/* Black overlay for video slide */}
      <div
        className="absolute inset-0 bg-black transition-opacity duration-700"
        style={{ opacity: isVideo ? 0.65 : 0, zIndex: 1 }}
      />

      {/* ══════════════════════════════════════════════
          SLIDE 1 — product hero
          ══════════════════════════════════════════════ */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] transition-opacity duration-700"
        style={{ opacity: current === 0 ? 1 : 0, zIndex: 2, pointerEvents: current === 0 ? 'auto' : 'none' }}
      >
        <div className="container mx-auto px-4 py-16 h-full flex items-center">
          <div className="grid md:grid-cols-2 gap-8 items-center w-full">
            {/* Text */}
            <div className="text-center md:text-left z-10">
              <h1 className="text-4xl md:text-6xl font-bold text-[#4FBFAD] mb-4">
                Redefining Plastic
                <br />Excellence
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-8">
                Crafting Essentials for Inspired Living
              </p>
              <Link
                href="/"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-black transition-all duration-300 font-medium text-lg"
              >
                Shop now
              </Link>
            </div>

            {/* Product images */}
            <div className="relative h-[500px] hidden md:block">
              <motion.div
                className="absolute top-0 right-0 w-64 h-64"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Image src="/products/hero-bucket-1.png" alt="Plastic Bucket" fill className="object-contain drop-shadow-2xl" />
              </motion.div>
              <motion.div
                className="absolute bottom-0 left-0 w-80 h-80"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <Image src="/products/hero-jar-1.png" alt="Plastic Jar" fill className="object-contain drop-shadow-2xl" />
              </motion.div>
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <Image src="/products/hero-bottle-1.png" alt="Plastic Bottle" fill className="object-contain drop-shadow-2xl" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute -top-24 -right-24 w-96 h-96 bg-[#4FBFAD] opacity-5 rounded-full"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#4FBFAD] opacity-5 rounded-full"
            animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          SLIDE 2 — video text overlay
          ══════════════════════════════════════════════ */}
      <div
        className="absolute inset-0 flex items-center justify-center px-6 transition-opacity duration-700"
        style={{ opacity: current === 1 ? 1 : 0, zIndex: 3, pointerEvents: current === 1 ? 'auto' : 'none' }}
      >
        <div className="max-w-3xl text-center">
          <div className="mx-auto mb-6 w-16 h-1 rounded-full bg-[#4FBFAD]" />
          <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-snug">
            MIPL is{' '}
            <span className="text-[#4FBFAD]">One of Pakistan&apos;s Most Equipped</span>{' '}
            Packaging Manufacturing Concern, Delivering{' '}
            <span className="text-[#4FBFAD]">High-Speed Production at Scale.</span>
          </p>
          <div className="mx-auto mt-6 w-16 h-1 rounded-full bg-[#4FBFAD]" />
        </div>
      </div>

      {/* ══════════════ Height spacer ══════════════ */}
      <div className="invisible pointer-events-none container mx-auto px-4 py-16" style={{ zIndex: -1 }}>
        <div style={{ minHeight: 500 }} />
      </div>

      {/* ══════════════ PREV / NEXT BUTTONS ══════════════ */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        style={{ zIndex: 10 }}
        className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-11 h-11 rounded-full bg-black/40 border border-white/20 text-white backdrop-blur-sm hover:bg-[#4FBFAD] hover:border-[#4FBFAD] transition-all duration-300 group"
      >
        <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        style={{ zIndex: 10 }}
        className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-11 h-11 rounded-full bg-black/40 border border-white/20 text-white backdrop-blur-sm hover:bg-[#4FBFAD] hover:border-[#4FBFAD] transition-all duration-300 group"
      >
        <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
      </button>

      {/* ══════════════ DOTS + VIDEO COUNTDOWN ══════════════ */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4" style={{ zIndex: 10 }}>
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`rounded-full transition-all duration-300 ${
              current === idx
                ? 'w-8 h-3 bg-[#4FBFAD]'
                : 'w-3 h-3 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}

        {/* Ring countdown — video slide only */}
        <AnimatePresence>
          {isVideo && (
            <motion.div
              key="timer"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.3 }}
              className="relative flex items-center justify-center w-10 h-10"
            >
              <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 40 40">
                <circle cx="20" cy="20" r="16" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="3" />
                <circle
                  cx="20" cy="20" r="16"
                  fill="none"
                  stroke="#4FBFAD"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 16}`}
                  strokeDashoffset={`${2 * Math.PI * 16 * (1 - countdown / total)}`}
                  style={{ transition: 'stroke-dashoffset 1s linear' }}
                />
              </svg>
              <span className="relative text-white text-xs font-bold">{countdown}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </section>
  );
}
