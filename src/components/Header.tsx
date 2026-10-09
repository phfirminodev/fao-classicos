"use client";

import React, { useState, useEffect } from 'react';
import { Phone, Search, Menu, X } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { BRANDS } from '@/data/cars';
import { Button } from '@/components/ui/button';

const ROTATING_BRANDS = ["CHEVROLET", "FORD", "DODGE", "PORSCHE", "FERRARI", "VOLKSWAGEN", "PUMA"];

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onSelectBrand: (brand: string) => void;
  selectedBrand: string;
}

export default function Header({
  activeTab,
  setActiveTab,
  onSelectBrand,
  selectedBrand,
}: HeaderProps) {
  const [brandIndex, setBrandIndex] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Auto-rotate brands in search pill every 2.4s (GPS Motors signature)
  useEffect(() => {
    const interval = setInterval(() => {
      setBrandIndex((prev) => (prev + 1) % ROTATING_BRANDS.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  // Detect scroll for sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Início', index: 0 },
    { id: 'veiculos', label: 'Veículos', index: 1 },
    { id: 'sobre', label: 'Sobre', index: 2 },
    { id: 'contato', label: 'Contato', index: 3 },
  ];

  const currentNavIndex = navItems.find((item) => item.id === activeTab)?.index ?? 0;

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm' : 'bg-white/80 backdrop-blur-sm py-6 md:py-8'
        }`}
      >
        <div className="max-w-[1340px] mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between">
            {/* Logo Oficial FAO Clássicos */}
            <div 
              className="cursor-pointer flex items-center space-x-3 select-none group"
              onClick={() => {
                setActiveTab('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="relative h-11 w-11 md:h-12 md:w-12 bg-black rounded-lg overflow-hidden border border-neutral-800 shadow-sm shrink-0 flex items-center justify-center group-hover:scale-102 transition-transform">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/fao-logo.jpg"
                  alt="FAO Clássicos Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <div className="text-lg md:text-xl font-bold tracking-[0.2em] text-neutral-950 uppercase leading-none font-sans flex items-center">
                  <span>F</span>
                  <span className="mx-0.5 text-[0.9em]">Λ</span>
                  <span>O</span>
                  <span className="text-[#a11a1a] ml-1.5 font-semibold">CLÁSSICOS</span>
                </div>
                <span className="text-[9px] tracking-[0.28em] text-neutral-400 uppercase mt-1 font-medium">
                  Veículos de Coleção
                </span>
              </div>
            </div>

            {/* Central Search / Brand Selector Button (GPS Motors Style) */}
            <div className="relative hidden md:block">
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center justify-center px-6 py-2.5 bg-neutral-100/70 hover:bg-[#fff4f4] border border-[#eaeaea] rounded-full transition-all duration-300 group cursor-pointer"
              >
                {/* Rotating brand icon/badge */}
                <div className="w-6 h-6 rounded-full bg-neutral-200/80 flex items-center justify-center overflow-hidden mr-3">
                  <span className="text-[10px] font-bold text-neutral-700 transition-transform duration-500">
                    {ROTATING_BRANDS[brandIndex].slice(0, 2)}
                  </span>
                </div>
                
                {/* Title and current rotating brand */}
                <span className="text-xs text-neutral-600 group-hover:text-[#a11a1a] transition-colors font-medium">
                  Pesquise por marca: <strong className="text-neutral-900 uppercase ml-1">{selectedBrand !== 'Todas' ? selectedBrand : ROTATING_BRANDS[brandIndex]}</strong>
                </span>

                <Search className="w-3.5 h-3.5 ml-3 text-neutral-400 group-hover:text-[#a11a1a] transition-colors" />
              </button>

              {/* Brand Selector Dropdown */}
              {dropdownOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setDropdownOpen(false)} 
                  />
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-64 bg-white border border-[#eaeaea] rounded-2xl shadow-xl z-20 py-2 max-h-72 overflow-y-auto">
                    <div className="px-4 py-2 border-b border-neutral-100 text-[11px] font-semibold tracking-wider uppercase text-neutral-400">
                      Filtrar Marca
                    </div>
                    {BRANDS.map((brand) => (
                      <button
                        key={brand}
                        onClick={() => {
                          onSelectBrand(brand);
                          setDropdownOpen(false);
                          setActiveTab('veiculos');
                        }}
                        className={`w-full text-left px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-between ${
                          selectedBrand === brand
                            ? 'bg-[#fff4f4] text-[#a11a1a]'
                            : 'text-neutral-700 hover:bg-neutral-50 hover:text-[#a11a1a]'
                        }`}
                      >
                        <span>{brand}</span>
                        {selectedBrand === brand && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#a11a1a]" />
                        )}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Right side: Phone & Vertical indicator Navigation */}
            <div className="hidden lg:flex items-center space-x-10">
              {/* Phone contact */}
              <a
                href="https://api.whatsapp.com/send?phone=5511987654321&text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20FAO%20Cl%C3%A1ssicos."
                target="_blank"
                rel="noreferrer"
                className="flex items-center text-xs text-neutral-500 hover:text-[#a11a1a] transition-colors group"
              >
                <div className="w-7 h-7 rounded-full bg-neutral-100 group-hover:bg-[#fff4f4] flex items-center justify-center mr-2 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-neutral-500 group-hover:text-[#a11a1a] transition-colors" />
                </div>
                <span>
                  (11) 98765-4321 <span className="text-[10px] text-neutral-400 block font-light">Consultor Especialista</span>
                </span>
              </a>

              {/* Navigation with GPS Motors red active bar */}
              <div className="relative pr-6">
                <div
                  className="absolute right-0 w-[2px] bg-[#a11a1a] transition-all duration-300 ease-out"
                  style={{
                    height: '18px',
                    top: `${currentNavIndex * 26 + 2}px`
                  }}
                />

                <ul className="text-right space-y-1.5">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => {
                          setActiveTab(item.id);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className={`text-xs uppercase tracking-wider font-medium transition-colors ${
                          activeTab === item.id
                            ? 'text-[#a11a1a] font-semibold'
                            : 'text-neutral-500 hover:text-neutral-900'
                        }`}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Mobile Burger Menu Button */}
            <div className="lg:hidden flex items-center space-x-3">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Abrir Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-[#a11a1a]" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div
        className={`fixed inset-0 bg-white z-50 flex flex-col justify-between p-8 transition-all duration-500 ease-[cubic-bezier(0.5,0,0,1)] lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-neutral-100 pb-6">
          <div className="flex items-center space-x-3">
            <div className="relative h-10 w-10 bg-black rounded-lg overflow-hidden border border-neutral-800 shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/fao-logo.jpg"
                alt="FAO Clássicos Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-[0.2em] text-neutral-900 uppercase leading-none font-sans flex items-center">
                <span>F</span>
                <span className="mx-0.5 text-[0.9em]">Λ</span>
                <span>O</span>
                <span className="text-[#a11a1a] ml-1.5 font-semibold">CLÁSSICOS</span>
              </span>
              <span className="text-[8px] tracking-[0.22em] text-neutral-400 uppercase mt-1">
                Veículos de Coleção
              </span>
            </div>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Links list */}
        <div className="py-8">
          <ul className="space-y-6 text-center">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`text-xl uppercase tracking-widest font-semibold transition-colors ${
                    activeTab === item.id ? 'text-[#a11a1a]' : 'text-neutral-800'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Contacts & Social */}
        <div className="border-t border-neutral-100 pt-6 space-y-5 text-center">
          <a
            href="https://api.whatsapp.com/send?phone=5511987654321"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center space-x-2 text-sm text-neutral-700 bg-neutral-100 px-6 py-3 rounded-full w-full font-medium"
          >
            <Phone className="w-4 h-4 text-[#a11a1a]" />
            <span>(11) 98765-4321 • Consultor</span>
          </a>

          <div className="flex justify-center space-x-4 pt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 hover:text-[#a11a1a]"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
