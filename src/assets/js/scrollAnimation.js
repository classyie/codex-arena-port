// Global scrollAnimation.js file

export const initScrollAnimations = () => {
    const elements = document.querySelectorAll('.scroll-animate'); // Select elements with the scroll-animate class
  
    const onScroll = () => {
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          element.classList.add('appear-animation');
          element.classList.remove('hidden');
        }
      });
    };
  
    // Add scroll event listener
    window.addEventListener('scroll', onScroll);
  
    // Run on page load to handle elements already in view
    onScroll();
  };
  