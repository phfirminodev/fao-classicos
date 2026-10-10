# 🏎️ FAO CLÁSSICOS • Veículos de Coleção

> Plataforma web de alta performance para a **FAO CLÁSSICOS**, especializada na curadoria, avaliação e comercialização de veículos clássicos, muscle cars e esportivos de coleção. Projeto desenvolvido com arquitetura moderna baseada na identidade visual da [GPS Motors](https://gpsmotors.com.br/).

---

## 🚀 Tecnologias Utilizadas

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router & Turbopack)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/) (Tipagem estrita)
- **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Componentes UI:** [shadcn/ui](https://ui.shadcn.com/) (Design System modular)
- **Ícones:** [Lucide React](https://lucide.dev/)
- **Tipografia:** Google Fonts (*Amiko* & *Plus Jakarta Sans*)

---

## ✨ Principais Funcionalidades

1. **Intro Cinematográfica em Vídeo & Revelação da Marca:**
   - Vídeo remasterizado em alta definição e contraste balanceado com revelação da logo `F Λ O CLÁSSICOS` e abertura suave para o showroom.
2. **Preloader & Identidade Visual Oficial:**
   - Monograma oficial da **FAO CLÁSSICOS** com barra de progresso em vermelho bordô (`#a11a1a`) e tipografia refinada.
3. **Header de Alto Padrão:**
   - Pílula central com rotação dinâmica de marcas (*Chevrolet, Ford, Dodge, Porsche, Ferrari, Volkswagen, Puma*).
   - Dropdown instantâneo para seleção e filtro por fabricante.
   - Navegação com indicador vertical deslizante na cor da marca.
   - Menu drawer responsivo para dispositivos móveis.
4. **Hero Car Showcase Slider:**
   - Tipografia gigante watermark de fundo com o nome do modelo (*MAVERICK, OPALA SS, CHARGER, 911 CARRERA, 328 GTS*).
   - Dados técnicos rápidos (ano, km, motor, câmbio, selo de Placa Preta).
   - Controles de paginação interativos e botão de rolagem suave.
5. **Catálogo de Estoque com Filtros Avançados:**
   - Filtros dinâmicos por **Marca**, **Década** (Anos 60, 70, 80), **Tipo de Câmbio** (Manual / Automático) e **Placa Preta**.
   - Campo de busca instantânea por palavras-chave e ordenação múltipla (Preço, KM, Ano e A-Z).
6. **Ficha Técnica & Galeria Completa:**
   - Galeria com carrossel de fotos em alta resolução e barra de miniaturas.
   - Matriz de especificações técnicas completas e laudo de autenticidade.
   - Botão direto de negociação via **WhatsApp** com mensagem pré-formatada do veículo e valor.
7. **Módulo de Consignação & Venda:**
   - Formulário exclusivo para colecionadores enviarem veículos para avaliação técnica da FAO.
8. **Showroom & Contato:**
   - Apresentação dos pilares de curadoria técnica e laudo FBVA.
   - Cards dedicados dos consultores especialistas com links diretos de atendimento.
9. **Botão Flutuante de WhatsApp com Pulso:**
   - Acesso imediato à equipe de especialistas em qualquer página.

---

## 💻 Como Rodar Localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/phfirminodev/fao-classicos.git
   cd fao-classicos
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador:**
   Abra [http://localhost:3000](http://localhost:3000)

---

## 🌐 Como Publicar (Deploy)

### Opção 1: Vercel (Recomendado para Next.js — 1 Clique)
1. Acesse [vercel.com](https://vercel.com/) e faça login com sua conta do GitHub.
2. Clique em **"Add New Project"** e selecione o repositório `fao-classicos`.
3. Clique em **Deploy**. A Vercel detecta automaticamente o Next.js e gera o link oficial online em segundos!

### Opção 2: GitHub Pages (Exportação Estática)
Para publicar no GitHub Pages sem custo adicional:
1. No arquivo `next.config.mjs`, adicione `output: 'export'`.
2. Execute `npm run build` para gerar a pasta estática `out/`.
3. Configure o GitHub Pages nas configurações do repositório (**Settings > Pages**) apontando para a branch `gh-pages` ou via GitHub Actions.

---

## 📄 Licença

Projeto desenvolvido para a **FAO CLÁSSICOS**. Todos os direitos reservados.
