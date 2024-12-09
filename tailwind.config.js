/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xxs': '300px',
      'xs': '400px',
      'ssm': '500px',
      'xssm': '600px', // For extra small screens
      'sm': '640px', // Small screens
      'md': '768px', // Medium screens
      'lg': '1024px', // Large screens
      'xl': '1280px', // Extra-large screens
      '2xl': '1536px', // 2X Extra-large screens

      // Custom Breakpoints
      'tablet': { 'min': '768px', 'max': '1023px' }, 
      'laptop': { 'min': '1024px', 'max': '1279px' }, 
      'desktop': { 'min': '1280px' }, 

      'custom-range': { 
        raw: '(min-width: 768px) and (max-width: 1023px) and (min-height: 608px) and (max-height: 608px)' 
      },

      'min-hei': { 
        raw: '(min-height: 300px) and (max-height: 460px)' 
      },
      
      'min-hei1': { 
        raw: '(min-height: 800px) and (min-width: 1280px)' 
      },

      'min-hei2': { 
        raw: '(min-height: 600px) and (min-width: 1024px)' 
      },

      'min-hei3': { 
        raw: '(min-height: 1280px) and (min-width: 853px)' 
      },

      'min-hei4': { 
        raw: '(min-height: 1368px) and (min-width: 912px)' 
      },

      'min-hei5': { 
        raw: '(min-height: 1366px) and (min-width: 1024px)' 
      },

      'mid-1309x934': { 
        raw: '(min-width: 1309px) and (min-height: 934px)' 
      },
    }
  },
  plugins: [],
};
