"use client";

import React, { useState } from 'react';
import { X, Award, MessageCircle, Share2, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { Car } from '@/data/cars';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

interface VehicleDetailModalProps {
  car: Car | null;
  onClose: () => void;
}

export default function VehicleDetailModal({ car, onClose }: VehicleDetailModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  if (!car) return null;

  const images = car.images && car.images.length > 0 ? car.images : [car.heroImage];

  const handleShare = () => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Olá, equipe da FAO Clássicos! Tenho interesse no ${car.brand} ${car.model} (${car.yearModel}) anunciado por ${car.price}. Gostaria de mais fotos, laudo de originalidade e informações para agendar uma visita.`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 md:p-6 animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden my-auto border border-neutral-100">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100 bg-white sticky top-0 z-20">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
              FAO Clássicos • Acervo
            </span>
            <span className="text-neutral-300">/</span>
            <span className="text-xs font-semibold text-neutral-800">
              {car.brand} {car.model}
            </span>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="rounded-full hover:bg-[#a11a1a] hover:text-white"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Content Body */}
        <div className="max-h-[85vh] overflow-y-auto p-6 md:p-10 space-y-10">
          
          {/* Main Photo Gallery */}
          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden bg-neutral-900 aspect-video md:aspect-[16/9] max-h-[500px] group">
              <img
                src={images[activeImageIndex]}
                alt={`${car.brand} ${car.model}`}
                className="w-full h-full object-cover car-image-treatment"
              />

              {/* Prev / Next photo buttons */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={() => setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setActiveImageIndex((prev) => (prev + 1) % images.length)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Badges on main image */}
              <div className="absolute top-4 left-4 flex gap-2">
                {car.placaPreta && (
                  <Badge variant="placaPreta" className="text-xs py-1.5 px-3">
                    <Award className="w-3.5 h-3.5 text-amber-400 mr-1" />
                    Placa Preta
                  </Badge>
                )}
                <Badge variant="default" className="text-xs py-1.5 px-3">
                  {car.badge || "Exclusivo"}
                </Badge>
              </div>
            </div>

            {/* Thumbnail Strip */}
            {images.length > 1 && (
              <div className="flex items-center space-x-3 overflow-x-auto pb-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-24 h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      activeImageIndex === idx ? 'border-[#a11a1a] scale-102 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Miniatura ${idx + 1}`} className="w-full h-full object-cover car-image-treatment" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Title, Price and Action Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-neutral-100 pb-10">
            <div className="lg:col-span-8 space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#a11a1a]">
                {car.brand}
              </span>
              <h2 className="text-2xl md:text-4xl font-black text-neutral-950 tracking-tight leading-tight">
                {car.brand} {car.model}
              </h2>
              <p className="text-sm md:text-base text-neutral-600 font-medium">
                {car.version}
              </p>
            </div>

            <div className="lg:col-span-4 bg-neutral-50 p-6 rounded-2xl border border-neutral-100 text-left space-y-4">
              <div>
                <span className="text-xs text-neutral-400 uppercase tracking-widest block font-medium">Valor Solicitado</span>
                <span className="text-2xl md:text-3xl font-black text-neutral-950 tracking-tight">
                  {car.price}
                </span>
              </div>

              {/* Direct WhatsApp Call to Action */}
              <a
                href={`https://api.whatsapp.com/send?phone=5511987654321&text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center space-x-2 py-3.5 px-4 bg-[#25D366] hover:bg-[#1fa952] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Negociar no WhatsApp</span>
              </a>

              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleShare}
                  className="w-full flex items-center gap-1.5"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{copied ? 'Link Copiado!' : 'Compartilhar'}</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Technical Specifications Matrix */}
          <div>
            <h3 className="text-lg font-bold text-neutral-900 mb-4 uppercase tracking-wider">
              Ficha Técnica & Detalhes
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-100">
                <span className="text-[11px] text-neutral-400 uppercase block font-medium">Ano/Modelo</span>
                <span className="text-sm font-bold text-neutral-900 mt-1 block">{car.yearModel}</span>
              </div>

              <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-100">
                <span className="text-[11px] text-neutral-400 uppercase block font-medium">Quilometragem</span>
                <span className="text-sm font-bold text-neutral-900 mt-1 block">{car.km}</span>
              </div>

              <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-100">
                <span className="text-[11px] text-neutral-400 uppercase block font-medium">Motorização</span>
                <span className="text-sm font-bold text-neutral-900 mt-1 block">{car.engine}</span>
              </div>

              <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-100">
                <span className="text-[11px] text-neutral-400 uppercase block font-medium">Potência</span>
                <span className="text-sm font-bold text-neutral-900 mt-1 block">{car.power}</span>
              </div>

              <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-100">
                <span className="text-[11px] text-neutral-400 uppercase block font-medium">Câmbio</span>
                <span className="text-sm font-bold text-neutral-900 mt-1 block">{car.transmission}</span>
              </div>

              <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-100">
                <span className="text-[11px] text-neutral-400 uppercase block font-medium">Combustível</span>
                <span className="text-sm font-bold text-neutral-900 mt-1 block">{car.fuel}</span>
              </div>

              <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-100">
                <span className="text-[11px] text-neutral-400 uppercase block font-medium">Cor Externa</span>
                <span className="text-sm font-bold text-neutral-900 mt-1 block">{car.color}</span>
              </div>

              <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-100">
                <span className="text-[11px] text-neutral-400 uppercase block font-medium">Acabamento Interno</span>
                <span className="text-sm font-bold text-neutral-900 mt-1 block">{car.interior}</span>
              </div>
            </div>
          </div>

          {/* Description & Curatorial Assessment */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-neutral-900 uppercase tracking-wider">
              Histórico & Avaliação de Originalidade
            </h3>
            <p className="text-neutral-700 text-sm md:text-base leading-relaxed bg-white border-l-4 border-[#a11a1a] pl-4 py-2">
              {car.description}
            </p>
          </div>

          {/* Highlights Checklist */}
          {car.highlights && car.highlights.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-neutral-900 mb-4 uppercase tracking-wider">
                Destaques Verificados pela FAO Clássicos
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {car.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2.5 text-xs text-neutral-800 bg-neutral-50 p-3 rounded-lg border border-neutral-100">
                    <div className="w-4 h-4 rounded-full bg-[#a11a1a] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 text-white" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Consultant Box */}
          <div className="p-6 bg-neutral-900 text-white rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-base font-bold text-white mb-1">
                Deseja agendar uma visita privativa ao Showroom?
              </h4>
              <p className="text-xs text-neutral-400">
                Nossos consultores estão prontos para apresentar este exemplar em detalhes.
              </p>
            </div>
            <a
              href={`https://api.whatsapp.com/send?phone=5511987654321&text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-[#a11a1a] hover:bg-[#831414] text-white text-xs font-semibold uppercase tracking-wider h-11 px-7 rounded-full shadow-lg shadow-red-950/20 transition-all cursor-pointer whitespace-nowrap"
            >
              Falar com o Curador
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
