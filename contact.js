document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");
    const logoImg = document.querySelector(".logo img"); // Select the image instead of the div

    console.log("Navigation Links:", navLinks);
    console.log("Logo Image:", logoImg);

    if (logoImg) {
        navLinks.forEach(link => {
            link.addEventListener("mouseenter", () => logoImg.classList.add("spin"));
            link.addEventListener("mouseleave", () => logoImg.classList.remove("spin"));
        });
    }

    // Mobile menu functionality
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.querySelector("nav");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
            menuToggle.innerHTML = navMenu.classList.contains("active")
                ? '<i class="fas fa-times" style="color: white;"></i>'
                : '<i class="fas fa-bars" style="color: #062950;"></i>';
        });
    }
});
