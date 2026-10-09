"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface AboutViewProps {
  onOpenInventory: () => void;
}

export default function AboutView({ onOpenInventory }: AboutViewProps) {
  const steps = [
    {
      num: "01",
      title: "Triagem & Procedência Histórica",
      desc: "Investigação minuciosa do histórico do chassi, registros de propriedade e autenticidade da documentação."
    },
    {
      num: "02",
      title: "Perícia Técnica Estrutural",
      desc: "Avaliação milimétrica de alinhamento de lataria, assoalho, longarinas, pontas de eixo e pontos de solda originais de fábrica."
    },
    {
      num: "03",
      title: "Revisão Mecânica Especializada",
      desc: "Equalização de carburação, verificação de compressão dos cilindros, elétrica e sistemas de arrefecimento e freios."
    },
    {
      num: "04",
      title: "Certificação & Assessoria FBVA",
      desc: "Emissão de laudo para pontuação de Placa Preta junto a clubes credenciados com rigor internacional."
    }
  ];

  return (
    <div className="pt-28 md:pt-36 pb-24 bg-white min-h-screen">
      <div className="max-w-[1340px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a11a1a] block mb-2">
            Nossa Trajetória
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-neutral-950 tracking-tight leading-tight">
            Mais que automóveis, preservamos a história sobre quatro rodas<span className="text-[#a11a1a]">.</span>
          </h1>
          <p className="text-neutral-500 text-base md:text-lg mt-4 leading-relaxed">
            A <strong>FAO CLÁSSICOS</strong> nasceu da paixão indomável pelo design, pela mecânica visceral e pela engenharia das décadas douradas do automobilismo mundial.
          </p>
        </div>

        {/* Hero image of showroom */}
        <div className="relative rounded-3xl overflow-hidden mb-20 shadow-2xl h-[320px] md:h-[500px]">
          <img
            src="https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=85"
            alt="Showroom FAO Clássicos"
            className="w-full h-full object-cover car-image-treatment"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8 md:p-14">
            <div className="max-w-xl text-white">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-2">
                Atendimento com Hora Marcada
              </span>
              <p className="text-xl md:text-2xl font-bold leading-snug">
                Um santuário dedicado aos apaixonados por motores V8, boxer refrigerados a ar e lendas consagradas do asfalto.
              </p>
            </div>
          </div>
        </div>

        {/* Big Numbers Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12 border-t border-b border-neutral-100 mb-20">
          <div className="text-center md:text-left">
            <span className="text-3xl md:text-5xl font-black text-[#a11a1a] block mb-1 tracking-tight">+20</span>
            <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">Anos de Mercado</span>
          </div>
          <div className="text-center md:text-left">
            <span className="text-3xl md:text-5xl font-black text-neutral-900 block mb-1 tracking-tight">+1.500</span>
            <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">Clássicos Negociados</span>
          </div>
          <div className="text-center md:text-left">
            <span className="text-3xl md:text-5xl font-black text-[#a11a1a] block mb-1 tracking-tight">100%</span>
            <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">Procedência Verificada</span>
          </div>
          <div className="text-center md:text-left">
            <span className="text-3xl md:text-5xl font-black text-neutral-900 block mb-1 tracking-tight">BR & Mundo</span>
            <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">Logística Climatizada</span>
          </div>
        </div>

        {/* Curatorial Protocol */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#a11a1a] block mb-2">
              Padrão de Excelência
            </span>
            <h2 className="text-2xl md:text-4xl font-black text-neutral-950 tracking-tight">
              O Protocolo de Curadoria FAO
            </h2>
            <p className="text-xs md:text-sm text-neutral-500 mt-2">
              Nenhum veículo entra em nosso acervo sem cumprir cada um dos quatro pilares abaixo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st) => (
              <Card key={st.num} className="p-8 bg-neutral-50 border-neutral-100 hover:border-neutral-300 flex flex-col justify-between">
                <div>
                  <span className="text-2xl font-black text-[#a11a1a] font-mono block mb-4">
                    {st.num}
                  </span>
                  <h3 className="text-base font-bold text-neutral-900 mb-2">
                    {st.title}
                  </h3>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Founder & Curators Note */}
        <div className="bg-neutral-900 text-white rounded-3xl p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#a11a1a]">
              Palavra da Diretoria
            </span>
            <blockquote className="text-lg md:text-2xl font-medium italic text-neutral-200">
              "Nosso compromisso é entregar não apenas uma máquina impecável, mas uma jóia que valoriza no tempo e traz orgulho à garagem de quem a possui."
            </blockquote>
            <p className="text-xs text-neutral-400 uppercase tracking-widest font-semibold">
              Carlos Faoro • Fundador e Curador Chefe FAO Clássicos
            </p>
          </div>

          <div>
            <Button
              variant="luxury"
              size="lg"
              onClick={onOpenInventory}
            >
              Explorar Estoque Atual
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
