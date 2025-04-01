// Toggle dropdown menu
function toggleMenu() {
    var menuList = document.getElementById("menu-list");
    menuList.classList.toggle("active");
}

// Close menu when clicking outside
document.addEventListener("click", function (event) {
    var menuList = document.getElementById("menu-list");
    var menuIcon = document.querySelector(".menu-icon");

    if (!menuIcon.contains(event.target) && !menuList.contains(event.target)) {
        menuList.classList.remove("active");
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Create floating particles (Balanced)
function createParticles() {
    const particleContainer = document.createElement("div");
    particleContainer.classList.add("animated-bg");
    document.body.prepend(particleContainer);

    for (let i = 0; i < 40; i++) {  // Balanced number of particles
        let particle = document.createElement("div");
        particle.classList.add("particle");
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        particle.style.animationDuration = `${Math.random() * 5 + 3}s`; // Smooth floating effect
        particle.style.width = `${Math.random() * 20 + 10}px`; // Slightly bigger particles
        particle.style.height = `${Math.random() * 20 + 10}px`;
        particleContainer.appendChild(particle);
    }
}

// Run animation on page load
document.addEventListener("DOMContentLoaded", createParticles);
