document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      nav.style.background = 'rgba(10,10,15,0.9)';
    } else {
      nav.style.background = 'rgba(10,10,15,0.7)';
    }
  });
});
