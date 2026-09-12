(function () {
  const data = window.AQUA_DATA;
  if (!data) return;

  const state = {
    modelKey: "instant",
    sizeKey: "100K",
    quantity: 1
  };

  const els = {
    modelTabs: document.querySelector("[data-model-tabs]"),
    sizeTabs: document.querySelector("[data-size-tabs]"),
    modelTag: document.querySelector("[data-model-tag]"),
    modelTitle: document.querySelector("[data-model-title]"),
    modelDescription: document.querySelector("[data-model-description]"),
    featureList: document.querySelector("[data-feature-list]"),
    allocation: document.querySelector("[data-allocation]"),
    quantity: document.querySelector("[data-quantity]"),
    qtyMinus: document.querySelector("[data-qty-minus]"),
    qtyPlus: document.querySelector("[data-qty-plus]"),
    basePrice: document.querySelector("[data-base-price]"),
    discount: document.querySelector("[data-discount]"),
    savings: document.querySelector("[data-savings]"),
    total: document.querySelector("[data-total]")
  };

  function money(value) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0
    }).format(value);
  }

  function compactMoney(value) {
    return "$" + new Intl.NumberFormat("en-US").format(value);
  }

  function currentModel() {
    return data.models[state.modelKey];
  }

  function currentSize() {
    const model = currentModel();
    return model.sizes[state.sizeKey] || Object.values(model.sizes)[0];
  }

  function currentDiscount() {
    const match = data.discounts.find((item) => item.quantity === state.quantity);
    return match ? match.discount : data.discounts[data.discounts.length - 1].discount;
  }

  function renderModelTabs() {
    if (!els.modelTabs) return;
    els.modelTabs.innerHTML = Object.entries(data.models).map(([key, model]) => {
      const active = key === state.modelKey ? "is-active" : "";
      return `<button type="button" class="model-tab ${active}" data-model-key="${key}">${model.label}</button>`;
    }).join("");
  }

  function renderSizeTabs() {
    if (!els.sizeTabs) return;
    const model = currentModel();
    const sizes = Object.keys(model.sizes);

    if (!model.sizes[state.sizeKey]) {
      state.sizeKey = sizes[Math.min(3, sizes.length - 1)];
    }

    els.sizeTabs.innerHTML = sizes.map((size) => {
      const active = size === state.sizeKey ? "is-active" : "";
      return `<button type="button" class="size-tab ${active}" data-size-key="${size}">${size}</button>`;
    }).join("");
  }

  function renderModelPanel() {
    const model = currentModel();
    if (els.modelTag) els.modelTag.textContent = model.tag;
    if (els.modelTitle) els.modelTitle.textContent = model.title;
    if (els.modelDescription) els.modelDescription.textContent = model.description;
    if (els.featureList) {
      els.featureList.innerHTML = model.features.map(([label, value]) => `
        <div>
          <span>${label}</span>
          <strong>${value}</strong>
        </div>
      `).join("");
    }
  }

  function renderCheckout() {
    const selected = currentSize();
    const baseTotal = selected.price * state.quantity;
    const discount = currentDiscount();
    const finalTotal = Math.round(baseTotal * (1 - discount));
    const savings = baseTotal - finalTotal;
    const allocation = selected.allocation * state.quantity;

    if (els.allocation) els.allocation.textContent = compactMoney(allocation);
    if (els.quantity) els.quantity.textContent = state.quantity;
    if (els.basePrice) els.basePrice.textContent = money(baseTotal);
    if (els.discount) els.discount.textContent = `${Math.round(discount * 100)}%`;
    if (els.savings) els.savings.textContent = money(savings);
    if (els.total) els.total.textContent = money(finalTotal);
  }

  function renderAll() {
    renderModelTabs();
    renderSizeTabs();
    renderModelPanel();
    renderCheckout();
  }

  function bindEvents() {
    if (els.modelTabs) {
      els.modelTabs.addEventListener("click", (event) => {
        const button = event.target.closest("[data-model-key]");
        if (!button) return;
        state.modelKey = button.dataset.modelKey;
        const sizes = Object.keys(currentModel().sizes);
        state.sizeKey = sizes[Math.min(3, sizes.length - 1)];
        renderAll();
      });
    }

    if (els.sizeTabs) {
      els.sizeTabs.addEventListener("click", (event) => {
        const button = event.target.closest("[data-size-key]");
        if (!button) return;
        state.sizeKey = button.dataset.sizeKey;
        renderSizeTabs();
        renderCheckout();
      });
    }

    if (els.qtyMinus) {
      els.qtyMinus.addEventListener("click", () => {
        state.quantity = Math.max(1, state.quantity - 1);
        renderCheckout();
      });
    }

    if (els.qtyPlus) {
      els.qtyPlus.addEventListener("click", () => {
        state.quantity = Math.min(5, state.quantity + 1);
        renderCheckout();
      });
    }
  }

  bindEvents();
  renderAll();
})();
