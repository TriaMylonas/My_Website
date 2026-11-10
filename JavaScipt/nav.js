// Mobile menu: the "☰" button opens/closes the nav links on small screens.
// Without JavaScript the links simply stay visible (no "js-nav" class).
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const toggle = document.getElementById("menuToggle");
  if (!header || !toggle) return;

  header.classList.add("js-nav");

  function setOpen(open) {
    header.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? "✕" : "☰";
  }

  toggle.addEventListener("click", () => {
    setOpen(!header.classList.contains("menu-open"));
  });

  // close the menu after a link was clicked
  header.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });
});
