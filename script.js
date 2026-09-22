document.addEventListener('DOMContentLoaded', () => {
  // rolagem suave para links do menu
  document.querySelectorAll('.nav nav a').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // revela seções ao rolar a página
  const sections = document.querySelectorAll('.block, .hero, .cta');
  sections.forEach(s => { s.style.opacity = 0; s.style.transform = 'translateY(16px)'; s.style.transition = 'opacity .6s ease, transform .6s ease'; });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  sections.forEach(s => observer.observe(s));
});