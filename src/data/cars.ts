export interface Car {
  id: string;
  brand: string;
  model: string;
  modelShort: string;
  version: string;
  year: string;
  yearModel: string;
  km: string;
  kmValue: number;
  price: string;
  priceValue: number;
  featured: boolean;
  placaPreta: boolean;
  fuel: string;
  transmission: string;
  color: string;
  interior: string;
  engine: string;
  power: string;
  badge: string;
  heroImage: string;
  images: string[];
  description: string;
  highlights: string[];
}

export interface Consultant {
  name: string;
  role: string;
  phone: string;
  whatsappLink: string;
}

export const CARS_DATA: Car[] = [
  {
    id: "ford-maverick-gt-1974",
    brand: "Ford",
    model: "MAVERICK GT",
    modelShort: "MAVERICK",
    version: "302 V8 Quadrijet Original • Câmbio 4 Marchas",
    year: "1974",
    yearModel: "1974/1974",
    km: "48.200 KM",
    kmValue: 48200,
    price: "R$ 295.000,00",
    priceValue: 295000,
    featured: true,
    placaPreta: true,
    fuel: "Gasolina",
    transmission: "Manual 4 marchas",
    color: "Branco com Faixas Pretas",
    interior: "Couro Preto Original",
    engine: "V8 302 Windsor 5.0L",
    power: "197 cv",
    badge: "Placa Preta 98% Original",
    heroImage: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1600&q=85",
    images: [
      "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=85"
    ],
    description: "Exemplar sublime do mítico Ford Maverick GT 1974 na clássica tonalidade branca com faixas esportivas em preto fosco. Equipado com seu motor original V8 302 Windsor quadrijet devidamente afinado, roncando forte com escapamento dimensionado de época. Veículo portador de Certificado de Originalidade de Clube Federado (FBVA) com pontuação superior a 98 pontos. Interior com bancos individuais 'concha', console central original, volante esportivo de 3 raios e conta-giros de coluna funcional. Uma verdadeira lenda dos autódromos e coleções brasileiras.",
    highlights: [
      "Placa Preta com Certificado FBVA 98 pontos",
      "Motor 302 V8 'Matching Numbers' revisado",
      "Carburador Holley Quadrijet original calibrado",
      "Pneus Cooper Cobra novos com letras brancas",
      "Rádio Philco Ford original de época funcionando",
      "Manual do proprietário e chave reserva histórica"
    ]
  },
  {
    id: "chevrolet-opala-ss-1974",
    brand: "Chevrolet",
    model: "OPALA SS",
    modelShort: "OPALA SS",
    version: "4.100 250-S 6 Cilindros • Faixas SS Originais",
    year: "1974",
    yearModel: "1974/1974",
    km: "54.100 KM",
    kmValue: 54100,
    price: "R$ 260.000,00",
    priceValue: 260000,
    featured: true,
    placaPreta: true,
    fuel: "Gasolina",
    transmission: "Manual 4 marchas",
    color: "Laranja Boreal Metálico",
    interior: "Vinil Preto SS Original",
    engine: "6 Cilindros em Linha 4.1L (250-S)",
    power: "171 cv",
    badge: "Ícone Nacional Colecionável",
    heroImage: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1600&q=85",
    images: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85"
    ],
    description: "Autêntico Chevrolet Opala SS 1974 na cobiçada cor Laranja Boreal. Veículo de coleção meticulosamente preservado, ostentando as clássicas faixas laterais SS e capô fosco de fábrica. O lendário motor 250-S de 6 cilindros em linha entrega torque vigoroso e funcionamento suave, combinado ao câmbio 4 marchas no assoalho. Interior 100% no padrão de tapeçaria original de fábrica, painel de instrumentos com grafia completa e volante de 3 raios em metal perfurado.",
    highlights: [
      "Placa de Coleção Mercosul com pontuação alta",
      "Motor 4.1 250-S com comando e tuchos mecânicos originais",
      "Rodas SS originais de época com sobre-aros",
      "Frisos, calotas e detalhes estéticos impecáveis",
      "Histórico documental desde 1974 preservado"
    ]
  },
  {
    id: "dodge-charger-rt-1978",
    brand: "Dodge",
    model: "CHARGER R/T",
    modelShort: "CHARGER",
    version: "318 V8 Magnum • Teto de Vinil Preto",
    year: "1978",
    yearModel: "1978/1978",
    km: "62.000 KM",
    kmValue: 62000,
    price: "R$ 380.000,00",
    priceValue: 380000,
    featured: true,
    placaPreta: true,
    fuel: "Gasolina",
    transmission: "Manual 4 marchas",
    color: "Amarelo Montego",
    interior: "Couro e Vinil Preto Monocromático",
    engine: "V8 318 LA Small Block 5.2L",
    power: "212 cv",
    badge: "Muscle Car Puro-Sangue",
    heroImage: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=85",
    images: [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=85"
    ],
    description: "O mais emblemático muscle car produzido em solo brasileiro: Dodge Charger R/T 1978. Apresentado em seu arrebatador tom Amarelo Montego com teto de vinil preto perfeito e as inconfundíveis faixas 'R/T' nas laterais e na tampa traseira. Grade dianteira inteiriça com faróis escamoteáveis originais funcionando com perfeição. O motor 318 V8 entrega aquele ronco inconfundível de pura agressividade que emociona a qualquer entusiasta.",
    highlights: [
      "Faróis ocultos e grade dianteira R/T 100% alinhados",
      "Teto de vinil novo padrão Chrysler de fábrica",
      "Escape duplo dimensionado com ponteiras cromadas",
      "Tapeçaria interna original com bancos altos integrados",
      "Veículo certificado para os mais seletos encontros de colecionadores"
    ]
  },
  {
    id: "porsche-911-carrera-32-1986",
    brand: "Porsche",
    model: "911 CARRERA 3.2",
    modelShort: "911 CARRERA",
    version: "Targa Aircooled • Câmbio 915 de 5 Marchas",
    year: "1986",
    yearModel: "1986/1986",
    km: "78.400 KM",
    kmValue: 78400,
    price: "R$ 650.000,00",
    priceValue: 650000,
    featured: true,
    placaPreta: true,
    fuel: "Gasolina",
    transmission: "Manual 5 marchas (915)",
    color: "Guards Red (Indischrot)",
    interior: "Couro Preto com Bancos Elétricos",
    engine: "Boxer 6 Cilindros 3.2L Refrigerado a Ar",
    power: "231 cv",
    badge: "Ícone Aircooled de Stuttgart",
    heroImage: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=85",
    images: [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=85"
    ],
    description: "Uma das configurações mais desejadas do lendário 911 'G-Series': Porsche 911 Carrera 3.2 Targa 1986 em Guards Red com teto targa removível em perfeito estado. Motor refrigerado a ar de 3.2 litros dotado de injeção Bosch Motronic, famoso por sua confiabilidade e som inconfundível do boxer refrigerado a turbina de ar. Rodas Fuchs originais aro 16 com acabamento acetinado preto e bordas diamantadas.",
    highlights: [
      "Rodas Fuchs aro 16 originais Porsche com pneus Michelin",
      "Teto Targa original com travas e vedações novas",
      "Ar condicionado revisado e funcionando",
      "Certificado de Autenticidade Porsche (CoA)",
      "Histórico completo de revisões em oficina especializada"
    ]
  },
  {
    id: "chevrolet-corvette-stingray-1971",
    brand: "Chevrolet",
    model: "CORVETTE STINGRAY",
    modelShort: "CORVETTE",
    version: "C3 T-Top • 350 V8 Small Block",
    year: "1971",
    yearModel: "1971/1971",
    km: "41.500 KM",
    kmValue: 41500,
    price: "R$ 420.000,00",
    priceValue: 420000,
    featured: false,
    placaPreta: true,
    fuel: "Gasolina",
    transmission: "Automático Turbo Hydra-Matic",
    color: "Mulsanne Blue Metálico",
    interior: "Couro Azul Escuro Original",
    engine: "V8 350 CID 5.7L",
    power: "270 cv",
    badge: "Chrome Bumper Raro",
    heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=85",
    images: [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=85"
    ],
    description: "A safra mais valorizada da terceira geração do Corvette: safra 'Chrome Bumper' com para-choques de lâmina cromada na dianteira e traseira. Pintura impecável na tonalidade clássica Mulsanne Blue com teto removível T-Top duplo. O motor 350 V8 entrega força imediata com uma trilha sonora encorpada.",
    highlights: [
      "Safra rara com para-choques cromados duplos originais",
      "Teto T-Top removível com bolsas de armazenamento originais",
      "Painel com instrumentos auxiliares centrais funcionais",
      "Rodas Rallye cromadas com calotas centrais e anéis de época"
    ]
  },
  {
    id: "volkswagen-sp2-1974",
    brand: "Volkswagen",
    model: "SP2",
    modelShort: "VW SP2",
    version: "1700 Boxer • Faixas Refletivas Laterais",
    year: "1974",
    yearModel: "1974/1974",
    km: "39.000 KM",
    kmValue: 39000,
    price: "R$ 185.000,00",
    priceValue: 185000,
    featured: false,
    placaPreta: true,
    fuel: "Gasolina",
    transmission: "Manual 4 marchas",
    color: "Vermelho Granada",
    interior: "Curvim Preto com Padrão Diabinho",
    engine: "Boxer 4 Cilindros 1700cc Dupla Carburação",
    power: "75 cv",
    badge: "O Carro Mais Bonito da VW",
    heroImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=85"
    ],
    description: "Reconhecido internacionalmente como uma das mais belas criações de design da história mundial da Volkswagen, o SP2 foi desenhado pela equipe da VW do Brasil sob comando de Marcio Piancastelli. Este exemplar de 1974 na cor Vermelho Granada possui todos os frisos de borracha com faixas refletivas de época intactos.",
    highlights: [
      "Placa Preta com laudo oficial de originalidade",
      "Motor 1700 com dupla carburação Solex original",
      "Volante esportivo de dois raios com emblema SP2 intacto",
      "Pneus radiais de época e estepe original de fábrica"
    ]
  },
  {
    id: "puma-gts-1978",
    brand: "Puma",
    model: "GTS CONVERSÍVEL",
    modelShort: "PUMA GTS",
    version: "1600 Dupla Carburação • Carroceria Fibra de Vidro",
    year: "1978",
    yearModel: "1978/1978",
    km: "31.200 KM",
    kmValue: 31200,
    price: "R$ 125.000,00",
    priceValue: 125000,
    featured: false,
    placaPreta: true,
    fuel: "Gasolina",
    transmission: "Manual 4 marchas",
    color: "Branco Pérola",
    interior: "Couro Preto com Costuras Especiais",
    engine: "Boxer 1600cc Dupla Carburação",
    power: "70 cv",
    badge: "Esportivo Nacional Clássico",
    heroImage: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=85",
    images: [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=85"
    ],
    description: "O mais aclamado esportivo fora-de-série brasileiro: Puma GTS Conversível 1978. Apresenta carroceria em fibra de vidro perfeitamente alinhada sem trincas, pintura de fino acabamento e capota de lona marítima preta sob medida.",
    highlights: [
      "Capota conversível de lona preta em estado de nova",
      "Rodas de liga leve originais Puma 'Tijolinho'",
      "Motor Boxer 1600 revisado com mecânica simples e confiável",
      "Certificado de Placa Preta"
    ]
  },
  {
    id: "ferrari-328-gts-1988",
    brand: "Ferrari",
    model: "328 GTS",
    modelShort: "328 GTS",
    version: "3.2 V8 270cv • Targa Manual Pininfarina",
    year: "1988",
    yearModel: "1988/1988",
    km: "28.900 KM",
    kmValue: 28900,
    price: "R$ 1.150.000,00",
    priceValue: 1150000,
    featured: true,
    placaPreta: true,
    fuel: "Gasolina",
    transmission: "Manual 5 marchas (Gated Shifter)",
    color: "Rosso Corsa",
    interior: "Couro Crema com Carpete Vermelho",
    engine: "V8 3.2L 32 Válvulas Quattrovalvole",
    power: "270 cv",
    badge: "Cavallino Rampante de Coleção",
    heroImage: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1600&q=85",
    images: [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85"
    ],
    description: "Uma das mais puras e elegantes berlinettas de Maranello desenhadas pela Pininfarina: Ferrari 328 GTS 1988 em Rosso Corsa com interior em couro Crema. Dotada da icônica grade seletora de marchas em metal polido (gated shifter).",
    highlights: [
      "Gated manual 5-speed shifter original Ferrari",
      "Estojo de ferramentas de couro e manuais originais preservados",
      "Quilometragem extremamente baixa (28.900 KM atestados)",
      "Histórico de preservação com certificação internacional"
    ]
  },
  {
    id: "ford-mustang-fastback-1968",
    brand: "Ford",
    model: "MUSTANG FASTBACK",
    modelShort: "MUSTANG",
    version: "289 V8 • Bullitt Tribute Highland Green",
    year: "1968",
    yearModel: "1968/1968",
    km: "51.000 KM",
    kmValue: 51000,
    price: "R$ 490.000,00",
    priceValue: 490000,
    featured: false,
    placaPreta: true,
    fuel: "Gasolina",
    transmission: "Manual 4 marchas",
    color: "Highland Green",
    interior: "Vinil Preto Luxo de Época",
    engine: "V8 289 CID 4.7L",
    power: "225 cv",
    badge: "Lenda Cinematográfica",
    heroImage: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1600&q=85",
    images: [
      "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=85"
    ],
    description: "Homenagem de primeiríssima grandeza ao lendário Mustang conduzido por Steve McQueen no filme Bullitt de 1968. Carroceria Fastback original 1968, pintada no inconfundível tom Highland Green com rodas American Racing Torq Thrust aro 15.",
    highlights: [
      "Carroceria Fastback genuína 1968 (código 63B)",
      "Rodas American Racing Torq Thrust com pneus de época",
      "Restauração minuciosa de lata, pintura e tapeçaria",
      "Sonoridade encorpada e resposta imediata do V8"
    ]
  },
  {
    id: "vw-fusca-1300-1968",
    brand: "Volkswagen",
    model: "FUSCA 1300",
    modelShort: "FUSCA",
    version: "1ª Série • 34.000 KM Originais de Fábrica",
    year: "1968",
    yearModel: "1968/1968",
    km: "34.200 KM",
    kmValue: 34200,
    price: "R$ 89.000,00",
    priceValue: 89000,
    featured: false,
    placaPreta: true,
    fuel: "Gasolina",
    transmission: "Manual 4 marchas",
    color: "Azul Pavão",
    interior: "Pebble Grain Padrão Alemão Original",
    engine: "Boxer 1300cc Refrigerado a Ar",
    power: "46 cv",
    badge: "Cápsula do Tempo 100% Original",
    heroImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=85"
    ],
    description: "Uma genuína cápsula do tempo sobre rodas: Fusca 1300 1968 com apenas 34.200 km originais comprovados por histórico de vistorias e conservação. Lanternas 'olho de boi', velocímetro zebrado, bancos com tapeçaria de fábrica preservada.",
    highlights: [
      "Pintura e tapeçaria com alto índice de preservação de fábrica",
      "Faróis 'tremendão' e lanternas originais Polimatic",
      "Chave original de fábrica com numeração do chassi",
      "Placa Preta com 99% de originalidade certificada"
    ]
  }
];

