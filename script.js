console.log("Website Revolusi Industri 4.0 aktif!");

const revealElements = document.querySelectorAll('.section, .cta');
const observer = new IntersectionObserver((entries, observerInstance) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observerInstance.unobserve(entry.target);
  });
}, {
  threshold: 0.2
});

revealElements.forEach(el => observer.observe(el));

const navLinks = document.querySelectorAll('.nav-links a');
const sections = Array.from(navLinks).map(link => {
  const target = document.querySelector(link.getAttribute('href'));
  return { link, target };
});

const updateActiveLink = () => {
  const scrollPosition = window.scrollY + window.innerHeight / 2;

  sections.forEach(({ link, target }) => {
    if (!target) return;
    const top = target.offsetTop;
    const bottom = top + target.offsetHeight;

    if (scrollPosition >= top && scrollPosition < bottom) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
};

window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);
window.addEventListener('resize', updateActiveLink);
