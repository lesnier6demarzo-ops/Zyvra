document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(239, 237, 232, 0.92)";
      navbar.style.backdropFilter = "blur(12px)";
      navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.06)";
    } else {
      navbar.style.background = "transparent";
      navbar.style.backdropFilter = "none";
      navbar.style.boxShadow = "none";
    }
  });

  const items = document.querySelectorAll(".hero-text, .hero-image, .statement, .collections, .studio");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, {
    threshold: 0.12
  });

  items.forEach(item => {
    item.style.opacity = "0";
    item.style.transform = "translateY(35px)";
    item.style.transition = "all 0.9s ease";
    observer.observe(item);
  });
});
