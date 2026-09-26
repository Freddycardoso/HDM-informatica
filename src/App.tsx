/**
 * @file src/App.tsx
 * Hub de Roteamento Inteligente e Vitrine de Captação - HDM Infocell
 * 
 * Implementação Interativa para a Vitrine Web & Demonstração:
 * - Estética: Bento Grid Assimétrico + Glassmorphism sobre Dark Mesh Gradient (#0B0B0E + Amber Glows)
 * - Roteamento: Abas/Páginas completas (/ [Home], /servicos, /produtos)
 * - Integração WhatsApp Comercial: wa.me/5535999820832 com mensagens qualificadas URL-encoded
 * - Simulador / Inspector de Mensagens do WhatsApp para auditoria de conversão em tempo real
 * - Total conformidade com as diretrizes de UI/UX, SEO Local (Passos - MG) e acessibilidade (alvos >= 48px).
 */

import React, { useState } from 'react';
import { 
  Smartphone, 
  Laptop, 
  BatteryCharging, 
  Cpu, 
  Wrench, 
  ShieldCheck, 
  MapPin, 
  Clock, 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  ShoppingBag, 
  Headphones, 
  ExternalLink,
  MessageCircle,
  Zap,
  Sparkles,
  Info,
  ChevronRight
} from 'lucide-react';

// Constantes Oficiais da HDM Infocell
const WHATSAPP_NUMBER = "5535999820832";
const FORMATTED_PHONE = "(35) 99982-0832";
const STORE_LOCATION = "Passos - MG";

