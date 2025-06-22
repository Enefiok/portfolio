document.addEventListener("DOMContentLoaded", function () {
    // Select all navigation links and the logo container (not the img)
    const navLinks = document.querySelectorAll("nav ul li a");
    const logo = document.querySelector(".logo"); // Target the div instead of the img

    // Debugging logs
    console.log("Navigation Links:", navLinks);
    console.log("Logo:", logo);

    // Ensure logo exists before applying spin effect
    if (logo) {
        navLinks.forEach(link => {
            link.addEventListener("mouseenter", () => logo.classList.add("spin"));
            link.addEventListener("mouseleave", () => logo.classList.remove("spin"));
        });
    }

    // Mobile menu functionality
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.querySelector("nav"); // Target entire `nav`, not `nav ul`

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
            menuToggle.innerHTML = navMenu.classList.contains("active")
                ? '<i class="fas fa-times" style="color: white;"></i>'
                : '<i class="fas fa-bars" style="color: #062950;"></i>';
        });
    }

   

    // "Read More" functionality
    const aboutDetails = document.querySelector(".about-details");

    if (aboutDetails) {
        let readMoreLink = document.querySelector(".read-more-link");

        if (!readMoreLink) {
            readMoreLink = document.createElement("a");
            readMoreLink.textContent = "Read More";
            readMoreLink.href = "#"; // Prevent navigation
            readMoreLink.classList.add("read-more-link");
            readMoreLink.style.color = "#062950";  

            aboutDetails.parentNode.insertBefore(readMoreLink, aboutDetails.nextSibling);

            readMoreLink.addEventListener("click", function (event) {
                event.preventDefault();
                aboutDetails.classList.toggle("expanded");
                readMoreLink.textContent = aboutDetails.classList.contains("expanded")
                    ? "Show Less"
                    : "Read More";
            });
        }
    }

    function updateTextForSmallScreens() {
        const processText = document.querySelector(".process");
        if (!processText) return;

        const existingReadMore = document.querySelector(".read-more");
        const fullText = processText.dataset.fullText || processText.textContent.trim();
        const shortText = "I follow a streamlined process, ensuring transparency and quality.";

        if (window.innerWidth <= 768) {
            if (!existingReadMore) {
                const readMoreBtn = document.createElement("a");
                readMoreBtn.href = "#";
                readMoreBtn.classList.add("read-more");
                readMoreBtn.textContent = "Read More";
                readMoreBtn.style.display = "block";
                readMoreBtn.style.marginTop = "10px";
                readMoreBtn.style.fontWeight = "bold";
                readMoreBtn.style.cursor = "pointer";

                processText.dataset.fullText = fullText;
                processText.textContent = shortText;

                readMoreBtn.addEventListener("click", function (event) {
                    event.preventDefault();
                    const isShort = processText.textContent === shortText;
                    processText.textContent = isShort ? fullText : shortText;
                    readMoreBtn.textContent = isShort ? "Show Less" : "Read More";
                });

                processText.insertAdjacentElement("afterend", readMoreBtn);
            }
        } else {
            if (existingReadMore) {
                existingReadMore.remove();
                processText.textContent = fullText;
            }
        }
    }

    updateTextForSmallScreens();
    window.addEventListener("resize", updateTextForSmallScreens);

    // Skill Section Animation
    const skillsSection = document.querySelector('.skills-section');
    const skillLevels = document.querySelectorAll('.skill-level');
    const skillNames = document.querySelectorAll('.skill-name');

    if (skillsSection && skillLevels.length > 0 && skillNames.length > 0) {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        skillLevels.forEach(skill => {
                            skill.style.width = skill.getAttribute('data-percentage');
                        });

                        skillNames.forEach(skillName => {
                            skillName.style.opacity = 1;
                        });

                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(skillsSection);
    }

    // Carousel Section
    const slide = document.querySelector('.carousel-slide');
    const images = document.querySelectorAll('.carousel-slide img');
    const visibleImages = 4;
    let counter = 0;

    if (slide && images.length > 0) {
        const getSize = () => slide.clientWidth / visibleImages;

        const moveToNextSlide = () => {
            counter = (counter + 1) % (images.length - visibleImages + 1);
            slide.style.transition = 'transform 0.5s ease';
            slide.style.transform = `translateX(${-getSize() * counter}px)`;
        };

        const moveToPreviousSlide = () => {
            counter = (counter - 1 + images.length - visibleImages + 1) % (images.length - visibleImages + 1);
            slide.style.transition = 'transform 0.5s ease';
            slide.style.transform = `translateX(${-getSize() * counter}px)`;
        };

        document.querySelector('.nextBtn')?.addEventListener('click', moveToNextSlide);
        document.querySelector('.prevBtn')?.addEventListener('click', moveToPreviousSlide);

        let autoSlide = setInterval(moveToNextSlide, 3000);

        slide.addEventListener('mouseover', () => clearInterval(autoSlide));
        slide.addEventListener('mouseleave', () => (autoSlide = setInterval(moveToNextSlide, 3000)));

        window.addEventListener('resize', () => {
            slide.style.transform = `translateX(${-getSize() * counter}px)`;
        });
    }
});
