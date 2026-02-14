// tailwind.config.ts
const config = {
  theme: {
    extend: {
      colors: {
        brand: {
          lime: '#B9FF66',  // O verde icônico da imagem
          dark: '#000000',  // Preto dos botões/texto
          gray: '#F3F3F3',  // Fundo de cards 
        }
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', 'sans-serif'],
      }
    }
  }
}
export default config;
