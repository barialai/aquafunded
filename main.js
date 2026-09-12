(function () {
  const data = window.AQUA_DATA || {};
  const navToggle = document.querySelector("[data-nav-toggle]");
  const navMenu = document.querySelector("[data-nav-menu]");
  const header = document.querySelector("[data-header]");
  const toast = document.querySelector("[data-toast]");

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(showToast.timeout);
    showToast.timeout = window.setTimeout(() => {
      toast.classList.remove("is-visible");
    }, 2200);
  }

  function closeMenu() {
    if (!navToggle || !navMenu) return;
    navToggle.setAttribute("aria-expanded", "false");
    navMenu.classList.remove("is-open");
    document.body.classList.remove("nav-open");
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!isOpen));
      navMenu.classList.toggle("is-open", !isOpen);
      document.body.classList.toggle("nav-open", !isOpen);
    });

    navMenu.addEventListener("click", (event) => {
      if (event.target.matches("a")) closeMenu();
    });
  }

  document.addEventListener("click", (event) => {
    const copyButton = event.target.closest("[data-copy-value]");
    if (!copyButton) return;

    const value = copyButton.dataset.copyValue;
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(value).then(() => showToast(`Copied ${value}`));
    } else {
      const input = document.createElement("input");
      input.value = value;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      input.remove();
      showToast(`Copied ${value}`);
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      event.preventDefault();
      closeMenu();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  function renderRewards() {
    const grid = document.querySelector("[data-rewards-grid]");
    if (!grid || !data.rewards) return;

    grid.innerHTML = data.rewards.map((reward, index) => `
      <article class="reward-card reveal">
        <div class="reward-card__visual">
          <span>${String(index + 1).padStart(2, "0")}</span>
          <div class="reward-card__wave"></div>
        </div>
        <strong>${reward.amount}</strong>
        <div>
          <span>${reward.name}</span>
          <small>${reward.country}</small>
        </div>
      </article>
    `).join("");
  }

  function renderBenefits() {
    const grid = document.querySelector("[data-benefits-grid]");
    if (!grid || !data.benefits) return;

    grid.innerHTML = data.benefits.map((benefit, index) => `
      <article class="benefit-card reveal">
        <span class="benefit-card__icon">${String(index + 1).padStart(2, "0")}</span>
        <h3>${benefit.title}</h3>
        <p>${benefit.text}</p>
      </article>
    `).join("");
  }

  function renderReviews() {
    const grid = document.querySelector("[data-review-grid]");
    if (!grid || !data.reviews) return;

    grid.innerHTML = data.reviews.map((review) => `
      <article class="review-card reveal">
        <div class="review-card__top">
          <span class="review-card__avatar">${review.name.slice(0, 1)}</span>
          <div>
            <strong>${review.name}</strong>
            <span>${review.location}</span>
          </div>
        </div>
        <div class="review-card__stars">★★★★★</div>
        <p>${review.text}</p>
      </article>
    `).join("");
  }

  function renderFaqs() {
    const list = document.querySelector("[data-faq-list]");
    if (!list || !data.faqs) return;

    list.innerHTML = data.faqs.map((item, index) => `
      <details class="faq-item" ${index === 0 ? "open" : ""}>
        <summary>${item.question}</summary>
        <p>${item.answer}</p>
      </details>
    `).join("");
  }

  function animateCounters() {
    const counters = document.querySelectorAll("[data-counter]");
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = Number(el.dataset.counter);
        const duration = 1200;
        const started = performance.now();

        function tick(now) {
          const progress = Math.min((now - started) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const value = Math.round(target * eased);

          if (target >= 1000000) {
            el.textContent = `$${Math.round(value / 1000000)}M+`;
          } else if (target === 940) {
            el.textContent = "9.4";
          } else if (target >= 1000) {
            el.textContent = `${Math.round(value / 1000)}K+`;
          } else {
            el.textContent = value.toLocaleString();
          }

          if (progress < 1) requestAnimationFrame(tick);
        }

        requestAnimationFrame(tick);
        obs.unobserve(el);
      });
    }, { threshold: 0.4 });

    counters.forEach((counter) => observer.observe(counter));
  }

  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    items.forEach((item) => observer.observe(item));
  }

  function initHeader() {
    if (!header) return;
    const update = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  function setYear() {
    const year = document.querySelector("[data-year]");
    if (year) year.textContent = new Date().getFullYear();
  }

  renderRewards();
  renderBenefits();
  renderReviews();
  renderFaqs();
  setYear();
  initHeader();
  animateCounters();
  initReveal();
})();
