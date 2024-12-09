/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xxs':'300px',
      'xs': '400px',
      'ssm':'500px',
      // => @media (min-width: 320px) { ... }
      'xssm':'600px',
      
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // // => @media (min-width: 1536px) { ... }
      // 'custom': { 'raw': '(min-width: 820px) and (max-width: 1180px)' },
      // 'lg-custom': { 'raw': '(min-width: 1024px) and (max-width: 1366px)' },
      // 'custom-912': { 'raw': '(min-width: 912px) and (max-width: 1368px)' },
      // 'custom-344': { 'raw': '(min-width: 344px) and (max-width: 400px) and (min-height: 882px)' },
      // 'custom-1024-600': { 'raw': '(min-width: 1024px) and (max-height: 600px)' },
      // 'custom-1280-800': { 'raw': '(min-width: 1280px) and (max-height: 800px)' },
      // 'customnew': { 'raw': '(min-width: 768px) and (min-height: 668px)' },
      // 'customnew1': { 'raw': '(min-width: 1280px) and (min-height: 668px)' },
      // 'custom-range': { 'raw': '(min-width: 768px) and (max-width: 1023px) and (min-height: 608px) and (max-height: 608px)' },
      // 'custom-range1': { 'raw': '(min-width: 1024px) and (max-width: 1264px) and (min-height: 620px) and (max-height: 620px)' },
      // 'custom-range2': { 'raw': '(min-width: 1023px) and (max-width: 1264px) and (min-height: 620px) and (max-height: 620px)' },


      'tablet': { 'min': '768px', 'max': '1023px' }, 

        // Laptop: Between 1024px and 1279px
        'laptop': { 'min': '1024px', 'max': '1279px' },

        // Desktop: 1280px and above
        'desktop': { 'min': '1280px' },

        'custom-range': { 
          'raw': '(min-width: 768px) and (max-width: 1023px) and (min-height: 608px) and (max-height: 608px)' 
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
    }
    
  },
  plugins: [],
}
