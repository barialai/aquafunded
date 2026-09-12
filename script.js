/* ===== Tokens ===== */
:root {
  --blue: #1C7FF2;
  --blue-dark: #0D5FD1;
  --blue-pale: #EAF2FE;
  --ink: #0F172A;
  --slate: #64748B;
  --cream: #F3EEE3;
  --pale: #F3F6FC;
  --line: #E7EBF3;
  --orange: #F5952B;
  --navy: #060B14;
  --radius-lg: 24px;
  --radius-md: 16px;
  --radius-sm: 10px;
  --max: 1180px;
  font-size: 16px;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }

body {
  margin: 0;
  background: #fff;
  color: var(--ink);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  line-height: 1.55;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4 {
  font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
  font-weight: 700;
  letter-spacing: -0.01em;
  margin: 0;
  color: var(--ink);
}

a { color: inherit; text-decoration: none; }
img { max-width: 100%; display: block; }
button { font-family: inherit; }

:focus-visible { outline: 2px solid var(--blue); outline-offset: 3px; }

@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}

.wrap { max-width: var(--max); margin: 0 auto; padding: 0 32px; }

section { padding: 88px 0; }
.section-head { max-width: 620px; margin: 0 auto 48px; text-align: center; }
.section-head.left { text-align: left; margin: 0 0 44px; }
.section-head h2 { font-size: clamp(1.9rem, 3.2vw, 2.6rem); line-height: 1.15; }
.section-head p { color: var(--slate); margin-top: 14px; font-size: 1.02rem; }
.eyebrow-pill {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--pale); border: 1px solid var(--line);
  padding: 8px 16px; border-radius: 999px; font-size: 0.85rem;
  font-weight: 600; color: var(--ink); margin-bottom: 18px;
}

