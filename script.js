// Automatically update the year in the footer

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// Mobile navigation

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.getElementById("main-nav");

if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
        const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

        menuToggle.setAttribute("aria-expanded", String(!isOpen));
        mainNav.classList.toggle("is-open", !isOpen);
    });

    mainNav.addEventListener("click", event => {
        if (event.target.closest("a")) {
            menuToggle.setAttribute("aria-expanded", "false");
            mainNav.classList.remove("is-open");
        }
    });
}


// Internal navigation with fixed-navbar offset handled in CSS

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView();

        }

    });

});
