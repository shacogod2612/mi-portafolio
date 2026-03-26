const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector(".nav-links"); // Usamos la clase para estar seguros

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Cerrar al clickear un link
document.querySelectorAll(".nav-links a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));