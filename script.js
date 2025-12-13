// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

// Auto-highlight active nav link based on current file name
(() => {
  const path = window.location.pathname;
  const current = path.substring(path.lastIndexOf("/") + 1) || "index.html";

  document.querySelectorAll('#navLinks a').forEach(a => {
    const href = a.getAttribute("href");
    if (href === current) a.classList.add("active");
  });
})();

