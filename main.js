(() => {
  document.querySelectorAll('.pill-select:not(.model-select) button').forEach(button => {
    button.addEventListener('click', () => {
      const group = button.closest('.pill-select');
      group.querySelectorAll('button').forEach(b => b.classList.remove('active'));
      button.classList.add('active');
    });
  });

  document.querySelectorAll('.chip-select button:not(#splitToggle)').forEach(button => {
    button.addEventListener('click', () => button.classList.toggle('active'));
  });

  document.querySelectorAll('.faq-q').forEach(button => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      const answer = item.querySelector('.faq-a');
      const isOpen = item.classList.toggle('open');
      answer.style.display = isOpen ? 'block' : 'none';
      const symbol = button.querySelector('span');
      if (symbol) symbol.textContent = isOpen ? '−' : '+';
    });
  });

  document.querySelector('.email-form')?.addEventListener('submit', event => {
    event.preventDefault();
    const button = event.currentTarget.querySelector('button');
    const old = button.textContent;
    button.textContent = 'You’re on the list ✓';
    setTimeout(() => button.textContent = old, 2200);
  });
})();