/* ===== Buttons ===== */
.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  padding: 14px 28px; border-radius: 999px; font-weight: 600; font-size: 0.95rem;
  cursor: pointer; border: 1px solid transparent; transition: transform 0.15s ease, background 0.15s ease;
  white-space: nowrap;
}
.btn:hover { transform: translateY(-1px); }
.btn-primary { background: var(--blue); color: #fff; }
.btn-primary:hover { background: var(--blue-dark); }
.btn-outline { background: #fff; border-color: var(--blue); color: var(--blue); }
.btn-outline:hover { background: var(--blue-pale); }
.btn-white { background: #fff; color: var(--blue-dark); }
.btn-ghost-dark { background: rgba(255,255,255,0.12); color: #fff; border-color: rgba(255,255,255,0.35); }
.btn-block { width: 100%; }

/* ===== Top promo bar ===== */
.promo-bar {
  background: linear-gradient(120deg, #2E8BF5, #1560D6);
  border-radius: 0 0 28px 28px;
  color: #fff;
  padding: 14px 0;
}
.promo-bar .wrap {
  display: flex; justify-content: center; align-items: center; gap: 28px;
  font-size: 0.9rem; flex-wrap: wrap;
}
.promo-bar strong { font-weight: 700; }

/* ===== Header ===== */
.site-header { background: #fff; border-bottom: 1px solid transparent; }
.site-header .wrap {
  display: flex; align-items: center; justify-content: space-between; height: 84px; gap: 20px;
}
.brand { display: flex; align-items: center; gap: 10px; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 1.2rem; color: var(--blue); }
.brand img { width: 34px; height: 34px; }
.main-nav { display: flex; gap: 30px; align-items: center; }
.main-nav a { font-size: 0.94rem; color: var(--ink); font-weight: 500; }
.header-actions { display: flex; align-items: center; gap: 12px; }
.header-actions .btn { padding: 11px 22px; font-size: 0.88rem; }
.btn-login { border: 1px solid var(--line); color: var(--ink); background: #fff; }

/* ===== Hero ===== */
.hero { position: relative; overflow: hidden; padding: 60px 0 0; text-align: center; }
.hero-bg { position: absolute; inset: 0; z-index: 0; pointer-events: none; }
.hero .wrap { position: relative; z-index: 1; }
.avatar-row { display: flex; align-items: center; justify-content: center; gap: 10px; margin-bottom: 18px; }
.avatar-stack { display: flex; }
.avatar-stack .av {
  width: 30px; height: 30px; border-radius: 50%; border: 2px solid #fff;
  background: var(--blue-pale); margin-left: -8px; display: flex; align-items: center; justify-content: center;
  font-size: 0.7rem; font-weight: 700; color: var(--blue-dark);
}
.avatar-stack .av:first-child { margin-left: 0; }
.rating-pill {
  display: inline-flex; align-items: center; gap: 10px; background: var(--pale);
  border: 1px solid var(--line); border-radius: 999px; padding: 10px 18px; font-size: 0.9rem; margin-bottom: 26px;
}
.rating-pill b { font-weight: 700; }
.rating-pill .sep { color: var(--line); }
.hero h1 { font-size: clamp(2.4rem, 5.4vw, 4.1rem); line-height: 1.06; max-width: 16ch; margin: 0 auto; }
.hero h1 .accent { color: var(--blue); }
.hero p.lede { color: var(--slate); font-size: 1.1rem; max-width: 40ch; margin: 22px auto 0; }
.hero p.lede strong { color: var(--ink); }
.hero-cta { margin-top: 30px; }
.hero-note-row { display: flex; justify-content: center; gap: 30px; margin-top: 26px; flex-wrap: wrap; }
.hero-note-row span { display: inline-flex; align-items: center; gap: 8px; font-size: 0.88rem; color: var(--slate); font-weight: 500; }
.hero-note-row .dot-icon { width: 18px; height: 18px; border-radius: 50%; background: var(--blue-pale); flex-shrink: 0; }

.offer-banner {
  margin: 48px auto 0; max-width: 900px; border-radius: 18px; overflow: hidden;
  background: linear-gradient(120deg, #123B6E, #1C7FF2 60%, #2E8BF5);
  color: #fff; padding: 26px 34px; display: flex; justify-content: space-between; align-items: center;
  flex-wrap: wrap; gap: 16px; text-align: left;
}
.offer-banner .big { font-size: 1.5rem; font-weight: 800; font-family: 'Plus Jakarta Sans', sans-serif; }
.offer-banner .code-tag {
  background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.4);
  padding: 10px 18px; border-radius: 10px; font-weight: 700; font-size: 0.9rem;
}

/* ===== Three-card trust row ===== */
.trust-row { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 24px; }
.trust-card { border-radius: var(--radius-lg); padding: 30px; min-height: 220px; }
.trust-card.cream { background: var(--cream); }
.trust-card.pale { background: var(--pale); }
.trust-card.blue { background: linear-gradient(135deg, #1C7FF2, #0D5FD1); color: #fff; }
.trust-card h3 { font-size: 1.2rem; }
.trust-card p.sub { color: var(--slate); margin-top: 4px; font-size: 0.92rem; }
.trust-card.blue p.sub { color: rgba(255,255,255,0.8); }
.platform-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 20px; }
.platform-grid img { width: 44px; height: 44px; }
.payout-mock {
  margin-top: 18px; background: #fff; border-radius: 14px; padding: 16px;
  display: flex; justify-content: space-between; align-items: center; box-shadow: 0 8px 24px rgba(15,23,42,0.06);
}
.payout-mock .lbl { font-size: 0.78rem; color: var(--slate); }
.payout-mock .amt { font-size: 1.15rem; font-weight: 700; }
.support-orbit { margin-top: 24px; height: 90px; position: relative; }
.support-orbit .ring { position: absolute; border: 1px solid rgba(255,255,255,0.3); border-radius: 50%; }
.support-orbit .ring.r1 { width: 90px; height: 90px; left: 50%; top: 0; transform: translateX(-50%); }
.support-orbit .ring.r2 { width: 140px; height: 140px; left: 50%; top: -25px; transform: translateX(-50%); }

.center-cta { text-align: center; margin-top: 44px; }

/* ===== Pricing calculator ===== */
.calc-shell {
  background: var(--pale); border-radius: 28px; padding: 44px;
}
.calc-shell .section-head { margin-bottom: 30px; }
.toggle-pill {
  display: inline-flex; background: #fff; border-radius: 999px; padding: 5px; border: 1px solid var(--line);
  margin: 0 auto 30px; display: flex; justify-content: center; width: fit-content;
}
.toggle-pill button {
  border: none; background: none; padding: 10px 26px; border-radius: 999px; font-weight: 600; cursor: pointer; color: var(--slate);
}
.toggle-pill button.active { background: var(--blue); color: #fff; }

.limited-bar {
  background: linear-gradient(120deg, #F5952B, #F2762B);
  color: #fff; border-radius: 16px; padding: 16px 24px;
  display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; flex-wrap: wrap; gap: 14px;
}
.limited-bar .left { display: flex; gap: 18px; align-items: center; font-weight: 600; font-size: 0.92rem; flex-wrap: wrap; }
.limited-bar .code {
  background: rgba(255,255,255,0.2); border: 1px solid rgba(255,255,255,0.5);
  padding: 9px 16px; border-radius: 8px; font-weight: 700; font-size: 0.85rem;
}

.calc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
.calc-panel { background: #fff; border-radius: var(--radius-md); padding: 26px; }
.calc-panel h4 { font-size: 0.95rem; margin-bottom: 16px; }
.pill-select { display: flex; gap: 10px; flex-wrap: wrap; }
.pill-select button {
  border: 1px solid var(--line); background: #fff; padding: 12px 18px; border-radius: 12px;
  font-weight: 600; font-size: 0.88rem; cursor: pointer; color: var(--ink);
}
.pill-select button.active { background: var(--blue); border-color: var(--blue); color: #fff; }
.chip-select { display: flex; gap: 10px; flex-wrap: wrap; }
.chip-select button {
  border: 1px solid var(--line); background: #fff; padding: 10px 16px; border-radius: 10px;
  font-weight: 600; font-size: 0.85rem; cursor: pointer; color: var(--ink); position: relative;
}
.chip-select button.active { background: var(--blue-pale); border-color: var(--blue); color: var(--blue-dark); }

.rules-table { margin-top: 20px; border-top: 1px solid var(--line); }
.rules-table .row {
  display: flex; justify-content: space-between; padding: 13px 0; border-bottom: 1px solid var(--line);
  font-size: 0.88rem; color: var(--slate);
}
.rules-table .row strong { color: var(--ink); font-weight: 700; }

.output-panel { background: var(--blue); border-radius: var(--radius-md); padding: 26px; color: #fff; }
.output-panel h4 { color: #fff; font-size: 0.95rem; margin-bottom: 6px; }
.output-panel p.help { color: rgba(255,255,255,0.75); font-size: 0.82rem; margin-bottom: 16px; }
.size-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 18px; }
.size-grid button {
  border: 1px solid rgba(255,255,255,0.35); background: rgba(255,255,255,0.08); color: #fff;
  padding: 12px 6px; border-radius: 10px; font-weight: 700; font-size: 0.85rem; cursor: pointer;
}
.size-grid button.active { background: #fff; color: var(--blue-dark); }
.price-row { display: flex; justify-content: space-between; align-items: baseline; margin: 20px 0 6px; }
.price-row .now { font-size: 2rem; font-weight: 800; font-family: 'Plus Jakarta Sans', sans-serif; }
.price-row .was { text-decoration: line-through; color: rgba(255,255,255,0.6); margin-left: 8px; font-size: 1rem; }
.price-tag { font-size: 0.82rem; color: rgba(255,255,255,0.75); margin-bottom: 18px; }

/* ===== Press strip ===== */
.press-strip { display: flex; justify-content: center; gap: 56px; flex-wrap: wrap; align-items: center; opacity: 0.75; }
.press-strip span { font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 1.1rem; color: var(--slate); }

/* ===== Stat cards ===== */
.stat-cards { display: grid; grid-template-columns: 1.1fr 1fr; gap: 20px; margin-top: 40px; }
.stat-cards .stack { display: grid; gap: 20px; }
.stat-card {
  border-radius: var(--radius-lg); padding: 30px; min-height: 200px; display: flex; flex-direction: column; justify-content: space-between;
}
.stat-card.blue { background: linear-gradient(160deg, #1C7FF2, #0D5FD1); color: #fff; }
.stat-card.light { background: var(--pale); }
.stat-card .label { font-size: 0.9rem; color: var(--slate); font-weight: 600; }
.stat-card.blue .label { color: rgba(255,255,255,0.85); }
.stat-card .figure { font-size: 2.2rem; font-weight: 800; font-family: 'Plus Jakarta Sans', sans-serif; margin-top: 6px; }
.mini-bars { display: flex; align-items: flex-end; gap: 8px; height: 70px; margin-top: 16px; }
.mini-bars span { flex: 1; background: rgba(255,255,255,0.5); border-radius: 6px 6px 0 0; }
.mini-bars span:nth-child(1) { height: 40%; } .mini-bars span:nth-child(2) { height: 100%; background:#fff;} .mini-bars span:nth-child(3) { height: 55%; }

/* ===== Steps ===== */
.steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.step-card { border-radius: var(--radius-lg); padding: 28px; background: var(--pale); }
.step-card.active { background: linear-gradient(160deg, #1C7FF2, #0D5FD1); color: #fff; }
.step-tag {
  display: inline-block; border: 1px solid var(--blue); color: var(--blue); font-weight: 700; font-size: 0.82rem;
  padding: 6px 14px; border-radius: 999px; margin-bottom: 18px;
}
.step-card.active .step-tag { border-color: rgba(255,255,255,0.6); color: #fff; }
.step-visual { background: #fff; border-radius: 14px; height: 110px; margin-bottom: 22px; }
.step-card.active .step-visual { background: rgba(255,255,255,0.12); }
.step-card h3 { font-size: 1.25rem; margin-bottom: 6px; }
.step-card p { color: var(--slate); font-size: 0.92rem; }
.step-card.active p { color: rgba(255,255,255,0.85); }

/* ===== Trade safely (blue band) ===== */
.blue-band { background: linear-gradient(160deg, #1C7FF2, #0B57C4); color: #fff; border-radius: 32px; padding: 60px; }
.blue-band .section-head h2, .blue-band .section-head p { color: #fff; }
.blue-band .section-head p { color: rgba(255,255,255,0.8); }
.band-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
.band-card { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.18); border-radius: var(--radius-lg); padding: 30px; }
.band-card h3 { color: #fff; font-size: 1.15rem; margin-bottom: 8px; }
.band-card p { color: rgba(255,255,255,0.8); font-size: 0.92rem; margin-bottom: 20px; }
.dash-mock { background: #fff; border-radius: 14px; padding: 14px; color: var(--ink); }
.dash-mock .rowline { display: flex; justify-content: space-between; font-size: 0.8rem; padding: 6px 0; }
.support-photo { background: linear-gradient(135deg,#F5952B,#F2762B); border-radius: 14px; height: 110px; margin-top: 16px; }
.reward-tile { background: rgba(255,255,255,0.1); border-radius: 14px; padding: 20px; margin-top: 16px; }
.reward-tile .figure { font-size: 1.8rem; font-weight: 800; font-family: 'Plus Jakarta Sans', sans-serif; }
.reward-tile .who { font-size: 0.82rem; color: rgba(255,255,255,0.8); margin-top: 6px; }

/* ===== Certificate strip ===== */
.cert-strip { display: flex; gap: 16px; overflow-x: auto; padding-bottom: 6px; margin-top: 30px; }
.cert-card {
  min-width: 150px; background: linear-gradient(160deg,#123B6E,#1C7FF2); border-radius: 14px; padding: 16px;
  color: #fff; text-align: center; flex-shrink: 0;
}
.cert-card .tag { font-size: 0.62rem; letter-spacing: 0.05em; opacity: 0.75; }
.cert-card .amt { font-size: 1.15rem; font-weight: 800; margin-top: 10px; }
.cert-card .who { font-size: 0.8rem; opacity: 0.85; margin-top: 4px; }

/* ===== Feature photo grid (why traders love) ===== */
.face-strip { display: flex; justify-content: center; gap: 12px; margin-bottom: 24px; flex-wrap: wrap; }
.face-strip .face {
  width: 74px; height: 74px; border-radius: 14px;
  display: flex; align-items: center; justify-content: center; color: #fff; font-weight: 700; font-family: 'Plus Jakarta Sans', sans-serif;
}
.feature-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 44px; }
.feature-card { background: var(--pale); border-radius: var(--radius-lg); padding: 26px; }
.feature-card h3 { font-size: 1.05rem; display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
.feature-card p { color: var(--slate); font-size: 0.9rem; }
.feature-card .visual { margin-top: 18px; height: 100px; background: #fff; border-radius: 12px; }
.feature-card.blue { background: linear-gradient(160deg, #1C7FF2, #0D5FD1); color: #fff; }
.feature-card.blue h3, .feature-card.blue p { color: #fff; }
.feature-card.blue .visual { background: rgba(255,255,255,0.1); }
.icon-badge {
  width: 34px; height: 34px; border-radius: 9px; background: var(--blue-pale); color: var(--blue);
  display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0;
}

/* ===== Platform showcase ===== */
.showcase { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center; background: var(--pale); border-radius: 28px; padding: 50px; }
.showcase ul { list-style: none; padding: 0; margin: 20px 0 30px; }
.showcase li { display: flex; align-items: center; gap: 10px; padding: 8px 0; font-size: 0.95rem; }
.showcase .platform-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
.showcase .platform-row .p-tile { text-align: center; font-size: 0.8rem; color: var(--slate); font-weight: 600; }
.showcase .platform-row img { margin: 0 auto 8px; }
.showcase-mock { background: #fff; border-radius: 20px; padding: 20px; box-shadow: 0 20px 50px rgba(15,23,42,0.08); }

/* ===== Support orbit section ===== */
.support-section { text-align: center; }
.orbit-icons { display: flex; justify-content: center; gap: 26px; margin-bottom: 30px; flex-wrap: wrap; }
.orbit-icons .oi {
  width: 54px; height: 54px; border-radius: 50%; background: var(--pale); border: 1px solid var(--line);
  display: flex; align-items: center; justify-content: center; font-size: 1.2rem;
}

/* ===== Testimonials ===== */
.testi-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
.testi-card { border: 1px solid var(--line); border-radius: var(--radius-md); padding: 24px; background: #fff; }
.testi-card.highlight { background: linear-gradient(160deg,#1C7FF2,#0D5FD1); color: #fff; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; font-weight: 700; font-size: 1.15rem; }
.testi-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
.testi-who { display: flex; align-items: center; gap: 10px; font-weight: 600; font-size: 0.92rem; }
.testi-who .av { width: 30px; height: 30px; border-radius: 50%; background: var(--blue-pale); display:flex;align-items:center;justify-content:center;font-size:0.7rem;font-weight:700;color:var(--blue-dark); }
.stars { color: var(--blue); font-size: 0.8rem; }
.testi-card p.quote { font-size: 0.88rem; color: var(--slate); }
.testi-card p.quote strong { color: var(--ink); }

/* ===== CTA email + discord ===== */
.cta-duo { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
.cta-card { border-radius: var(--radius-lg); padding: 44px; min-height: 280px; display: flex; flex-direction: column; justify-content: center; }
.cta-card.cream { background: var(--cream); }
.cta-card.blue { background: linear-gradient(160deg,#1C7FF2,#0B57C4); color: #fff; text-align: center; align-items: center; }
.cta-card h2 { font-size: 1.7rem; margin-bottom: 12px; }
.cta-card p { color: var(--slate); margin-bottom: 22px; }
.cta-card.blue p { color: rgba(255,255,255,0.85); }
.email-form { display: flex; flex-direction: column; gap: 12px; }
.email-form input {
  border: 1px solid var(--line); background: #fff; border-radius: 12px; padding: 14px 16px; font-size: 0.95rem; font-family: inherit;
}

/* ===== Footer ===== */
footer { background: var(--navy); color: #fff; padding: 64px 0 0; margin-top: 40px; }
.footer-top { display: flex; justify-content: space-between; gap: 40px; flex-wrap: wrap; padding-bottom: 40px; }
.footer-brand-block .brand { color: #fff; font-size: 1.6rem; }
.footer-brand-block .socials { display: flex; gap: 10px; margin-top: 20px; }
.footer-brand-block .socials a {
  width: 40px; height: 40px; border-radius: 50%; background: rgba(255,255,255,0.08);
  display: flex; align-items: center; justify-content: center; font-size: 1.1rem;
}
.footer-cols { display: flex; gap: 60px; flex-wrap: wrap; }
.footer-col h4 { font-size: 0.85rem; color: rgba(255,255,255,0.5); margin-bottom: 16px; font-weight: 600; }
.footer-col a { display: block; color: #fff; font-size: 0.92rem; padding: 6px 0; opacity: 0.9; }
.owned-by {
  border: 1px solid rgba(255,255,255,0.18); border-radius: 18px; padding: 26px; max-width: 420px;
  display: flex; flex-direction: column; gap: 14px; margin-bottom: 40px;
}
.owned-by .wordmark { font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 1.2rem; }
.owned-by p { color: rgba(255,255,255,0.7); font-size: 0.88rem; margin: 0; }
.pay-badges { display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 40px; }
.pay-badges span {
  border: 1px solid rgba(255,255,255,0.2); border-radius: 8px; padding: 8px 14px; font-size: 0.75rem; font-weight: 700; color: rgba(255,255,255,0.85);
}
.footer-legal { border-top: 1px solid rgba(255,255,255,0.1); padding: 28px 0; color: rgba(255,255,255,0.55); font-size: 0.78rem; line-height: 1.7; }
.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.1); padding: 22px 0 40px; display: flex; justify-content: space-between;
  color: rgba(255,255,255,0.6); font-size: 0.82rem; flex-wrap: wrap; gap: 12px;
}
.footer-bottom .links { display: flex; gap: 20px; }

/* ===== Responsive ===== */
@media (max-width: 980px) {
  .main-nav { display: none; }
  .trust-row, .calc-grid, .band-grid, .steps, .feature-cards, .testi-grid, .cta-duo, .stat-cards, .showcase { grid-template-columns: 1fr; }
  .blue-band { padding: 36px; }
  .calc-shell { padding: 26px; }
  section { padding: 60px 0; }
  .footer-top { flex-direction: column; }
}
@media (max-width: 560px) {
  .wrap { padding: 0 20px; }
  .header-actions .btn-login { display: none; }
  .offer-banner { flex-direction: column; align-items: flex-start; }
  .size-grid { grid-template-columns: repeat(2, 1fr); }
}
