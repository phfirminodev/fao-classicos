"use client";

import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [active, setActive] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Stage 1: activate logo and progress line
    const timer1 = setTimeout(() => {
      setActive(true);
    }, 100);

    // Stage 2: start lift curtain
    const timer2 = setTimeout(() => {
      setFadeOut(true);
    }, 1200);

    // Stage 3: unmount preloader
    const timer3 = setTimeout(() => {
      if (onComplete) onComplete();
    }, 1800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <div
      onClick={() => onComplete && onComplete()}
      className={`fixed inset-0 cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.5,0,0,1)] ${
        fadeOut ? 'opacity-0 -translate-y-full pointer-events-none' : 'opacity-100 translate-y-0 z-[9999]'
      }`}
      style={{ zIndex: 9999 }}
    >
      {/* Background layer */}
      <div className="absolute inset-0 bg-[#0c0c0c] flex flex-col items-center justify-center">
        {/* Brand Logo & Name */}
        <div className="relative text-center flex flex-col items-center px-4">
          <div
            className={`transition-all duration-700 transform ${
              active ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
            }`}
          >
            {/* Monogram Badge */}
            <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 border border-[#a11a1a]/40 rounded-xl overflow-hidden bg-black shadow-[0_0_35px_rgba(161,26,26,0.35)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/fao-logo.jpg"
                alt="FAO Clássicos"
                className="w-full h-full object-cover"
              />
            </div>
            
            <h1 className="text-2xl md:text-4xl font-bold tracking-[0.2em] text-white uppercase font-sans flex items-center justify-center">
              <span>F</span>
              <span className="mx-0.5 text-[0.9em]">Λ</span>
              <span>O</span>
              <span className="text-[#a11a1a] ml-2">CLÁSSICOS</span>
            </h1>
            
            <p className="text-xs md:text-sm tracking-[0.35em] text-neutral-400 uppercase mt-2 font-medium">
              Curadoria & Automóveis de Coleção
            </p>
          </div>
        </div>

        {/* GPS Motors bottom red loading line */}
        <div className="absolute bottom-0 left-0 w-full h-[6px] bg-neutral-900 overflow-hidden">
          <div
            className={`h-full bg-[#a11a1a] transition-all duration-1000 ease-out ${
              active ? 'w-full' : 'w-0'
            }`}
          />
        </div>
      </div>
    </div>
  );
}
