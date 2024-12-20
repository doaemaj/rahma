/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "text-red-600",
    "text-orange-600",
    "text-purple-600",
    "text-blue-600",
    "text-green-600",
    "text-gray-600",
    "text-yellow-600",
    "text-teal-600",
    "text-pink-600",
    "text-rose-600",
    "text-brown-600",
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
        kotta: ['Kotta One', 'serif'],
        Crimson : ['Crimson Text', 'serif']
      },
      width: {
        'custom': '28%', // Define your custom width
      },
      colors :{
        'beige' : '#F1F0E7'
        
      },
      perspective: {
        '1000': '1000px', // Ajout de la perspective 3D
      },
      rotate: {
        'y-180': 'rotateY(180deg)', // Ajout de la rotation Y
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d', // Ajout du style de transformation 3D
      },
      backfaceVisibility: {
        hidden: 'hidden', // Ajout de la visibilité arrière
      },
    },
  },
  plugins: [function({ addUtilities }) {
    addUtilities({
      '.perspective-1000': {
        perspective: '1000px',
      },
      '.transform-style-preserve-3d': {
        transformStyle: 'preserve-3d',
      },
      '.rotate-y-180': {
        transform: 'rotateY(180deg)',
      },
      '.backface-hidden': {
        backfaceVisibility: 'hidden',
      },
    });
  },
],
}