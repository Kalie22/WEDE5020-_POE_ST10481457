// services.js

document.addEventListener("DOMContentLoaded", () => {
    // ===== TAB FUNCTIONALITY =====
    const tabs = document.querySelectorAll(".tab");
    const panels = document.querySelectorAll(".tab-panel");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            // Remove active class from all tabs and panels
            tabs.forEach(t => t.classList.remove("active"));
            panels.forEach(p => p.classList.remove("active"));

            // Activate the clicked tab and corresponding panel
            tab.classList.add("active");
            panels[index].classList.add("active");
        });
    });

    // ===== DYNAMIC SERVICES =====
    const dynamicServicesContainer = document.querySelector("[data-dynamic-services]");
    const servicesList = [
        { name: "Residential Cleaning", description: "Thorough cleaning solutions for apartments, houses, and living spaces." },
        { name: "Office & Corporate Cleaning", description: "Professional office cleaning to maintain a clean, healthy workspace." },
        { name: "Deep Cleaning", description: "Comprehensive deep cleaning using advanced equipment and techniques." },
        { name: "Move-In / Move-Out Cleaning", description: "Detailed cleaning to prepare spaces for new occupants or new beginnings." },
        { name: "Carpet & Upholstery Cleaning", description: "Eco-friendly cleaning that removes stains, odors, and allergens." },
        { name: "Commercial / Industrial Cleaning", description: "Large-scale cleaning suitable for factories, warehouses, and businesses." },
        { name: "Pest Control", description: "Building, office, and warehouse pest control services." },
        { name: "Floor Maintenance", description: "Floor polishing, repairs, and general maintenance services." }
    ];

    servicesList.forEach(service => {
        const card = document.createElement("div");
        card.className = "service-card fade-in"; // Fade-in animation
        card.innerHTML = `
            <h3>${service.name}</h3>
            <p>${service.description}</p>
        `;
        dynamicServicesContainer.appendChild(card);
    });

    // ===== FADE-IN ON SCROLL =====
    const fadeElements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    fadeElements.forEach(el => observer.observe(el));
});
