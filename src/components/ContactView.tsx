"use client";

import React, { useState } from 'react';
import { Phone, MapPin, Clock, MessageCircle, CheckCircle2, Car } from 'lucide-react';
import { CONSULTANTS } from '@/data/cars';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Interesse em Veículo do Acervo',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Consignment form state
  const [consignData, setConsignData] = useState({
    carBrand: '',
    carModel: '',
    carYear: '',
    carPrice: '',
    ownerName: '',
    ownerPhone: ''
  });

  const handleGeneralSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleConsignSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Olá, FAO Clássicos! Gostaria de consignar/vender meu veículo: ${consignData.carBrand} ${consignData.carModel} Ano ${consignData.carYear}. Valor estimado: ${consignData.carPrice}. Meu nome é ${consignData.ownerName}.`
    );
    if (typeof window !== 'undefined') {
      window.open(`https://api.whatsapp.com/send?phone=5511987654321&text=${msg}`, '_blank');
    }
  };

  return (
    <div className="pt-28 md:pt-36 pb-24 bg-white min-h-screen">
      <div className="max-w-[1340px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-2xl mb-16 text-left">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a11a1a] block mb-2">
            Atendimento Personalizado
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-neutral-950 tracking-tight">
            Fale Conosco<span className="text-[#a11a1a]">.</span>
          </h1>
          <p className="text-neutral-500 text-sm md:text-base mt-2">
            Estamos prontos para atender você com o mais alto padrão de discrição e expertise automotiva.
          </p>
        </div>

        {/* Top 3 Consultants Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {CONSULTANTS.map((c, i) => (
            <Card
              key={i}
              className="p-6 bg-neutral-50 hover:border-[#a11a1a]/40 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#a11a1a] block mb-1">
                  Consultor Especialista
                </span>
                <h3 className="text-lg font-bold text-neutral-900">
                  {c.name}
                </h3>
                <p className="text-xs text-neutral-500 mb-4">
                  {c.role}
                </p>
                <div className="flex items-center space-x-2 text-xs font-semibold text-neutral-800">
                  <Phone className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{c.phone}</span>
                </div>
              </div>

              <a
                href={c.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="mt-6 w-full inline-flex items-center justify-center border border-neutral-200 hover:border-[#a11a1a]/30 hover:text-[#a11a1a] text-neutral-800 text-[11px] font-semibold uppercase tracking-wider h-9 px-4 rounded-full transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366] mr-1.5" />
                <span>WhatsApp Especialista</span>
              </a>
            </Card>
          ))}
        </div>

        {/* Two Columns: General Contact & Consignment Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: General Contact Form */}
          <div className="lg:col-span-6 space-y-8">
            <Card className="p-8">
              <h2 className="text-xl font-bold text-neutral-950 mb-2">
                Envie uma Mensagem
              </h2>
              <p className="text-xs text-neutral-500 mb-6">
                Preencha os campos abaixo para que nossa equipe entre em contato o mais breve possível.
              </p>

              {submitted ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                  <h4 className="text-sm font-bold text-emerald-900">Mensagem enviada com sucesso!</h4>
                  <p className="text-xs text-emerald-700">Um dos nossos consultores responderá em breve.</p>
                </div>
              ) : (
                <form onSubmit={handleGeneralSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-neutral-600 font-semibold mb-1">Nome Completo</label>
                    <Input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ex: Roberto Silveira"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-neutral-600 font-semibold mb-1">WhatsApp / Telefone</label>
                      <Input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    <div>
                      <label className="block text-neutral-600 font-semibold mb-1">E-mail</label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-neutral-600 font-semibold mb-1">Assunto de Interesse</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:outline-none focus:border-[#a11a1a]"
                    >
                      <option>Interesse em Veículo do Acervo</option>
                      <option>Agendamento de Visita ao Showroom</option>
                      <option>Avaliação de Coleção / Laudo FBVA</option>
                      <option>Venda / Consignação de Clássico</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-neutral-600 font-semibold mb-1">Mensagem</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Descreva seu interesse, veículo desejado ou dúvidas..."
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:outline-none focus:border-[#a11a1a]"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="luxury"
                    size="lg"
                    className="w-full"
                  >
                    Enviar Mensagem
                  </Button>
                </form>
              )}
            </Card>

            {/* Location & Opening Hours Card */}
            <Card className="bg-neutral-50 p-6 space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#a11a1a] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">Showroom & Sede</h4>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Av. Europa, 1.420 - Jardins, São Paulo - SP, 01449-001
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 pt-3 border-t border-neutral-200/60">
                <Clock className="w-5 h-5 text-[#a11a1a] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">Horário de Funcionamento</h4>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Segunda a Sexta: 09:00 às 19:00 • Sábado: 09:00 às 14:00<br />
                    <em>Atendimento reservado aos domingos sob agendamento prévio.</em>
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right: "Venda seu clássico com a FAO" Consignment Box */}
          <div className="lg:col-span-6 bg-gradient-to-br from-neutral-900 to-neutral-950 text-white p-8 md:p-10 rounded-3xl border border-neutral-800 shadow-xl space-y-6">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-red-950/80 border border-red-800/50 rounded-full mb-3">
                <Car className="w-3.5 h-3.5 text-red-400" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-red-300">
                  Consignação Especializada
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                Venda seu Clássico com a FAO
              </h2>
              <p className="text-xs md:text-sm text-neutral-400 mt-2 leading-relaxed">
                Divulgamos seu veículo para os maiores colecionadores e investidores do Brasil, garantindo segurança jurídica total, seguro integral durante a estadia e máxima valorização de mercado.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs text-neutral-300 pt-2">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <span className="text-[#a11a1a] font-bold block mb-1">01. Produção Visual</span>
                <span>Fotos e vídeos profissionais de estúdio.</span>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <span className="text-[#a11a1a] font-bold block mb-1">02. Segurança Total</span>
                <span>Showroom monitorado e segurado 24h.</span>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <span className="text-[#a11a1a] font-bold block mb-1">03. Rede Qualificada</span>
                <span>Compradores reais com capacidade imediata.</span>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <span className="text-[#a11a1a] font-bold block mb-1">04. Trâmites Legais</span>
                <span>Cuidamos de toda a transferência e contrato.</span>
              </div>
            </div>

            {/* Consignment Quick Form */}
            <form onSubmit={handleConsignSubmit} className="space-y-3 pt-4 border-t border-neutral-800 text-xs">
              <h3 className="text-xs uppercase tracking-wider text-neutral-400 font-bold">
                Avaliação Preliminar sem Compromisso:
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Marca (ex: Dodge)"
                  value={consignData.carBrand}
                  onChange={(e) => setConsignData({ ...consignData, carBrand: e.target.value })}
                  className="px-3.5 py-2.5 rounded-xl bg-neutral-800/80 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-[#a11a1a]"
                />
                <input
                  type="text"
                  required
                  placeholder="Modelo (ex: Charger R/T)"
                  value={consignData.carModel}
                  onChange={(e) => setConsignData({ ...consignData, carModel: e.target.value })}
                  className="px-3.5 py-2.5 rounded-xl bg-neutral-800/80 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-[#a11a1a]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Ano (ex: 1978)"
                  value={consignData.carYear}
                  onChange={(e) => setConsignData({ ...consignData, carYear: e.target.value })}
                  className="px-3.5 py-2.5 rounded-xl bg-neutral-800/80 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-[#a11a1a]"
                />
                <input
                  type="text"
                  required
                  placeholder="Valor Desejado (R$)"
                  value={consignData.carPrice}
                  onChange={(e) => setConsignData({ ...consignData, carPrice: e.target.value })}
                  className="px-3.5 py-2.5 rounded-xl bg-neutral-800/80 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-[#a11a1a]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Seu Nome"
                  value={consignData.ownerName}
                  onChange={(e) => setConsignData({ ...consignData, ownerName: e.target.value })}
                  className="px-3.5 py-2.5 rounded-xl bg-neutral-800/80 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-[#a11a1a]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Seu WhatsApp"
                  value={consignData.ownerPhone}
                  onChange={(e) => setConsignData({ ...consignData, ownerPhone: e.target.value })}
                  className="px-3.5 py-2.5 rounded-xl bg-neutral-800/80 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-[#a11a1a]"
                />
              </div>

              <Button
                type="submit"
                variant="luxury"
                size="lg"
                className="w-full mt-2"
              >
                Enviar Veículo para Avaliação
              </Button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
