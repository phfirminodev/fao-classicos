"use client";

import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, ArrowUpDown, Award, Calendar, Gauge, Fuel, X, RotateCcw } from 'lucide-react';
import { Car, BRANDS } from '@/data/cars';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface InventoryViewProps {
  cars: Car[];
  onSelectCar: (car: Car) => void;
  initialBrand?: string;
}

export default function InventoryView({
  cars,
  onSelectCar,
  initialBrand = 'Todas',
}: InventoryViewProps) {
  const [selectedBrand, setSelectedBrand] = useState(initialBrand);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('featured');
  const [filterPlacaPreta, setFilterPlacaPreta] = useState(false);
  const [selectedDecade, setSelectedDecade] = useState('all');
  const [selectedTransmission, setSelectedTransmission] = useState('all');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Filtered and sorted cars
  const filteredCars = useMemo(() => {
    return cars
      .filter((car) => {
        if (selectedBrand !== 'Todas' && car.brand.toLowerCase() !== selectedBrand.toLowerCase()) {
          return false;
        }
        if (filterPlacaPreta && !car.placaPreta) {
          return false;
        }
        if (selectedTransmission !== 'all') {
          if (selectedTransmission === 'manual' && !car.transmission.toLowerCase().includes('manual')) return false;
          if (selectedTransmission === 'auto' && !car.transmission.toLowerCase().includes('auto')) return false;
        }
        if (selectedDecade !== 'all') {
          const yearNum = parseInt(car.year, 10);
          if (selectedDecade === '60s' && (yearNum < 1960 || yearNum > 1969)) return false;
          if (selectedDecade === '70s' && (yearNum < 1970 || yearNum > 1979)) return false;
          if (selectedDecade === '80s' && (yearNum < 1980 || yearNum > 1989)) return false;
        }
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const match =
            car.brand.toLowerCase().includes(q) ||
            car.model.toLowerCase().includes(q) ||
            car.version.toLowerCase().includes(q) ||
            car.year.includes(q) ||
            car.color.toLowerCase().includes(q);
          if (!match) return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortOption === 'price-asc') return a.priceValue - b.priceValue;
        if (sortOption === 'price-desc') return b.priceValue - a.priceValue;
        if (sortOption === 'km-asc') return a.kmValue - b.kmValue;
        if (sortOption === 'year-asc') return parseInt(a.year, 10) - parseInt(b.year, 10);
        if (sortOption === 'year-desc') return parseInt(b.year, 10) - parseInt(a.year, 10);
        if (sortOption === 'title-asc') return a.brand.localeCompare(b.brand);
        if (sortOption === 'title-desc') return b.brand.localeCompare(a.brand);
        return 0;
      });
  }, [cars, selectedBrand, filterPlacaPreta, selectedTransmission, selectedDecade, searchQuery, sortOption]);

  const resetFilters = () => {
    setSelectedBrand('Todas');
    setSearchQuery('');
    setSortOption('featured');
    setFilterPlacaPreta(false);
    setSelectedDecade('all');
    setSelectedTransmission('all');
  };

  return (
    <div className="pt-28 md:pt-36 pb-24 bg-neutral-50/50 min-h-screen">
      <div className="max-w-[1340px] mx-auto px-6 md:px-12">
        
        {/* Page Title */}
        <div className="mb-10 text-left">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a11a1a] block mb-2">
            Acervo Exclusivo
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-neutral-950 tracking-tight">
            Nossos Veículos<span className="text-[#a11a1a]">.</span>
          </h1>
          <p className="text-neutral-500 text-sm md:text-base mt-2">
            Conheça nossa seleção de clássicos, muscle cars, raridades nacionais e esportivos históricos.
          </p>
        </div>

        {/* Brand Selector Pills Row */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {BRANDS.map((brand) => (
            <button
              key={brand}
              onClick={() => setSelectedBrand(brand)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                selectedBrand === brand
                  ? 'bg-[#a11a1a] text-white shadow-sm'
                  : 'bg-white text-neutral-700 border border-neutral-200/80 hover:border-neutral-400'
              }`}
            >
              {brand}
            </button>
          ))}
        </div>

        {/* Filter & Search Bar */}
        <Card className="p-4 md:p-6 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por modelo, ano ou versão (ex: Opala, V8, 1974)..."
                className="pl-11 pr-10"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="md:col-span-4 flex items-center space-x-2">
              <ArrowUpDown className="w-4 h-4 text-neutral-400 shrink-0" />
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="w-full py-2.5 px-3 bg-neutral-50 rounded-xl border border-neutral-200 text-xs text-neutral-800 focus:outline-none focus:border-[#a11a1a] font-medium"
              >
                <option value="featured">Ordenar por: Destaques</option>
                <option value="price-asc">Preço: Menor para maior</option>
                <option value="price-desc">Preço: Maior para menor</option>
                <option value="km-asc">KM: Menor para maior</option>
                <option value="year-asc">Ano: Mais antigo para mais novo</option>
                <option value="year-desc">Ano: Mais novo para mais antigo</option>
                <option value="title-asc">Ordem: A &gt; Z</option>
                <option value="title-desc">Ordem: Z &gt; A</option>
              </select>
            </div>

            {/* Placa Preta Toggle & Mobile Filter Button */}
            <div className="md:col-span-3 flex items-center justify-end space-x-3">
              <Button
                variant={filterPlacaPreta ? "luxury" : "outline"}
                size="sm"
                onClick={() => setFilterPlacaPreta(!filterPlacaPreta)}
                className="flex items-center gap-1.5"
              >
                <Award className="w-3.5 h-3.5" />
                <span>Placa Preta</span>
              </Button>

              <Button
                variant="secondary"
                size="sm"
                onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                className="md:hidden flex items-center gap-1.5"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Filtros</span>
              </Button>
            </div>

          </div>

          {/* Extended Filters */}
          <div className={`mt-4 pt-4 border-t border-neutral-100 flex-wrap items-center gap-4 text-xs ${mobileFilterOpen ? 'flex' : 'hidden md:flex'}`}>
            <div className="flex items-center space-x-2">
              <span className="text-neutral-400 font-medium">Década:</span>
              <button
                onClick={() => setSelectedDecade('all')}
                className={`px-3 py-1 rounded-md cursor-pointer ${selectedDecade === 'all' ? 'bg-neutral-900 text-white font-medium' : 'bg-neutral-100 text-neutral-600'}`}
              >
                Todas
              </button>
              <button
                onClick={() => setSelectedDecade('60s')}
                className={`px-3 py-1 rounded-md cursor-pointer ${selectedDecade === '60s' ? 'bg-neutral-900 text-white font-medium' : 'bg-neutral-100 text-neutral-600'}`}
              >
                Anos 60
              </button>
              <button
                onClick={() => setSelectedDecade('70s')}
                className={`px-3 py-1 rounded-md cursor-pointer ${selectedDecade === '70s' ? 'bg-neutral-900 text-white font-medium' : 'bg-neutral-100 text-neutral-600'}`}
              >
                Anos 70
              </button>
              <button
                onClick={() => setSelectedDecade('80s')}
                className={`px-3 py-1 rounded-md cursor-pointer ${selectedDecade === '80s' ? 'bg-neutral-900 text-white font-medium' : 'bg-neutral-100 text-neutral-600'}`}
              >
                Anos 80
              </button>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-neutral-400 font-medium">Câmbio:</span>
              <button
                onClick={() => setSelectedTransmission('all')}
                className={`px-3 py-1 rounded-md cursor-pointer ${selectedTransmission === 'all' ? 'bg-neutral-900 text-white font-medium' : 'bg-neutral-100 text-neutral-600'}`}
              >
                Todos
              </button>
              <button
                onClick={() => setSelectedTransmission('manual')}
                className={`px-3 py-1 rounded-md cursor-pointer ${selectedTransmission === 'manual' ? 'bg-neutral-900 text-white font-medium' : 'bg-neutral-100 text-neutral-600'}`}
              >
                Manual
              </button>
              <button
                onClick={() => setSelectedTransmission('auto')}
                className={`px-3 py-1 rounded-md cursor-pointer ${selectedTransmission === 'auto' ? 'bg-neutral-900 text-white font-medium' : 'bg-neutral-100 text-neutral-600'}`}
              >
                Automático
              </button>
            </div>

            {(selectedBrand !== 'Todas' || filterPlacaPreta || selectedDecade !== 'all' || selectedTransmission !== 'all' || searchQuery) && (
              <button
                onClick={resetFilters}
                className="ml-auto inline-flex items-center space-x-1.5 text-xs text-[#a11a1a] hover:underline font-semibold cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Limpar filtros</span>
              </button>
            )}
          </div>
        </Card>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 text-xs text-neutral-500 font-medium">
          <span>
            Exibindo <strong>{filteredCars.length}</strong> {filteredCars.length === 1 ? 'veículo' : 'veículos'}
          </span>
          {selectedBrand !== 'Todas' && (
            <Badge variant="secondary">
              Marca: {selectedBrand}
            </Badge>
          )}
        </div>

        {/* Vehicles Grid */}
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car) => (
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
                      className="w-full h-full object-cover car-image-treatment"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

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

                    {/* Price tag */}
                    <div className="absolute bottom-3 right-3 bg-[#a11a1a] text-white text-xs font-bold px-3 py-1 rounded-md shadow-sm">
                      {car.price}
                    </div>
                  </div>

                  {/* Content details */}
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
                    Ver detalhes do veículo &rarr;
                  </span>
                  <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-mono">
                    REF #{car.id.slice(0, 8)}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="text-center py-20">
            <h3 className="text-lg font-bold text-neutral-900 mb-2">
              Nenhum veículo encontrado com os filtros atuais
            </h3>
            <p className="text-xs text-neutral-500 max-w-md mx-auto mb-6">
              Tente redefinir os filtros ou buscar por outro modelo para encontrar o clássico desejado.
            </p>
            <Button
              variant="default"
              onClick={resetFilters}
            >
              Limpar todos os filtros
            </Button>
          </Card>
        )}

      </div>
    </div>
  );
}
