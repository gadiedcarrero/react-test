/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          jost: ['Jost', 'sans-serif'],
          mulish: ['Mulish', 'sans-serif'],
        },
        fontSize: {
          '24px': '24px',
          '14px': '14px',
          '13px': '13px',
        },
        fontWeight: {
          '100': 100,
          '200': 200,
          '300': 300,
          '400': 400,
          '600': 600,
          '700': 700,
          '800': 800,
        },
        colors: {
          ligthBG: '#F5F9FF',
          heading: '#202244',
          text: '#545454',
          customBlue: 'rgba(32, 34, 68, 0.8)',

        },
        boxShadow: {
          'custom': '1px 2px 10px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    plugins: [],
  }
  
  