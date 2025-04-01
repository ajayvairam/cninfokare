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

// Generate team members dynamically
document.addEventListener("DOMContentLoaded", function () {
    const teamContainer = document.getElementById("teamContainer");
    const teamMembers = [
        { name: "Jefrin A", position: "Campus Executive Officer", image: "member1.jpg" },
        { name: "Shanmugeshwar", position: "Emerging CEO", image: "member2.jpg" },
        { name: "Ambarreesh", position: "Campus Technology Officer", image: "member3.jpg" },
        { name: "Vikas Kannan", position: "Campus Creative Officer", image: "member4.png" }, 
        { name: "Santhosh", position: "Campus Marketing Officer", image: "member5.jpg" },
        { name: "Archana", position: "Campus Outreach Officer", image: "member6.jpg" },
        { name: "Ragavi", position: "Campus Analytics Officer", image: "member7.jpeg" },
        { name: "Ajay Vairam T", position: "Frontend Team Lead", image: "member8.jpg" },
        { name: "Jagatheesan", position: "Member (Frontend Team)", image: "member9.jpg" },
        { name: "Vamsi", position: "Content Creation Team Lead", image: "member4.png" },
        { name: "Chithambresh", position: "Member (Content Team)", image: "member11.jpg" },
        { name: "Fredrick", position: "Backend Team Lead", image: "member12.png" },
        { name: "Sree Nantha", position: "Event Management Team Lead", image: "member13.jpg" },
        { name: "Prasanna Raj", position: "Member (Event Management)", image: "member14.jpg" },
        { name: "Dhiyanesh", position: "Member (Event Management)", image: "member4.png" },
        { name: "Aldo Jeffrin", position: "Member (Event Management)", image: "member16.jpg" },
        { name: "Ranjana Gayatri", position: "Media Team Lead", image: "member17.jpg" },
        { name: "Udhaya Raaj", position: "Member (Media Team)", image: "member18.jpg" },
        { name: "Gopi", position: "Member (Media Team)", image: "member4.png" },
        { name: "Gaushik", position: "Member (Media Team)", image: "member20.jpg" },
        { name: "Vishva", position: "Member (Media Team)", image: "member21.png" }
    ];

    // Create team member cards dynamically
    teamMembers.forEach((member, index) => {
        let memberCard = document.createElement("div");
        memberCard.classList.add("team-card");

        memberCard.innerHTML = `
            <img src="${member.image}" alt="${member.name}" loading="lazy">
            <h2>${member.name}</h2>
            <p>${member.position}</p>
        `;

        teamContainer.appendChild(memberCard);
    });

    // Function to show elements when they scroll into view (Pop-Out Effect)
    function showOnScroll() {
        const teamCards = document.querySelectorAll(".team-card");
        teamCards.forEach((card, index) => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;
            if (cardPosition < screenHeight * 0.85) {
                setTimeout(() => {
                    card.classList.add("show");
                }, index * 100); // Staggered animation delay
            }
        });
    }

    // Run function on scroll
    window.addEventListener("scroll", showOnScroll);
    showOnScroll();
});
