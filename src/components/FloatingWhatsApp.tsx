"use client";

import React, { useState } from 'react';
import { MessageCircle, X, ChevronRight } from 'lucide-react';
import { CONSULTANTS } from '@/data/cars';
import { Card } from '@/components/ui/card';

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      
      {/* Quick Consultant Picker Popup */}
      {open && (
        <Card className="absolute bottom-16 right-0 w-72 shadow-2xl border-neutral-200 overflow-hidden mb-2 animate-fadeIn z-50 p-0">
          <div className="bg-[#25D366] p-4 text-white flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider block opacity-90">Atendimento Imediato</span>
              <h4 className="text-sm font-bold">Fale com a FAO Clássicos</h4>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="p-3 divide-y divide-neutral-100">
            {CONSULTANTS.map((c, i) => (
              <a
                key={i}
                href={c.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="py-3 px-2 flex items-center justify-between hover:bg-neutral-50 rounded-xl transition-colors group"
              >
                <div>
                  <span className="text-xs font-bold text-neutral-900 group-hover:text-[#25D366] transition-colors block">
                    {c.name}
                  </span>
                  <span className="text-[11px] text-neutral-400">
                    {c.role}
                  </span>
                </div>
                <div className="w-6 h-6 rounded-full bg-emerald-50 text-[#25D366] flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </a>
            ))}
          </div>

          <div className="p-3 bg-neutral-50 text-center border-t border-neutral-100">
            <span className="text-[10px] text-neutral-400 font-medium">
              Horário comercial • Resposta média &lt; 5 min
            </span>
          </div>
        </Card>
      )}

      {/* Pulsing Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="relative whatsapp-pulse w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer z-40"
        aria-label="Atendimento WhatsApp"
      >
        {open ? <X className="w-7 h-7" /> : <MessageCircle className="w-7 h-7" />}
      </button>

    </div>
  );
}
