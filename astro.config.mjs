import { defineConfig } from 'astro/config';

export default {
  markdown: {
    // Kann 'shiki' (Standard), 'prism' oder false sein,
    // um die Hervorhebung ganz zu deaktivieren
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'rose-pine',
    },
  },
};
