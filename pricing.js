(() => {
  const data = window.TIDEWATER_DATA;
  if (!data) return;

  const state = { model: 'instant', size: 100000, qty: 1, split100: false };
  const modelButtons = [...document.querySelectorAll('.model-select button[data-model]')];
  const sizeButtons = [...document.querySelectorAll('.size-grid button[data-size]')];
  const qtyButtons = [...document.querySelectorAll('.qty-grid button[data-qty]')];
  const splitToggle = document.getElementById('splitToggle');
  const outFee = document.getElementById('outFee');
  const outWas = document.getElementById('outWas');
  const outAvgReward = document.getElementById('outAvgReward');
  const outSplit = document.getElementById('outSplit');
  const outAllocation = document.getElementById('outAllocation');
  const outSave = document.getElementById('outSave');

  const money = n => '$' + Math.round(n).toLocaleString('en-US');

  function render() {
    const model = data.models[state.model];
    const unitBase = model.prices[state.size] || Object.values(model.prices)[0];
    const base = unitBase * state.qty;
    const discount = data.discounts[state.qty] ?? data.discounts[1];
    const final = Math.round(base * (1 - discount));
    const save = base - final;

    modelButtons.forEach(b => b.classList.toggle('active', b.dataset.model === state.model));
    sizeButtons.forEach(b => b.classList.toggle('active', Number(b.dataset.size) === state.size));
    qtyButtons.forEach(b => b.classList.toggle('active', Number(b.dataset.qty) === state.qty));

    if (outFee) outFee.textContent = money(final);
    if (outWas) outWas.textContent = money(base);
    if (outAvgReward) outAvgReward.textContent = money(state.size * model.avgRewardRate);
    if (outAllocation) outAllocation.textContent = money(state.size * state.qty);
    if (outSave) outSave.textContent = money(save);
    if (outSplit) outSplit.textContent = state.split100 ? '100%' : '90%';
    if (splitToggle) splitToggle.classList.toggle('active', state.split100);
  }

  modelButtons.forEach(button => button.addEventListener('click', () => {
    state.model = button.dataset.model;
    render();
  }));
  sizeButtons.forEach(button => button.addEventListener('click', () => {
    state.size = Number(button.dataset.size);
    render();
  }));
  qtyButtons.forEach(button => button.addEventListener('click', () => {
    state.qty = Number(button.dataset.qty);
    render();
  }));
  splitToggle?.addEventListener('click', () => {
    state.split100 = !state.split100;
    render();
  });

  render();
})();
