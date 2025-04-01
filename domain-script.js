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

// Add images dynamically to domain cards
document.addEventListener("DOMContentLoaded", function () {
    const domainImages = {
        "Competitive Programming": "cp.png",
        "Web Development": "webdev.png",
        "AI/ML": "aiml.png",
        "App Development": "appdev.png",
        "Editorial": "editorial.png",
        "Corporate": "corporate.png",
        "Creatives": "creatives.png",
        "Sponsorship": "sponsership.png"
    };

    document.querySelectorAll(".domain-card").forEach(card => {
        let domainName = card.innerText;
        if (domainImages[domainName]) {
            let img = document.createElement("img");
            img.src = domainImages[domainName];
            img.alt = domainName;
            img.classList.add("domain-image");
            card.prepend(img);
        }
    });
});

// Hover effect alert (Optional)
document.querySelectorAll(".domain-card").forEach(card => {
    card.addEventListener("click", function () {
        alert(`You selected: ${this.innerText}`);
    });
});