export const CONSULTANTS: Consultant[] = [
  {
    name: "Carlos Faoro",
    role: "Fundador & Curador Chefe",
    phone: "(11) 98765-4321",
    whatsappLink: "https://api.whatsapp.com/send?phone=5511987654321&text=Ol%C3%A1%20Carlos!%20Gostaria%20de%20conversar%20sobre%20a%20cole%C3%A7%C3%A3o%20da%20FAO%20Cl%C3%A1ssicos."
  },
  {
    name: "Pedro Mendonça",
    role: "Especialista em Muscle Cars & Nacionais",
    phone: "(11) 98765-4322",
    whatsappLink: "https://api.whatsapp.com/send?phone=5511987654322&text=Ol%C3%A1%20Pedro!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20os%20ve%C3%ADculos%20da%20FAO%20Cl%C3%A1ssicos."
  },
  {
    name: "Natália Guimarães",
    role: "Consultora de Esportivos & Coleções",
    phone: "(11) 98765-4323",
    whatsappLink: "https://api.whatsapp.com/send?phone=5511987654323&text=Ol%C3%A1%20Nat%C3%A1lia!%20Gostaria%20de%20saber%20mais%20sobre%20os%20ve%C3%ADculos%20em%20estoque."
  }
];

export const BRANDS: string[] = [
  "Todas",
  "Chevrolet",
  "Ford",
  "Dodge",
  "Porsche",
  "Ferrari",
  "Volkswagen",
  "Puma"
];
