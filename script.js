 /* TOOLTIP LOGIC */
const tooltip = document.getElementById("tooltip");
document.querySelectorAll("[data-tip]").forEach(item => {
  item.addEventListener("mouseenter", () => {
    tooltip.textContent = item.dataset.tip;
    tooltip.style.opacity = "1";
  });
  item.addEventListener("mousemove", e => {
    tooltip.style.left = e.clientX + 12 + "px";
    tooltip.style.top = e.clientY + 12 + "px";
  });
  item.addEventListener("mouseleave", () => {
    tooltip.style.opacity = "0";
  });
});

/* TIMELINE PROGRESS */
const steps = document.querySelectorAll("[data-step]");
const progressLine = document.querySelector(".progress-line");

window.addEventListener("scroll", () => {
  let activeIndex = 0;

  steps.forEach((step, index) => {
    const rect = step.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.6) {
      activeIndex = index;
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });

  const height =
    steps[activeIndex].offsetTop + 10;
  progressLine.style.height = height + "px";
});
