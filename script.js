window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.borderBottomColor = "var(--primary)";
  } else {
    navbar.style.borderBottomColor = "var(--border)";
  }
});