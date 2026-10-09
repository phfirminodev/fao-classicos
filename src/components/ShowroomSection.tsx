"use client";

import React from 'react';
import { ChevronRight, ShieldCheck, Key, Compass, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface ShowroomSectionProps {
  onOpenInventory: () => void;
}

export default function ShowroomSection({ onOpenInventory }: ShowroomSectionProps) {
  const pillars = [
    {
      icon: Award,
      title: "Curadoria & Autenticidade",
      desc: "Veículos inspecionados item a item com laudo de originalidade e procedência histórica rastreada."
    },
    {
      icon: ShieldCheck,
      title: "Placa Preta & Certificação",
      desc: "Assessoria completa para certificação de veículo de coleção junto aos clubes credenciados pela FBVA."
    },
    {
      icon: Compass,
      title: "Logística Especializada",
      desc: "Transporte fechado em caminhão plataforma climatizado para qualquer cidade do Brasil e exterior."
    },
    {
      icon: Key,
      title: "Atendimento Reservado",
      desc: "Showroom com agendamento privativo para colecionadores e entusiastas mais exigentes."
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (GPS Motors Section 2 Style) */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#a11a1a] block mb-2">
                Confiança e paixão pelo antigomobilismo
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-neutral-950 tracking-tight leading-tight">
                Excelência em<br />cada detalhe<span className="text-[#a11a1a]">.</span>
              </h2>
            </div>

            <div className="w-16 h-1 bg-[#a11a1a]" />

            <p className="text-neutral-600 text-base md:text-lg leading-relaxed font-normal">
              Com mais de duas décadas de tradição e paixão genuína por veículos históricos, a <strong>FAO CLÁSSICOS</strong> é referência nacional em automóveis clássicos, muscle cars e esportivos de coleção. Oferecemos uma experiência sob medida, pautada na transparência, credibilidade e conhecimento técnico profundo.
            </p>

            <div>
              <Button
                variant="luxury"
                size="default"
                onClick={onOpenInventory}
                className="group"
              >
                <span className="mr-2">Conheça nosso estoque</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Sub-card: Showroom Exclusive */}
            <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100 mt-6">
              <h3 className="text-lg font-bold text-neutral-900 mb-1">
                Showroom FAO Clássicos
              </h3>
              <p className="text-xs text-neutral-500 mb-4 leading-relaxed">
                Um espaço climatizado e acolhedor projetado especialmente para a preservação impecável e apreciação de cada clássico.
              </p>
              <div className="relative h-44 rounded-xl overflow-hidden shadow-inner">
                <img
                  src="https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80"
                  alt="Showroom FAO Clássicos"
                  className="w-full h-full object-cover car-image-treatment hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6 space-y-8">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-100 group">
              <img
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80"
                alt="FAO Clássicos Detalhes"
                className="w-full h-[320px] md:h-[400px] object-cover car-image-treatment group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-8">
                <div>
                  <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-1">
                    Coleções Privadas
                  </span>
                  <p className="text-white text-lg md:text-xl font-bold leading-snug">
                    "Carros não são apenas máquinas; são capítulos vivos da história que merecem respeito e preservação."
                  </p>
                </div>
              </div>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <Card key={idx} className="p-5 hover:border-[#a11a1a]/40 bg-white">
                    <div className="w-9 h-9 rounded-lg bg-[#fff4f4] flex items-center justify-center text-[#a11a1a] mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-neutral-900 mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-neutral-500 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </Card>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
