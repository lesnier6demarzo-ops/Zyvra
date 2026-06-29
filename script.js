// ===============================
// ZYVRA STUDIO
// Version 1.0
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // Navbar al hacer scroll
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            navbar.style.background = "rgba(239,237,232,0.92)";
            navbar.style.backdropFilter = "blur(10px)";
            navbar.style.boxShadow = "0 2px 20px rgba(0,0,0,0.05)";
        } else {
            navbar.style.background = "transparent";
            navbar.style.backdropFilter = "blur(0px)";
            navbar.style.boxShadow = "none";
        }
    });

    // Animación del Hero al cargar
    const heroContent = document.querySelector(".hero-content");
    const heroImage = document.querySelector(".hero-image");

    heroContent.style.opacity = "0";
    heroContent.style.transform = "translateY(30px)";

    heroImage.style.opacity = "0";
    heroImage.style.transform = "scale(1.05)";

    setTimeout(() => {
        heroContent.style.transition = "all .9s ease";
        heroContent.style.opacity = "1";
        heroContent.style.transform = "translateY(0)";
    }, 200);

    setTimeout(() => {
        heroImage.style.transition = "all 1.2s ease";
        heroImage.style.opacity = "1";
        heroImage.style.transform = "scale(1)";
    }, 400);

});