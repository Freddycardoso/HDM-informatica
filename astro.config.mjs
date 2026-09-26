/**
 * @file astro.config.mjs
 * Configuração fundacional do projeto Astro para a HDM Infocell.
 * 
 * Engenharia:
 * - Modo SSG (Static Site Generation) puro (output: 'static').
 * - Zero-JS por padrão para LCP e FCP imediatos.
 * - Integração oficial com Tailwind CSS.
 * - Otimização de assets e compatibilidade estrita com Core Web Vitals.
 */

import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // Garante geração 100% estática (Zero-JS para o cliente a menos que explicitado)
  output: 'static',
  
  // URL de produção configurada para resolução de links canônicos e OpenGraph
  site: 'https://hdminfocell.com.br',
  
  // Integrações
  integrations: [
    react(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },

  // Otimização de build para performance máxima
  build: {
    inlineStylesheets: 'always', // Inlining de CSS crítico para eliminar render-blocking resources
  },

  // Otimização de imagens do Astro
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});
