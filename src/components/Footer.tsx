"use client";

import React from 'react';
import { Phone, Mail, ArrowUpRight } from 'lucide-react';
import { InstagramIcon, YoutubeIcon, FacebookIcon } from './Icons';
import { CONSULTANTS } from '@/data/cars';
import { Button } from '@/components/ui/button';

const INSTA_IMAGES = [
  "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=300&q=80",
];

interface FooterProps {
  onNavigate: (tab: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="relative pt-12 pb-16 bg-[#0a0a0a] text-neutral-400 border-t border-neutral-900 overflow-hidden">
      
      {/* Signature Red Accent Bar on top of footer container */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#a11a1a]" />

      <div className="max-w-[1340px] mx-auto px-6 md:px-12">
        
        {/* Upper Social Box (GPS Motors Style Instagram Banner) */}
        <div className="relative mb-16 rounded-3xl overflow-hidden bg-gradient-to-r from-[#a11a1a] via-[#751111] to-[#2b0808] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-red-900/40">
          
          {/* Left info */}
          <div className="relative z-10 text-center md:text-left space-y-2">
            <div className="flex items-center justify-center md:justify-start space-x-2 text-white/90">
              <InstagramIcon className="w-5 h-5 text-white" />
              <span className="text-xs font-bold uppercase tracking-widest">Instagram Oficial</span>
            </div>
            <h3 className="text-2xl md:text-4xl font-black text-white tracking-tight">
              Siga a FAO Clássicos
            </h3>
            <p className="text-sm text-red-100 font-medium">
              Bastidores de chegadas, restauros históricos e raridades diárias no <span className="underline font-bold">@faoclassicos</span>
            </p>
          </div>

          {/* Instagram Mini Showcase Strip */}
          <div className="relative z-10 flex items-center space-x-3 overflow-hidden max-w-full">
            {INSTA_IMAGES.map((img, i) => (
              <a
                key={i}
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden shrink-0 border border-white/20 hover:scale-105 transition-transform group shadow-md"
              >
                <img src={img} alt="Post Instagram" className="w-full h-full object-cover group-hover:opacity-90" />
              </a>
            ))}
          </div>

          {/* Follow Button */}
          <div className="relative z-10 shrink-0">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-white text-neutral-950 hover:bg-neutral-100 shadow-lg text-xs font-semibold uppercase tracking-wider h-11 px-6 rounded-full transition-all"
            >
              <span>Acompanhar no Instagram</span>
              <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </a>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-neutral-900">
          
          {/* Brand & Overview (Col 1) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3.5">
              <div className="relative h-13 w-13 bg-black rounded-xl overflow-hidden shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/fao-logo.jpg"
                  alt="FAO Clássicos Logo"
                  className="w-full h-full object-cover logo-treatment"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-[0.2em] text-white uppercase leading-none font-sans flex items-center">
                  <span>F</span>
                  <span className="mx-0.5 text-[0.9em]">Λ</span>
                  <span>O</span>
                  <span className="text-[#a11a1a] ml-1.5 font-semibold">CLÁSSICOS</span>
                </span>
                <span className="text-[10px] tracking-[0.3em] text-neutral-400 uppercase mt-1">
                  Veículos de Coleção
                </span>
              </div>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Especialistas em intermediação, curadoria técnica e comercialização de veículos clássicos, esportivos de época e automóveis de coleção com rigor e transparência.
            </p>
            <div className="text-[11px] text-neutral-500 font-mono">
              CNPJ: 34.892.102/0001-45 • São Paulo - SP
            </div>
          </div>

          {/* Navigation Links (Col 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Navegação</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-[#a11a1a] transition-colors cursor-pointer">
                  Início
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('veiculos')} className="hover:text-[#a11a1a] transition-colors cursor-pointer">
                  Acervo de Veículos
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('sobre')} className="hover:text-[#a11a1a] transition-colors cursor-pointer">
                  Sobre Nós & Showroom
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contato')} className="hover:text-[#a11a1a] transition-colors cursor-pointer">
                  Contato & Agendamento
                </button>
              </li>
            </ul>
          </div>

          {/* Horários & Showroom (Col 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Horário & Endereço</h4>
            <div className="text-xs space-y-2 text-neutral-400">
              <p>
                <strong className="text-neutral-300 block">Atendimento:</strong>
                Segunda à Sexta — 09:00 às 19:00<br />
                Sábado — 09:00 às 14:00
              </p>
              <p className="pt-2">
                <strong className="text-neutral-300 block">Showroom:</strong>
                Av. Europa, 1.420 - Jardins, São Paulo - SP, 01449-001
              </p>
            </div>
          </div>

          {/* Fale Conosco & Consultores (Col 4) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Fale Conosco</h4>
            <div className="space-y-2 text-xs">
              {CONSULTANTS.map((c, i) => (
                <a
                  key={i}
                  href={c.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 text-neutral-400 hover:text-[#a11a1a] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#a11a1a]" />
                  <span>{c.phone} <span className="text-neutral-500 font-light">({c.name.split(' ')[0]})</span></span>
                </a>
              ))}
              <a
                href="mailto:contato@faoclassicos.com.br"
                className="flex items-center space-x-2 text-neutral-400 hover:text-[#a11a1a] transition-colors pt-2"
              >
                <Mail className="w-3.5 h-3.5 text-neutral-500" />
                <span>contato@faoclassicos.com.br</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-3">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-neutral-900 hover:bg-[#a11a1a] flex items-center justify-center text-white transition-colors" aria-label="Instagram">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-neutral-900 hover:bg-[#a11a1a] flex items-center justify-center text-white transition-colors" aria-label="Facebook">
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-neutral-900 hover:bg-[#a11a1a] flex items-center justify-center text-white transition-colors" aria-label="YouTube">
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>
            &copy; {new Date().getFullYear()} FAO CLÁSSICOS. Todos os direitos reservados.
          </p>
          <p className="text-[11px] text-neutral-400">
            Inspirado e desenvolvido com o mais alto padrão de excelência automotiva.
          </p>
        </div>

      </div>
    </footer>
  );
}
