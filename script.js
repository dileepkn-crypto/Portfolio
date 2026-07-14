document.addEventListener('DOMContentLoaded', () => {
  const loader = document.querySelector('.loader');
  window.addEventListener('load', () => setTimeout(() => loader.classList.add('hide'), 300));
  AOS.init({ duration: 720, once: true, offset: 45, easing: 'ease-out-cubic' });
  new Typed('#typed-text', { strings: ['Predictive Analytics', 'Machine Learning Engineer', 'Computer Vision Developer', 'Industry 4.0 Enthusiast'], typeSpeed: 42, backSpeed: 24, backDelay: 1500, loop: true });
  if (window.particlesJS) particlesJS('particles-js', { particles: { number: { value: 60, density: { enable: true, value_area: 900 } }, color: { value: ['#2563eb', '#06b6d4', '#8b5cf6'] }, shape: { type: 'circle' }, opacity: { value: .45, random: true }, size: { value: 2.3, random: true }, line_linked: { enable: true, distance: 145, color: '#3b82f6', opacity: .18, width: 1 }, move: { enable: true, speed: 1.15, random: true, out_mode: 'out' } }, interactivity: { detect_on: 'canvas', events: { onhover: { enable: true, mode: 'grab' }, resize: true }, modes: { grab: { distance: 130, line_linked: { opacity: .45 } } } }, retina_detect: true });
  const header = document.querySelector('header'), back = document.querySelector('.back');
  const scrollState = () => { header.classList.toggle('scrolled', scrollY > 18); back.classList.toggle('show', scrollY > 600); };
  addEventListener('scroll', scrollState, { passive: true }); scrollState();
  const toggle = document.querySelector('.toggle'), links = document.querySelector('.links');
  toggle.addEventListener('click', () => { const open = links.classList.toggle('open'); toggle.setAttribute('aria-expanded', open); toggle.innerHTML = `<i class="fa-solid fa-${open ? 'xmark' : 'bars'}"></i>`; });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { links.classList.remove('open'); toggle.setAttribute('aria-expanded', false); toggle.innerHTML = '<i class="fa-solid fa-bars"></i>'; }));
  const navItems = [...links.querySelectorAll('a[href^="#"]')];
  const sections = navItems.map(item => document.querySelector(item.getAttribute('href'))).filter(Boolean);
  const sectionObserver = new IntersectionObserver(entries => entries.forEach(entry => { if (!entry.isIntersecting) return; navItems.forEach(item => { const active = item.getAttribute('href') === `#${entry.target.id}`; item.classList.toggle('active', active); if (active) item.setAttribute('aria-current', 'page'); else item.removeAttribute('aria-current'); }); }), { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
  sections.forEach(section => sectionObserver.observe(section));
  const featuredProject = document.querySelector('.project.featured');
  if (featuredProject) {
    const liveLink = featuredProject.querySelector('a[href]');
    if (liveLink) {
      featuredProject.tabIndex = 0;
      featuredProject.setAttribute('role', 'link');
      featuredProject.setAttribute('aria-label', 'Open the live Industrial Predictive Maintenance and Recommendation System');
      const openLiveDemo = () => window.open(liveLink.href, '_blank', 'noopener');
      featuredProject.addEventListener('click', event => { if (!event.target.closest('a')) openLiveDemo(); });
      featuredProject.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openLiveDemo(); } });
    }
  }
  const gravity = document.querySelector('.anti-gravity');
  if (gravity && matchMedia('(pointer:fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const setGravity = (x, y) => {
      const px = (x - .5) * 2, py = (y - .5) * 2;
      gravity.style.setProperty('--rx', `${-py * 8}deg`);
      gravity.style.setProperty('--ry', `${px * 10}deg`);
      gravity.style.setProperty('--card-x', `${px * 7}px`);
      gravity.style.setProperty('--card-y', `${py * 7}px`);
      gravity.style.setProperty('--ring-x', `${-px * 5}px`);
      gravity.style.setProperty('--ring-y', `${-py * 5}px`);
      gravity.style.setProperty('--tag-x', `${px * 9}px`);
      gravity.style.setProperty('--tag-y', `${py * 9}px`);
      gravity.style.setProperty('--dot-x', `${-px * 14}px`);
      gravity.style.setProperty('--dot-y', `${-py * 14}px`);
      gravity.style.setProperty('--gx', `${x * 100}%`);
      gravity.style.setProperty('--gy', `${y * 100}%`);
    };
    gravity.addEventListener('pointermove', event => { const box = gravity.getBoundingClientRect(); setGravity((event.clientX - box.left) / box.width, (event.clientY - box.top) / box.height); });
    gravity.addEventListener('pointerleave', () => setGravity(.5, .5));
  }
  const hero = document.querySelector('.hero');
  if (hero && matchMedia('(pointer:fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    let pointerFrame, pointerX = .5, pointerY = .5;
    const paintHeroField = () => { hero.style.setProperty('--bgx', `${pointerX * 100}%`); hero.style.setProperty('--bgy', `${pointerY * 100}%`); pointerFrame = null; };
    hero.addEventListener('pointermove', event => { const box = hero.getBoundingClientRect(); pointerX = (event.clientX - box.left) / box.width; pointerY = (event.clientY - box.top) / box.height; if (!pointerFrame) pointerFrame = requestAnimationFrame(paintHeroField); });
    hero.addEventListener('pointerleave', () => { pointerX = .5; pointerY = .5; if (!pointerFrame) pointerFrame = requestAnimationFrame(paintHeroField); });
  }
  const counters = document.querySelectorAll('.count'); let complete = false;
  new IntersectionObserver(entries => { if (entries.some(e => e.isIntersecting) && !complete) { complete = true; counters.forEach(el => { const target = +el.dataset.target, start = performance.now(); const update = now => { const value = Math.min(target, Math.floor((now - start) / 900 * target)); el.textContent = value; if (value < target) requestAnimationFrame(update); }; requestAnimationFrame(update); }); } }, { threshold: .45 }).observe(document.querySelector('.stats'));
  document.getElementById('year').textContent = new Date().getFullYear();
});
