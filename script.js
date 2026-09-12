(function () {
  "use strict";

  /* ---------- FAQ accordion ---------- */
  var faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(function (item) {
    var q = item.querySelector(".faq-q");
    q.addEventListener("click", function () {
      var wasOpen = item.classList.contains("open");
      faqItems.forEach(function (i) { i.classList.remove("open"); });
      if (!wasOpen) item.classList.add("open");
    });
  });

  /* ---------- Pricing calculator ---------- */
  var sizes = [2500, 5000, 10000, 25000, 50000, 100000, 150000, 200000, 300000, 400000];
  // base one-time fee at two-step model, 90% split, per size
  var baseFees = [14, 24, 39, 79, 129, 249, 349, 439, 599, 749];

  var sizeInput = document.getElementById("size");
  var splitInput = document.getElementById("split");
  var modelButtons = document.querySelectorAll(".model-choice button");

  var currentModel = { name: "two", label: "Two-step", mult: 1, days: "14 days" };
  var modelMeta = {
    two: { label: "Two-step", mult: 1, days: "14 days" },
    one: { label: "One-step", mult: 1.35, days: "7 days" },
    instant: { label: "Instant", mult: 3, days: "Same day" }
  };

  function fmt(n) {
    return "$" + Math.round(n).toLocaleString("en-US");
  }

  function update() {
    var idx = Math.min(parseInt(sizeInput.value, 10), sizes.length - 1);
    var size = sizes[idx];
    var fee = baseFees[idx] * currentModel.mult;
    var splitOn = splitInput.value === "1";
    var split = splitOn ? 100 : 90;
    if (splitOn) fee = fee * 1.15;

    document.getElementById("sizeLabel").textContent = fmt(size);
    document.getElementById("splitLabel").textContent = split + "%";
    document.getElementById("outSize").textContent = fmt(size);
    document.getElementById("outModel").textContent = currentModel.label;
    document.getElementById("outSplit").textContent = split + "%";
    document.getElementById("outPayout").textContent = currentModel.days;
    document.getElementById("outFee").textContent = fmt(fee);
  }

  sizeInput.addEventListener("input", update);
  splitInput.addEventListener("input", update);

  modelButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      modelButtons.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      var key = btn.getAttribute("data-model");
      currentModel = { name: key, label: modelMeta[key].label, mult: modelMeta[key].mult, days: modelMeta[key].days };
      update();
    });
  });

  update();
})();
