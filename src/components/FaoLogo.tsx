"use client";

import React from 'react';
import Image from 'next/image';

interface FaoLogoProps {
  className?: string;
  theme?: 'dark' | 'light'; // 'dark' = for light backgrounds (black text); 'light' = for dark backgrounds (white text)
  variant?: 'image' | 'badge' | 'text';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function FaoLogo({
  className = "",
  theme = "dark",
  variant = "badge",
  size = "md",
}: FaoLogoProps) {
  // Dimension presets
  const sizeMap = {
    sm: { height: 38, width: 38, textScale: 'text-xs', lineH: 'h-7' },
    md: { height: 50, width: 50, textScale: 'text-sm', lineH: 'h-9' },
    lg: { height: 68, width: 68, textScale: 'text-base', lineH: 'h-12' },
    xl: { height: 100, width: 100, textScale: 'text-xl', lineH: 'h-16' },
  };

  const currentSize = sizeMap[size];

  // Variant "badge": The official black square badge as provided by the user
  if (variant === "badge") {
    return (
      <div className={`flex items-center space-x-3 select-none ${className}`}>
        <div 
          className="relative overflow-hidden rounded-md bg-black border border-neutral-800 shadow-sm shrink-0 flex items-center justify-center"
          style={{ width: currentSize.width, height: currentSize.height }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/fao-logo.jpg"
            alt="FAO Clássicos Logo"
            className="w-full h-full object-cover scale-102"
          />
        </div>
      </div>
    );
  }

  // Variant "image" (adaptable with CSS filter for transparent blending)
  if (variant === "image") {
    return (
      <div className={`relative shrink-0 select-none overflow-hidden ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/fao-logo.jpg"
          alt="FAO Clássicos"
          className={`h-full w-auto object-contain ${
            theme === 'dark' ? 'invert mix-blend-multiply' : 'mix-blend-screen'
          }`}
          style={{ maxHeight: currentSize.height }}
        />
      </div>
    );
  }

  // Variant "text": Vector-clean logo layout matching the exact geometry
  const isLight = theme === 'light';
  const textColor = isLight ? 'text-white' : 'text-neutral-950';
  const lineColor = isLight ? 'bg-white' : 'bg-neutral-950';

  return (
    <div className={`inline-flex items-center space-x-3 select-none ${className}`}>
      {/* Left accent bar */}
      <div className={`w-[2.5px] ${currentSize.lineH} ${lineColor} shrink-0`} />

      <div className="flex flex-col leading-none">
        {/* F Λ O with authentic lambda A */}
        <div className={`font-black tracking-[0.22em] ${textColor} uppercase flex items-center font-sans ${
          size === 'sm' ? 'text-base' : size === 'md' ? 'text-xl' : size === 'lg' ? 'text-2xl' : 'text-4xl'
        }`}>
          <span>F</span>
          <span className="mx-0.5 text-[0.92em]">Λ</span>
          <span>O</span>
        </div>
        
        {/* CLÁSSICOS */}
        <span className={`text-[8px] sm:text-[9px] font-semibold tracking-[0.28em] ${textColor} uppercase mt-1 opacity-90`}>
          CLÁSSICOS
        </span>
      </div>
    </div>
  );
}
