(() => {
  const header = document.querySelector('.site-header');
  const nav = document.querySelector('.main-nav');
  const toggle = document.querySelector('.menu-toggle');

  const closeMenu = () => {
    nav?.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  };

  toggle?.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    nav?.classList.toggle('open', !open);
    document.body.classList.toggle('menu-open', !open);
  });

  nav?.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });

  window.addEventListener('scroll', () => {
    header?.classList.toggle('scrolled', window.scrollY > 12);
  }, { passive: true });

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
      const id = link.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  document.querySelectorAll('.copy-code-btn').forEach(button => {
    button.addEventListener('click', async () => {
      const value = button.dataset.copy || 'BACK2WORK';
      const original = button.innerHTML;
      try {
        await navigator.clipboard.writeText(value);
        button.classList.add('copied');
        button.textContent = 'Copied: ' + value;
      } catch (_) {
        button.textContent = value;
      }
      window.setTimeout(() => {
        button.classList.remove('copied');
        button.innerHTML = original;
      }, 1600);
    });
  });
})();
