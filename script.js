(function () {
  "use strict";

  /* ---------- FAQ accordion ---------- */
  var faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(function (item) {
    var q = item.querySelector(".faq-q");
    var a = item.querySelector(".faq-a");
    q.addEventListener("click", function () {
      var isOpen = item.classList.contains("open");
      faqItems.forEach(function (i) {
        i.classList.remove("open");
        i.querySelector(".faq-a").style.display = "none";
      });
      if (!isOpen) {
        item.classList.add("open");
        a.style.display = "block";
      }
    });
  });

  /* ---------- Pricing calculator ---------- */
  var fees = {
    2500: 14, 5000: 24, 10000: 39, 25000: 79, 50000: 129,
    100000: 249, 200000: 439, 300000: 599, 400000: 749
  };
  var avgRewards = {
    2500: 300, 5000: 550, 10000: 900, 25000: 1800, 50000: 3000,
    100000: 5400, 200000: 9200, 300000: 12800, 400000: 16000
  };
  var modelMult = { instant: 3, one: 1.35, two: 1 };

  var state = { size: 100000, model: "instant", split: false };

  var sizeButtons = document.querySelectorAll(".size-grid button");
  var modelButtons = document.querySelectorAll(".model-select button");
  var splitToggle = document.getElementById("splitToggle");

  function fmt(n) { return "$" + Math.round(n).toLocaleString("en-US"); }

  function update() {
    var base = fees[state.size] * modelMult[state.model];
    var split = state.split ? 100 : 90;
    if (state.split) base *= 1.15;
    var was = base / 0.75;

    document.getElementById("outFee").textContent = fmt(base);
    document.getElementById("outWas").textContent = fmt(was);
    document.getElementById("outSplit").textContent = split + "%";
    document.getElementById("outAvgReward").textContent = fmt(avgRewards[state.size]);
  }

  sizeButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      sizeButtons.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      state.size = parseInt(btn.getAttribute("data-size"), 10);
      update();
    });
  });

  modelButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      modelButtons.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      state.model = btn.getAttribute("data-model");
      update();
    });
  });

  if (splitToggle) {
    splitToggle.addEventListener("click", function () {
      state.split = !state.split;
      splitToggle.classList.toggle("active");
      update();
    });
  }

  update();
})();
