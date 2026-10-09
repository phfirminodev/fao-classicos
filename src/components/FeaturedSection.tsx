"use client";

import React from 'react';
import { ChevronRight, Award, Gauge, Calendar, Fuel } from 'lucide-react';
import { Car } from '@/data/cars';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

interface FeaturedSectionProps {
  cars: Car[];
  onSelectCar: (car: Car) => void;
  onOpenInventory: () => void;
}

export default function FeaturedSection({
  cars,
  onSelectCar,
  onOpenInventory,
}: FeaturedSectionProps) {
  const showcaseCars = cars.slice(0, 6);

  return (
    <section id="catalogo-destaque" className="py-24 bg-neutral-50/70 border-t border-b border-neutral-100">
      <div className="max-w-[1340px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#a11a1a] block mb-2">
              Apaixone-se pela história
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-neutral-950 tracking-tight leading-tight">
              Seu próximo clássico está aqui<span className="text-[#a11a1a]">.</span>
            </h2>
            <p className="text-neutral-500 text-sm md:text-base mt-2 max-w-xl">
              Cada exemplar do nosso acervo passa por uma rigorosa avaliação de originalidade, integridade estrutural e documentação histórica.
            </p>
          </div>

          <div>
            <Button
              variant="luxury"
              size="default"
              onClick={onOpenInventory}
              className="group"
            >
              <span className="mr-2">Ver todo o acervo ({cars.length})</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Vehicle Cards Grid using shadcn Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseCars.map((car) => (
            <Card
              key={car.id}
              onClick={() => onSelectCar(car)}
              className="overflow-hidden hover:shadow-xl hover:border-neutral-300 group flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Photo with badges */}
                <div className="relative h-60 overflow-hidden bg-neutral-100">
                  <img
                    src={car.heroImage}
                    alt={`${car.brand} ${car.model}`}
                    className="w-full h-full object-cover car-image-treatment group-hover:scale-105 duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    {car.placaPreta && (
                      <Badge variant="placaPreta" className="flex items-center gap-1 backdrop-blur-sm">
                        <Award className="w-3 h-3 text-amber-400" />
                        <span>Placa Preta</span>
                      </Badge>
                    )}
                    <Badge variant="secondary" className="backdrop-blur-sm bg-white/95 text-neutral-900 font-bold">
                      {car.brand}
                    </Badge>
                  </div>

                  {/* Price Tag */}
                  <div className="absolute bottom-3 right-3 bg-[#a11a1a] text-white text-xs font-bold px-3 py-1 rounded-md shadow-sm">
                    {car.price}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs text-neutral-400 font-medium mb-1">
                    <span>{car.yearModel}</span>
                    <span>{car.km}</span>
                  </div>

                  <h3 className="text-xl font-bold text-neutral-950 group-hover:text-[#a11a1a] transition-colors leading-snug">
                    {car.brand} {car.model}
                  </h3>
                  
                  <p className="text-xs text-neutral-500 line-clamp-1 mt-1 font-normal">
                    {car.version}
                  </p>

                  {/* Key specs row */}
                  <div className="grid grid-cols-3 gap-2 py-4 my-4 border-t border-b border-neutral-100 text-[11px] text-neutral-600">
                    <div className="flex items-center space-x-1.5">
                      <Gauge className="w-3.5 h-3.5 text-neutral-400" />
                      <span className="truncate">{car.power}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                      <span className="truncate">{car.year}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Fuel className="w-3.5 h-3.5 text-neutral-400" />
                      <span className="truncate">{car.fuel}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="px-6 pb-6 pt-0 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#a11a1a] group-hover:underline">
                  Ver ficha e fotos completas &rarr;
                </span>
                <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-mono">
                  FAO Original
                </span>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button on Bottom */}
        <div className="text-center mt-14">
          <Button
            variant="outline"
            size="lg"
            onClick={onOpenInventory}
            className="hover:border-[#a11a1a] hover:text-[#a11a1a]"
          >
            <span>Explorar catálogo completo de clássicos</span>
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

      </div>
    </section>
  );
}
