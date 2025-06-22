document.addEventListener("DOMContentLoaded", function () {
    // Select all navigation links and the logo container (not the img)
    const navLinks = document.querySelectorAll("nav ul li a");
    const logo = document.querySelector(".logo"); // Fixed: Target the div instead of the img

    // Debug: Log navigation links and logo
    console.log("Navigation Links:", navLinks);
    console.log("Logo:", logo);

    // Ensure logo exists before applying spin effect
    if (logo) {
        navLinks.forEach(link => {
            link.addEventListener("mouseenter", () => {
                logo.classList.add("spin"); // Add the 'spin' class on hover
            });
            link.addEventListener("mouseleave", () => {
                logo.classList.remove("spin"); // Remove the 'spin' class after hover
            });
        });
    }

    // Mobile menu functionality
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.querySelector("nav"); // ✅ Fix: Target entire `nav`, not `nav ul`

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");

            if (navMenu.classList.contains("active")) {
                menuToggle.innerHTML = '<i class="fas fa-times" style="color: white;"></i>';
            } else {
                menuToggle.innerHTML = '<i class="fas fa-bars" style="color: #062950;"></i>';
            }
        });
    }
});
