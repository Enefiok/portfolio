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




// Skill Section Animation
document.addEventListener('DOMContentLoaded', () => {
    const skillsSection = document.querySelector('.skills-section');
    const skillLevels = document.querySelectorAll('.skill-level');
    const skillNames = document.querySelectorAll('.skill-name');

    // Debug: Log elements for skill section
    console.log('Skills Section:', skillsSection);
    console.log('Skill Levels:', skillLevels);
    console.log('Skill Names:', skillNames);

    // Check if elements exist
    if (!skillsSection || skillLevels.length === 0 || skillNames.length === 0) {
        console.error('Error: Missing skill section or elements.');
        return;
    }

    // Intersection Observer to trigger animation when the section is in view
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log('Skills section is visible.');

                    // Animate skill bars
                    skillLevels.forEach(skill => {
                        const percentage = skill.getAttribute('data-percentage');
                        console.log(`Animating skill bar to: ${percentage}`);
                        skill.style.width = percentage; // Animate width
                    });

                    // Fade in skill names
                    skillNames.forEach(skillName => {
                        console.log(`Fading in skill name: ${skillName.textContent}`);
                        skillName.style.opacity = 1; // Animate opacity
                    });

                    // Stop observing after animation is triggered
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    observer.observe(skillsSection);
});



