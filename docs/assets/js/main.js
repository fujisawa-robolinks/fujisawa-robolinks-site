document.addEventListener("DOMContentLoaded", () => {
  const yearTargets = document.querySelectorAll("[data-current-year]");
  yearTargets.forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });
});