interface RouteItem {
  id: 'home' | 'servicos' | 'produtos' | 'localizacao';
  label: string;
}

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'servicos' | 'produtos' | 'localizacao'>('home');
  const [selectedPreviewMessage, setSelectedPreviewMessage] = useState<string | null>(null);

  // Helper para gerar URL do WhatsApp
  const getWhatsAppUrl = (text: string) => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  // Disparar abertura ou preview
  const handleOpenWhatsApp = (e: React.MouseEvent<HTMLAnchorElement>, text: string) => {
    // Permite que o link funcione nativamente (target="_blank"), 
    // e também armazena no estado para feedback imediato no inspetor visual
    setSelectedPreviewMessage(text);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0E] text-gray-300 font-sans relative selection:bg-[#FACC15] selection:text-black">
      
      {/* ========================================================
          1. MESH GRADIENT DE FUNDO (Glows sutis amarelo/laranja)
         ======================================================== */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        {/* Glow Superior Direito (Amarelo Marca HDM) */}
        <div className="absolute -top-32 right-[-10%] w-[550px] h-[550px] rounded-full bg-amber-500/5 blur-[130px]" />
        {/* Glow Central Esquerdo (Laranja Quente Sutil) */}
        <div className="absolute top-[35%] -left-36 w-[550px] h-[550px] rounded-full bg-yellow-600/3 blur-[150px]" />
        {/* Glow Inferior (Dourado Profundo) */}
        <div className="absolute bottom-[-10%] right-[20%] w-[600px] h-[600px] rounded-full bg-amber-400/3 blur-[160px]" />
        {/* Linhas de malha geométrica sutil */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* ========================================================
          2. TOP BAR CONTRACT (3 ZONAS: Wordmark | Nav | CTA)
         ======================================================== */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0B0B0E]/85 border-b border-white/5 transition-[transform,colors,opacity,filter] duration-200 ease-punchy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Zona 1: Brand Wordmark (Elemento único sem poluição de subtítulos) */}
          <button 
            onClick={() => setActiveTab('home')}
            className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FACC15] rounded-xl text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FACC15] to-amber-600 p-[1.5px] shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-shadow">
              <div className="w-full h-full bg-[#0B0B0E] rounded-[10px] flex items-center justify-center">
                <span className="font-extrabold text-xl text-[#FACC15] tracking-tighter">HDM</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-white tracking-tight leading-none group-hover:text-[#FACC15] transition-colors">
                HDM Infocell
              </span>
              <span className="text-[11px] text-gray-400 font-medium tracking-wide">
                Passos · MG
              </span>
            </div>
          </button>

          {/* Zona 2: Links de Navegação Textuais */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <button
              onClick={() => setActiveTab('home')}
              className={`transition-colors py-1.5 border-b-2 text-sm font-medium ${
                activeTab === 'home' 
                  ? 'text-white border-[#FACC15]' 
                  : 'text-gray-400 border-transparent hover:text-white'
              }`}
            >
              Início
            </button>
            <button
              onClick={() => setActiveTab('servicos')}
              className={`transition-colors py-1.5 border-b-2 text-sm font-medium ${
                activeTab === 'servicos' 
                  ? 'text-white border-[#FACC15]' 
                  : 'text-gray-400 border-transparent hover:text-white'
              }`}
            >
              Serviços
            </button>
            <button
              onClick={() => setActiveTab('produtos')}
              className={`transition-colors py-1.5 border-b-2 text-sm font-medium ${
                activeTab === 'produtos' 
                  ? 'text-white border-[#FACC15]' 
                  : 'text-gray-400 border-transparent hover:text-white'
              }`}
            >
              Produtos & Acessórios
            </button>
            <button
              onClick={() => setActiveTab('localizacao')}
              className={`transition-colors py-1.5 border-b-2 text-sm font-medium ${
                activeTab === 'localizacao' 
                  ? 'text-white border-[#FACC15]' 
                  : 'text-gray-400 border-transparent hover:text-white'
              }`}
            >
              Localização & Contato
            </button>
          </nav>

          {/* Zona 3: Ação Primária Única (WhatsApp) - Alvo >= 48px */}
          <div className="flex items-center gap-3">
            <a
              href={getWhatsAppUrl("Olá, gostaria de um atendimento na HDM Infocell")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => handleOpenWhatsApp(e, "Olá, gostaria de um atendimento na HDM Infocell")}
              className="min-h-[48px] px-5 py-2.5 rounded-xl bg-[#FACC15] text-black font-bold text-sm hover:bg-yellow-400 active:scale-[0.97] transition-[transform,colors,opacity,filter] duration-200 ease-punchy flex items-center gap-2 shadow-lg shadow-yellow-500/20 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FACC15]"
              aria-label="Falar com técnico no WhatsApp comercial"
            >
              <MessageCircle className="w-4 h-4 fill-current shrink-0" />
              <span className="hidden sm:inline">Chamar no</span> WhatsApp
            </a>
          </div>

        </div>

        {/* Barra de Navegação Rápida Mobile */}
        <div className="md:hidden flex border-t border-white/5 bg-[#0B0B0E]/90 px-4 py-2 gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('home')}
            className={`min-h-[40px] px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
              activeTab === 'home' ? 'bg-[#FACC15] text-black font-semibold' : 'text-gray-400 hover:text-white bg-white/5'
            }`}
          >
            Início
          </button>
          <button
            onClick={() => setActiveTab('servicos')}
            className={`min-h-[40px] px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
              activeTab === 'servicos' ? 'bg-[#FACC15] text-black font-semibold' : 'text-gray-400 hover:text-white bg-white/5'
            }`}
          >
            Serviços
          </button>
          <button
            onClick={() => setActiveTab('produtos')}
            className={`min-h-[40px] px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
              activeTab === 'produtos' ? 'bg-[#FACC15] text-black font-semibold' : 'text-gray-400 hover:text-white bg-white/5'
            }`}
          >
            Acessórios
          </button>
          <button
            onClick={() => setActiveTab('localizacao')}
            className={`min-h-[40px] px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
              activeTab === 'localizacao' ? 'bg-[#FACC15] text-black font-semibold' : 'text-gray-400 hover:text-white bg-white/5'
            }`}
          >
            Loja em Passos
          </button>
        </div>
      </header>

      {/* ========================================================
          3. BANNER DE QUALIFICAÇÃO / AUDITORIA DE ROTA WHATSAPP
         ======================================================== */}
      {selectedPreviewMessage && (
        <div className="relative z-30 bg-amber-500/10 border-b border-amber-500/20 px-4 py-2.5 text-xs text-amber-200 backdrop-blur-md flex items-center justify-between">
          <div className="max-w-7xl mx-auto flex items-center gap-2 w-full justify-between">
            <div className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
              <span className="font-semibold text-[#FACC15]">Roteamento Ativo:</span>
              <span className="truncate text-gray-300">"{selectedPreviewMessage}"</span>
              <span className="hidden sm:inline text-gray-400">→ Enviando para {FORMATTED_PHONE}</span>
            </div>
            <button
              onClick={() => setSelectedPreviewMessage(null)}
              className="text-gray-400 hover:text-white font-mono ml-3 text-xs px-2 py-0.5 rounded bg-white/5"
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      {/* ========================================================
          CONTEÚDO PRINCIPAL (BASEADO NA ABA ATIVA)
         ======================================================== */}
      <main className="relative z-10">

        {/* -------------------- VIEW: HOME -------------------- */}
        {activeTab === 'home' && (
          <>
            {/* HERO SECTION */}
            <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Coluna Texto / UVP */}
                  <div className="lg:col-span-7 space-y-6 text-left">
                    
                    {/* Trust tag editorial */}
                    <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15]" />
                      <span>Passos - MG e Região</span>
                      <span className="text-gray-500" aria-hidden="true">·</span>
                      <span className="text-gray-400 font-normal">Garantia & Procedência</span>
                    </div>

                    {/* UVP Principal Solicitada no Prompt */}
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] text-balance">
                      Especialistas em conserto de <span className="text-[#FACC15] underline decoration-amber-500/30 underline-offset-8">celulares</span>, <span className="text-[#FACC15] underline decoration-amber-500/30 underline-offset-8">notebooks</span> e venda de acessórios em Passos - MG
                    </h1>

                    <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
                      Diagnóstico transparente, peças selecionadas com procedência e técnicos especializados prontos para recuperar o seu dispositivo hoje mesmo.
                    </p>

                    {/* Os Dois CTAs Primários Solicitados na Arquitetura */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
                      <button 
                        onClick={() => setActiveTab('servicos')}
                        className="min-h-[48px] px-7 py-3 rounded-xl bg-[#FACC15] text-black font-bold text-base hover:bg-yellow-400 active:scale-[0.97] transition-[transform,colors,opacity,filter] duration-200 ease-punchy flex items-center justify-center gap-3 shadow-lg shadow-yellow-500/20 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FACC15]"
                      >
                        <span>Ver Serviços de Assistência</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <button 
                        onClick={() => setActiveTab('produtos')}
                        className="min-h-[48px] px-7 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-base border border-white/15 backdrop-blur-md active:scale-[0.97] transition-[transform,colors,opacity,filter] duration-200 ease-punchy flex items-center justify-center gap-3 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-white"
                      >
                        <span>Loja de Acessórios</span>
                        <ShoppingBag className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>

                    {/* Prova Social e Confiança Adjacente */}
                    <div className="pt-6 border-t border-white/5 flex flex-wrap items-center gap-y-3 gap-x-8 text-xs text-gray-400">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-[#FACC15]" />
                        <span>Garantia de 90 dias nos reparos</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#FACC15]" />
                        <span>Orçamentos rápidos sem burocracia</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#FACC15]" />
                        <span>Loja física em Passos - MG</span>
                      </div>
                    </div>

                  </div>

                  {/* Coluna Visual do Hero: Card Tecnológico Bento Glassmorphism */}
                  <div className="lg:col-span-5">
                    <div className="relative rounded-3xl p-1 bg-gradient-to-b from-white/15 via-white/5 to-transparent shadow-2xl">
                      <div className="relative rounded-[22px] bg-[#121217]/95 backdrop-blur-xl border border-white/10 p-6 sm:p-8 overflow-hidden">
                        
                        {/* Glow interno sutil */}
                        <div className="absolute -top-16 -right-16 w-44 h-44 bg-amber-500/10 rounded-full blur-[40px] pointer-events-none" />

                        {/* Status de Atendimento em Tempo Real */}
                        <div className="flex items-center justify-between pb-5 border-b border-white/5">
                          <div className="flex items-center gap-2.5">
                            <span className="relative flex h-3 w-3">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                            </span>
                            <span className="text-xs font-semibold text-white">Bancada Aberta</span>
                          </div>
                          <span className="text-xs text-gray-400 font-mono">Técnicos em Plantão</span>
                        </div>

                        {/* Card Central Ilustrativo de Reparo de Precisão */}
                        <div className="my-6 p-5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-[#FACC15]">
                                <Smartphone className="w-5 h-5" />
                              </div>
                              <div>
                                <p className="text-sm font-bold text-white">Smartphones & Notebooks</p>
                                <p className="text-xs text-gray-400">Apple, Samsung, Xiaomi, Motorola, Dell</p>
                              </div>
                            </div>
                            <span className="text-xs text-[#FACC15] font-mono font-semibold bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                              90d garantia
                            </span>
                          </div>

                          <div className="space-y-2.5 text-xs text-gray-300">
                            <div className="flex items-center justify-between py-1 border-b border-white/5">
                              <span className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15]" />
                                <span>Troca de Tela & Touch</span>
                              </span>
                              <span className="text-emerald-400 font-medium">Original / Premium</span>
                            </div>
                            <div className="flex items-center justify-between py-1 border-b border-white/5">
                              <span className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15]" />
                                <span>Substituição de Bateria</span>
                              </span>
                              <span className="text-emerald-400 font-medium">Alta autonomia</span>
                            </div>
                            <div className="flex items-center justify-between py-1">
                              <span className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15]" />
                                <span>Micro-soldagem em Placa</span>
                              </span>
                              <span className="text-amber-400 font-medium">Laboratório próprio</span>
                            </div>
                          </div>
                        </div>

                        {/* CTA Rápido WhatsApp com feedback de clique */}
                        <a
                          href={getWhatsAppUrl("Olá, gostaria de um diagnóstico para o meu aparelho")}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => handleOpenWhatsApp(e, "Olá, gostaria de um diagnóstico para o meu aparelho")}
                          className="min-h-[48px] w-full rounded-xl bg-[#FACC15] text-black font-bold text-sm hover:bg-yellow-400 active:scale-[0.99] transition-[transform,colors,opacity,filter] duration-200 ease-punchy flex items-center justify-center gap-2 shadow-md shadow-yellow-500/20 focus:outline-none"
                        >
                          <MessageCircle className="w-4 h-4 fill-current" />
                          <span>Falar Direto no WhatsApp</span>
                        </a>

                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* ========================================================
                BENTO GRID: DEMONSTRATIVO DE SERVIÇOS & PRODUTOS
               ======================================================== */}
            <section className="py-16 md:py-24 relative">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Cabeçalho do Bento Grid */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                  <div>
                    <span className="text-xs font-semibold text-[#FACC15] uppercase tracking-wider">Qualificação Imediata</span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-1">
                      Escolha o que você precisa consertar ou comprar
                    </h2>
                    <p className="text-sm text-gray-400 mt-2 max-w-xl">
                      Cada cartão aciona diretamente o WhatsApp com mensagem pré-formatada para agilizar seu atendimento.
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#FACC15]" />
                      <span>WhatsApp Ativo</span>
                    </span>
                    <span>·</span>
                    <span className="font-mono text-gray-300">{FORMATTED_PHONE}</span>
                  </div>
                </div>

                {/* Grid Bento Assimétrico Flutuante */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">

                  {/* Card 1: Troca de Tela (Col-span 2 em telas maiores) */}
                  <div className="md:col-span-2 opacity-0 animate-enter stagger-1 rounded-3xl bg-white/[0.04] backdrop-blur-md border border-white/10 p-7 sm:p-8 flex flex-col justify-between hover:border-amber-500/40 hover:bg-white/[0.06] transition-[transform,colors,opacity,filter] duration-200 ease-punchy group relative overflow-hidden">
                    <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/10 transition-[transform,colors,opacity,filter] duration-200 ease-punchy" />
                    
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-[#FACC15]">
                          <Smartphone className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-semibold text-[#FACC15] bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                          Mais Solicitado
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#FACC15] transition-colors">
                        Troca de Tela de Celular
                      </h3>
                      <p className="text-sm text-gray-400 mb-8 leading-relaxed line-clamp-3">
                        Display quebrado, touch falhando, manchas ou listras? Telas premium com calibração original para iPhone e Android.
                      </p>
                    </div>

                    <a
                      href={getWhatsAppUrl("Olá, preciso de um orçamento para troca de tela")}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => handleOpenWhatsApp(e, "Olá, preciso de um orçamento para troca de tela")}
                      className="min-h-[48px] px-6 py-3 rounded-xl bg-[#FACC15] text-black font-bold text-sm hover:bg-yellow-400 active:scale-[0.97] transition-[transform,colors,opacity,filter] duration-200 ease-punchy flex items-center justify-between shadow-md shadow-yellow-500/20"
                      aria-label="Orçamento para troca de tela no WhatsApp"
                    >
                      <span>Orçar Troca de Tela</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Card 2: Troca de Bateria */}
                  <div className="opacity-0 animate-enter stagger-2 rounded-3xl bg-white/[0.04] backdrop-blur-md border border-white/10 p-7 flex flex-col justify-between hover:border-amber-500/40 hover:bg-white/[0.06] transition-[transform,colors,opacity,filter] duration-200 ease-punchy group">
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-[#FACC15] mb-6">
                        <BatteryCharging className="w-6 h-6" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FACC15] transition-colors">
                        Troca de Bateria
                      </h3>
                      <p className="text-sm text-gray-400 mb-6 leading-relaxed line-clamp-3">
                        Bateria descarregando rápido, aparelho desligando do nada ou estufada? Devolva a autonomia original do seu aparelho.
                      </p>
                    </div>

                    <a
                      href={getWhatsAppUrl("Olá, preciso de um orçamento para troca de bateria")}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => handleOpenWhatsApp(e, "Olá, preciso de um orçamento para troca de bateria")}
                      className="min-h-[48px] px-5 py-3 rounded-xl bg-white/5 hover:bg-[#FACC15] hover:text-black text-white font-semibold text-sm border border-white/10 active:scale-[0.97] transition-[transform,colors,opacity,filter] duration-200 ease-punchy flex items-center justify-between"
                      aria-label="Orçamento para troca de bateria no WhatsApp"
                    >
                      <span>Orçar Bateria</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Card 3: Reparo em Placa */}
                  <div className="opacity-0 animate-enter stagger-3 rounded-3xl bg-white/[0.04] backdrop-blur-md border border-white/10 p-7 flex flex-col justify-between hover:border-amber-500/40 hover:bg-white/[0.06] transition-[transform,colors,opacity,filter] duration-200 ease-punchy group">
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-[#FACC15] mb-6">
                        <Cpu className="w-6 h-6" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FACC15] transition-colors">
                        Reparo em Placa
                      </h3>
                      <p className="text-sm text-gray-400 mb-6 leading-relaxed line-clamp-3">
                        Celular não liga, em curto, sem áudio ou sem sinal de rede. Micro-soldagem de alta precisão em circuitos integrados.
                      </p>
                    </div>

                    <a
                      href={getWhatsAppUrl("Olá, preciso de um orçamento para reparo em placa")}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => handleOpenWhatsApp(e, "Olá, preciso de um orçamento para reparo em placa")}
                      className="min-h-[48px] px-5 py-3 rounded-xl bg-white/5 hover:bg-[#FACC15] hover:text-black text-white font-semibold text-sm border border-white/10 active:scale-[0.97] transition-[transform,colors,opacity,filter] duration-200 ease-punchy flex items-center justify-between"
                      aria-label="Orçamento para reparo em placa no WhatsApp"
                    >
                      <span>Orçar Placa</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Card 4: Manutenção de Notebooks (Col-span 2) */}
                  <div className="md:col-span-2 opacity-0 animate-enter stagger-4 rounded-3xl bg-white/[0.04] backdrop-blur-md border border-white/10 p-7 sm:p-8 flex flex-col justify-between hover:border-amber-500/40 hover:bg-white/[0.06] transition-[transform,colors,opacity,filter] duration-200 ease-punchy group">
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-[#FACC15] mb-6">
                        <Laptop className="w-6 h-6" />
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#FACC15] transition-colors">
                        Manutenção de Notebooks & PCs
                      </h3>
                      <p className="text-sm text-gray-400 mb-6 leading-relaxed line-clamp-3">
                        Lentidão excessiva, aquecimento, teclado com falhas ou tela quebrada? Realizamos limpeza, troca de pasta térmica e upgrades.
                      </p>
                    </div>

                    <a
                      href={getWhatsAppUrl("Olá, preciso de um orçamento para manutenção de notebook")}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => handleOpenWhatsApp(e, "Olá, preciso de um orçamento para manutenção de notebook")}
                      className="min-h-[48px] px-6 py-3 rounded-xl bg-white/5 hover:bg-[#FACC15] hover:text-black text-white font-semibold text-sm border border-white/10 active:scale-[0.97] transition-[transform,colors,opacity,filter] duration-200 ease-punchy flex items-center justify-between"
                      aria-label="Orçamento para manutenção de notebooks no WhatsApp"
                    >
                      <span>Orçar Manutenção de Notebook</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Card 5: Cabos e Carregadores */}
                  <div className="opacity-0 animate-enter stagger-5 rounded-3xl bg-white/[0.04] backdrop-blur-md border border-white/10 p-7 flex flex-col justify-between hover:border-amber-500/40 hover:bg-white/[0.06] transition-[transform,colors,opacity,filter] duration-200 ease-punchy group">
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-[#FACC15] mb-6">
                        <Zap className="w-6 h-6" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FACC15] transition-colors">
                        Cabos & Carregadores
                      </h3>
                      <p className="text-sm text-gray-400 mb-6 leading-relaxed line-clamp-3">
                        Carregamento Turbo e GaN, cabos reforçados Tipo-C, Lightning e fontes homologadas com proteção térmica.
                      </p>
                    </div>

                    <a
                      href={getWhatsAppUrl("Olá, gostaria de saber os modelos de cabos e carregadores disponíveis")}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => handleOpenWhatsApp(e, "Olá, gostaria de saber os modelos de cabos e carregadores disponíveis")}
                      className="min-h-[48px] px-5 py-3 rounded-xl bg-white/5 hover:bg-[#FACC15] hover:text-black text-white font-semibold text-sm border border-white/10 active:scale-[0.97] transition-[transform,colors,opacity,filter] duration-200 ease-punchy flex items-center justify-between"
                      aria-label="Ver cabos e carregadores no WhatsApp"
                    >
                      <span>Ver Modelos</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Card 6: Películas & Capinhas */}
                  <div className="opacity-0 animate-enter stagger-6 rounded-3xl bg-white/[0.04] backdrop-blur-md border border-white/10 p-7 flex flex-col justify-between hover:border-amber-500/40 hover:bg-white/[0.06] transition-[transform,colors,opacity,filter] duration-200 ease-punchy group">
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-[#FACC15] mb-6">
                        <ShieldCheck className="w-6 h-6" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FACC15] transition-colors">
                        Películas & Capinhas
                      </h3>
                      <p className="text-sm text-gray-400 mb-6 leading-relaxed line-clamp-3">
                        Películas 3D, cerâmica, privacidade e fosca. Capinhas anti-impacto militares e silicone aveludado sob medida.
                      </p>
                    </div>

                    <a
                      href={getWhatsAppUrl("Olá, gostaria de saber as opções de películas e capinhas para o meu aparelho")}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => handleOpenWhatsApp(e, "Olá, gostaria de saber as opções de películas e capinhas para o meu aparelho")}
                      className="min-h-[48px] px-5 py-3 rounded-xl bg-white/5 hover:bg-[#FACC15] hover:text-black text-white font-semibold text-sm border border-white/10 active:scale-[0.97] transition-[transform,colors,opacity,filter] duration-200 ease-punchy flex items-center justify-between"
                      aria-label="Ver películas e capas no WhatsApp"
                    >
                      <span>Consultar Opções</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                </div>

                {/* Banner de Roteamento de Catálogo Completo */}
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-between p-6 rounded-2xl bg-white/[0.02] border border-white/5 gap-4">
                  <p className="text-sm text-gray-400">
                    Deseja navegar por todas as categorias e opções com detalhes técnicos?
                  </p>
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => setActiveTab('servicos')}
                      className="text-sm font-semibold text-[#FACC15] hover:underline flex items-center gap-1"
                    >
                      <span>Todos os Serviços</span>
                      <span>→</span>
                    </button>
                    <span className="text-gray-600">|</span>
                    <button 
                      onClick={() => setActiveTab('produtos')}
                      className="text-sm font-semibold text-[#FACC15] hover:underline flex items-center gap-1"
                    >
                      <span>Catálogo de Produtos</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>

              </div>
            </section>
          </>
        )}

        {/* -------------------- VIEW: SERVIÇOS -------------------- */}
        {activeTab === 'servicos' && (
          <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
                <button onClick={() => setActiveTab('home')} className="hover:underline text-gray-400">Início</button>
                <span className="text-gray-600">/</span>
                <span>Assistência Técnica</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Serviços de Assistência Técnica
              </h1>
              <p className="text-base sm:text-lg text-gray-300 mt-4 leading-relaxed">
                Técnicos qualificados, bancada com equipamentos modernos e garantia legal em todos os reparos. Escolha o reparo e fale diretamente no WhatsApp:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  titulo: "Troca de Tela & Display",
                  desc: "Recuperação total para telas trincadas, touch inoperante ou manchas pretas. Peças selecionadas para iPhone, Samsung, Xiaomi e Motorola.",
                  msg: "Olá, preciso de um orçamento para troca de tela",
                  badge: "Mais Solicitado",
                  itens: ["iPhone, Samsung, Xiaomi, Motorola", "Testes de calibração de cores e touch", "90 dias de garantia com nota"]
                },
                {
                  titulo: "Troca de Bateria",
                  desc: "Autonomia restaurada com baterias testadas contra sobrecarga, aquecimento e com capacidade nominal autêntica.",
                  msg: "Olá, preciso de um orçamento para troca de bateria",
                  badge: "Alta Demanda",
                  itens: ["Baterias novas e com selo", "Substituição rápida e segura", "Elimina desligamentos repentinos"]
                },
                {
                  titulo: "Reparo em Placa Lógica",
                  desc: "Celulares que não ligam, travados em loop, sem som ou em curto pós-queda. Diagnóstico avançado com micro-soldagem.",
                  msg: "Olá, preciso de um orçamento para reparo em placa",
                  badge: "Especialidade",
                  itens: ["Microscópio e estação de retrabalho", "Recuperação de trilhas e CIs", "Soluções quando outras oficinas condenam"]
                },
                {
                  titulo: "Manutenção de Notebooks",
                  desc: "Limpeza física do cooler, troca de pasta térmica de prata, upgrades de SSD e memória RAM para velocidade imediata.",
                  msg: "Olá, preciso de um orçamento para manutenção de notebook",
                  badge: "Performance",
                  itens: ["Dell, Lenovo, Acer, Asus, Apple", "Fim da lentidão e barulho alto", "Reparo de teclado e carcaça"]
                },
                {
                  titulo: "Desoxidação de Aparelhos",
                  desc: "Aparelho caiu na piscina, água ou pegou umidade? Banho químico em cuba ultrassônica para salvar a placa e seus dados.",
                  msg: "Olá, meu aparelho molhou e preciso de socorro imediato para desoxidação",
                  badge: "Urgência",
                  itens: ["Ação rápida salva a placa", "Limpeza ultrassônica profunda", "Inspeção contra oxidação de componentes"]
                },
                {
                  titulo: "Conectores, Microfone & Câmeras",
                  desc: "Troca do conector USB-C ou Lightning com mau contato, lentes trincadas de câmeras e autofalantes chiando.",
                  msg: "Olá, preciso de reparo no conector de carga / câmera do meu aparelho",
                  badge: "Rápido",
                  itens: ["Carregamento turbo restabelecido", "Câmeras limpas e focadas", "Áudio cristalino para chamadas"]
                }
              ].map((servico, idx) => (
                <div key={idx} style={{ animationDelay: `${idx * 50}ms` }} className="opacity-0 animate-enter rounded-3xl bg-white/[0.04] backdrop-blur-md border border-white/10 p-7 flex flex-col justify-between hover:border-amber-500/40 hover:bg-white/[0.06] transition-[transform,colors,opacity,filter] duration-200 ease-punchy group">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-xs font-semibold text-[#FACC15] bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                        {servico.badge}
                      </span>
                      <span className="text-xs text-gray-400">Passos - MG</span>
                    </div>

                    <h2 className="text-xl font-bold text-white mb-2 group-hover:text-[#FACC15] transition-colors">
                      {servico.titulo}
                    </h2>

                    <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                      {servico.desc}
                    </p>

                    <ul className="space-y-2 mb-8 text-xs text-gray-400">
                      {servico.itens.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={getWhatsAppUrl(servico.msg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => handleOpenWhatsApp(e, servico.msg)}
                    className="min-h-[48px] px-5 py-3 rounded-xl bg-[#FACC15] text-black font-semibold text-sm hover:bg-yellow-400 active:scale-[0.97] transition-[transform,colors,opacity,filter] duration-200 ease-punchy flex items-center justify-between shadow-md shadow-yellow-500/10"
                    aria-label={`Solicitar orçamento para ${servico.titulo} no WhatsApp`}
                  >
                    <span>Solicitar Orçamento</span>
                    <MessageCircle className="w-4 h-4 fill-current" />
                  </a>
                </div>
              ))}
            </div>

            {/* Chamada para Diagnóstico Personalizado */}
            <div className="mt-16 p-8 rounded-3xl bg-white/[0.02] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-white">Não sabe exatamente o defeito do seu aparelho?</h3>
                <p className="text-sm text-gray-400 mt-1">Explique o sintoma para nossa bancada técnica no WhatsApp. Avaliação rápida e sem custo inicial.</p>
              </div>
              <a
                href={getWhatsAppUrl("Olá, meu aparelho está com um problema diferente e gostaria de orientação")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => handleOpenWhatsApp(e, "Olá, meu aparelho está com um problema diferente e gostaria de orientação")}
                className="min-h-[48px] px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-sm border border-white/15 transition-[transform,colors,opacity,filter] duration-200 ease-punchy flex items-center gap-2 whitespace-nowrap"
              >
                <span>Falar com Técnico no WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </section>
        )}

        {/* -------------------- VIEW: PRODUTOS -------------------- */}
        {activeTab === 'produtos' && (
          <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
                <button onClick={() => setActiveTab('home')} className="hover:underline text-gray-400">Início</button>
                <span className="text-gray-600">/</span>
                <span>Acessórios & Varejo</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Acessórios & Periféricos
              </h1>
              <p className="text-base sm:text-lg text-gray-300 mt-4 leading-relaxed">
                Cabos duráveis, carregadores homologados, películas com aplicação cortesia na loja e periféricos para o seu dia a dia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  titulo: "Cabos e Carregadores",
                  desc: "Fontes Turbo de 20W a 65W GaN, cabos reforçados em nylon trançado com pontas blindadas para iPhone (Lightning/Type-C) e Android.",
                  msg: "Olá, gostaria de saber os modelos de cabos e carregadores disponíveis",
                  badge: "Mais Vendido",
                  itens: ["Carregamento turbo seguro", "Proteção contra curto e sobretensão", "Compatibilidade com todas as marcas"]
                },
                {
                  titulo: "Películas e Capinhas",
                  desc: "Películas cerâmicas flexíveis, vidro temperado 3D, privacidade e fosca anti-reflexo. Capas anti-impacto militares e silicone aveludado.",
                  msg: "Olá, gostaria de saber as opções de películas e capinhas para o meu aparelho",
                  badge: "Proteção",
                  itens: ["Aplicação sem bolhas na loja", "Proteção reforçada para a câmera", "Opções com anel magnético MagSafe"]
                },
                {
                  titulo: "Periféricos",
                  desc: "Mouses ergonômicos e gamers, teclados para escritório, hubs adaptadores USB-C com saídas HDMI/Rede e bases elevatórias.",
                  msg: "Olá, gostaria de saber os modelos de periféricos disponíveis",
                  badge: "Informática",
                  itens: ["Conexão plug & play sem atraso", "Acessórios para produtividade", "Durabilidade e garantia de troca"]
                },
                {
                  titulo: "Fones de Ouvido & Áudio",
                  desc: "Fones Bluetooth TWS com estojo compacto, graves reforçados e cancelamento de ruído, além de fones auriculares com fio e microfone.",
                  msg: "Olá, gostaria de saber os modelos de fones de ouvido disponíveis",
                  badge: "Áudio",
                  itens: ["Bluetooth 5.3 estável", "Microfone nítido para chamadas", "Bateria para o dia todo"]
                },
                {
                  titulo: "Suportes Veiculares & Mesa",
                  desc: "Suportes para painel e ar-condicionado com travas por gravidade ou imãs de neodímio. Suportes de alumínio articulados para mesa.",
                  msg: "Olá, gostaria de ver os suportes veiculares e de mesa disponíveis",
                  badge: "Conveniência",
                  itens: ["Fixação firme sem vibrar no carro", "Giro 360 graus", "Ideal para GPS e chamadas de vídeo"]
                },
                {
                  titulo: "Armazenamento & Cartões de Memória",
                  desc: "Pen drives USB 3.0 e cartões MicroSD Classe 10 de alta velocidade (SanDisk e Kingston) de 32GB a 256GB para celular e câmeras.",
                  msg: "Olá, gostaria de verificar opções de pen drive e cartão de memória disponíveis",
                  badge: "Capacidade",
                  itens: ["Velocidade rápida de gravação", "Ideal para fotos e vídeos 4K", "Compatível com celular e notebook"]
                }
              ].map((cat, idx) => (
                <div key={idx} style={{ animationDelay: `${idx * 50}ms` }} className="opacity-0 animate-enter rounded-3xl bg-white/[0.04] backdrop-blur-md border border-white/10 p-7 flex flex-col justify-between hover:border-amber-500/40 hover:bg-white/[0.06] transition-[transform,colors,opacity,filter] duration-200 ease-punchy group">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-xs font-semibold text-[#FACC15] bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                        {cat.badge}
                      </span>
                      <span className="text-xs text-gray-400">Pronta Entrega</span>
                    </div>

                    <h2 className="text-xl font-bold text-white mb-2 group-hover:text-[#FACC15] transition-colors">
                      {cat.titulo}
                    </h2>

                    <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                      {cat.desc}
                    </p>

                    <ul className="space-y-2 mb-8 text-xs text-gray-400">
                      {cat.itens.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={getWhatsAppUrl(cat.msg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => handleOpenWhatsApp(e, cat.msg)}
                    className="min-h-[48px] px-5 py-3 rounded-xl bg-white/5 hover:bg-[#FACC15] hover:text-black text-white font-semibold text-sm border border-white/10 active:scale-[0.97] transition-[transform,colors,opacity,filter] duration-200 ease-punchy flex items-center justify-between shadow-sm"
                    aria-label={`Consultar modelos de ${cat.titulo} no WhatsApp`}
                  >
                    <span>Ver no WhatsApp</span>
                    <MessageCircle className="w-4 h-4 fill-current" />
                  </a>
                </div>
              ))}
            </div>

            {/* Banner de Aplicação de Películas */}
            <div className="mt-16 p-8 rounded-3xl bg-amber-500/5 border border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white">Aplicação Cortesia de Películas na Loja</h3>
                <p className="text-sm text-gray-400">Comprando sua película na HDM Infocell, a aplicação sem poeira ou bolhas é feita por nós sem custo extra.</p>
              </div>
              <a
                href={getWhatsAppUrl("Olá, gostaria de saber o endereço da loja em Passos para colocar uma película")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => handleOpenWhatsApp(e, "Olá, gostaria de saber o endereço da loja em Passos para colocar uma película")}
                className="min-h-[48px] px-6 py-3 rounded-xl bg-[#FACC15] text-black font-bold text-sm hover:bg-yellow-400 whitespace-nowrap transition-[transform,colors,opacity,filter] duration-200 ease-punchy shadow-md shadow-yellow-500/10 flex items-center gap-2"
              >
                <span>Ver Localização da Loja</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </section>
        )}

        {/* -------------------- VIEW: LOCALIZAÇÃO & CONTATO -------------------- */}
        {activeTab === 'localizacao' && (
          <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
                <button onClick={() => setActiveTab('home')} className="hover:underline text-gray-400">Início</button>
                <span className="text-gray-600">/</span>
                <span>Unidade Física</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                HDM Infocell em Passos - MG
              </h1>
              <p className="text-base sm:text-lg text-gray-300 mt-4 leading-relaxed">
                Venha até nossa loja física para diagnóstico presencial ou consulte nossa equipe técnica via WhatsApp.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              
              {/* Informações de Contato e Horários */}
              <div className="space-y-6">
                
                <div className="p-7 rounded-3xl bg-white/[0.04] backdrop-blur-md border border-white/10 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-[#FACC15]">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Endereço & Atendimento</h3>
                      <p className="text-xs text-gray-400">Passos, Minas Gerais - Brasil</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Localizada estrategicamente em Passos - MG, com fácil acesso para entrega e retirada de aparelhos celulares, notebooks e aquisição de acessórios.
                  </p>

                  <div className="pt-2">
                    <a
                      href={getWhatsAppUrl("Olá, gostaria de saber o endereço completo e ponto de referência da loja em Passos")}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => handleOpenWhatsApp(e, "Olá, gostaria de saber o endereço completo e ponto de referência da loja em Passos")}
                      className="min-h-[48px] px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-sm border border-white/15 transition-[transform,colors,opacity,filter] duration-200 ease-punchy inline-flex items-center gap-2"
                    >
                      <MapPin className="w-4 h-4 text-[#FACC15]" />
                      <span>Pedir Localização no WhatsApp</span>
                    </a>
                  </div>
                </div>

                <div className="p-7 rounded-3xl bg-white/[0.04] backdrop-blur-md border border-white/10 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-[#FACC15]">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Horários de Funcionamento</h3>
                      <p className="text-xs text-emerald-400">Aberto de Segunda a Sábado</p>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                      <span>Segunda a Sexta-feira</span>
                      <span className="font-mono text-white font-medium">08:30 às 18:00</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5">
                      <span>Sábados</span>
                      <span className="font-mono text-white font-medium">08:30 às 12:30</span>
                    </div>
                  </div>
                </div>

                <div className="p-7 rounded-3xl bg-white/[0.04] backdrop-blur-md border border-white/10 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-[#FACC15]">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Canal Direto</h3>
                      <p className="text-xs text-gray-400">WhatsApp Comercial Oficial</p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-300">
                    Número para mensagens e orçamentos: <span className="text-white font-mono font-bold">{FORMATTED_PHONE}</span>
                  </p>

                  <a
                    href={getWhatsAppUrl("Olá, gostaria de falar com o atendimento da HDM Infocell")}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => handleOpenWhatsApp(e, "Olá, gostaria de falar com o atendimento da HDM Infocell")}
                    className="min-h-[48px] w-full rounded-xl bg-[#FACC15] text-black font-bold text-sm hover:bg-yellow-400 transition-[transform,colors,opacity,filter] duration-200 ease-punchy flex items-center justify-center gap-2 shadow-md shadow-yellow-500/20"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Iniciar Conversa Agora</span>
                  </a>
                </div>

              </div>

              {/* Card Ilustrativo de Passos - MG e Credibilidade */}
              <div className="rounded-3xl bg-white/[0.03] border border-white/10 p-8 space-y-6">
                <span className="text-xs font-semibold text-[#FACC15] uppercase tracking-wider">
                  Compromisso Regional
                </span>
                <h3 className="text-2xl font-bold text-white">
                  Sua assistência técnica de confiança no sudoeste mineiro
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  A HDM Infocell nasceu com o objetivo de oferecer a Passos e cidades vizinhas um padrão diferenciado de assistência técnica para smartphones e computadores. 
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#FACC15] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">Atendimento Humanizado</h4>
                      <p className="text-xs text-gray-400">Você conversa diretamente com quem entende do assunto, sem enrolação.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#FACC15] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">Peças Testadas e Aprovadas</h4>
                      <p className="text-xs text-gray-400">Rigoso controle de qualidade para que o problema não retorne.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#FACC15] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">Segurança para seus Dados</h4>
                      <p className="text-xs text-gray-400">Total sigilo e integridade das fotos, conversas e arquivos do seu aparelho.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200">
                    <p className="font-semibold text-[#FACC15] mb-1">Como funciona o atendimento?</p>
                    <p className="text-gray-300">
                      1. Você clica em qualquer botão do site e abre o WhatsApp.<br />
                      2. Nosso atendente qualifica seu aparelho e repassa o orçamento prévio.<br />
                      3. Você entrega o aparelho na loja ou combina a manutenção com agilidade!
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </section>
        )}

      </main>

      {/* ========================================================
          RODAPÉ OFICIAL (GLASSMORPHIC & LOCAL BUSINESS)
         ======================================================== */}
      <footer className="relative z-10 border-t border-white/5 bg-[#08080A]/95 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            
            {/* Coluna 1: Marca & UVP */}
            <div className="space-y-4 md:col-span-2">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FACC15] to-amber-600 p-[1.5px]">
                  <div className="w-full h-full bg-[#0B0B0E] rounded-[10px] flex items-center justify-center">
                    <span className="font-extrabold text-lg text-[#FACC15]">HDM</span>
                  </div>
                </div>
                <span className="font-bold text-xl text-white">HDM Infocell</span>
              </div>
              <p className="text-sm text-gray-400 max-w-md leading-relaxed">
                Referência em conserto avançado de celulares, tablets, notebooks e venda de acessórios premium em Passos - MG. Peças de alta qualidade, garantia no serviço e atendimento ágil.
              </p>
              <div className="flex items-center gap-3 text-xs text-gray-400 pt-2">
                <span>Passos - MG</span>
                <span aria-hidden="true">·</span>
                <span>Seg à Sex: 08:30 às 18:00</span>
                <span aria-hidden="true">·</span>
                <span>Sáb: 08:30 às 12:30</span>
              </div>
            </div>

            {/* Coluna 2: Navegação Rápida */}
            <div>
              <h4 className="text-xs font-semibold text-white tracking-wider uppercase mb-4">Navegação</h4>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li>
                  <button onClick={() => setActiveTab('home')} className="hover:text-[#FACC15] transition-colors">
                    Início
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab('servicos')} className="hover:text-[#FACC15] transition-colors">
                    Assistência Técnica
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab('produtos')} className="hover:text-[#FACC15] transition-colors">
                    Loja de Acessórios
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab('localizacao')} className="hover:text-[#FACC15] transition-colors">
                    Como Chegar (Passos - MG)
                  </button>
                </li>
              </ul>
            </div>

            {/* Coluna 3: Atendimento Direto */}
            <div>
              <h4 className="text-xs font-semibold text-white tracking-wider uppercase mb-4">Atendimento</h4>
              <div className="space-y-3 text-sm">
                <a 
                  href={getWhatsAppUrl("Olá, gostaria de falar com a HDM Infocell")}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={(e) => handleOpenWhatsApp(e, "Olá, gostaria de falar com a HDM Infocell")}
                  className="flex items-center gap-2 text-gray-300 hover:text-[#FACC15] transition-colors group"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono">{FORMATTED_PHONE}</span>
                </a>
                <p className="text-xs text-gray-500">
                  Atendimento presencial e suporte online via WhatsApp comercial.
                </p>
                <div className="pt-2">
                  <a
                    href={getWhatsAppUrl("Olá, preciso de um orçamento urgente")}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => handleOpenWhatsApp(e, "Olá, preciso de um orçamento urgente")}
                    className="inline-block text-xs font-medium text-[#FACC15] hover:underline"
                  >
                    Solicitar Orçamento Urgente →
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
            <p>© {new Date().getFullYear()} HDM Infocell. Todos os direitos reservados. Passos - MG.</p>
            <p className="text-gray-500">Hub de captação estática otimizado para velocidade máxima e conversão direta via WhatsApp.</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Button WhatsApp no mobile (sem violar o cap de 15% sticky) */}
      <div className="fixed bottom-5 right-5 z-40 sm:hidden">
        <a
          href={getWhatsAppUrl("Olá, gostaria de um atendimento na HDM Infocell")}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => handleOpenWhatsApp(e, "Olá, gostaria de um atendimento na HDM Infocell")}
          className="w-14 h-14 rounded-full bg-[#FACC15] text-black shadow-2xl shadow-yellow-500/50 flex items-center justify-center active:scale-95 transition-transform"
          aria-label="Abrir WhatsApp da HDM Infocell"
        >
          <MessageCircle className="w-7 h-7 fill-current" />
        </a>
      </div>

    </div>
  );
}
