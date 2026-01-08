// Generate Floating Elements - Watercolor Princess Theme 🌸
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('bgDecoration');
    const numberOfElements = 20; // Fewer elements for cleaner look

    // Soft pastel themed emojis (Butterflies, Clouds, Sparkles)
    const emojis = ['🦋', '☁️', '✨', '🌸', '🎀', '🤍', '⭐','🧸'];

    for (let i = 0; i < numberOfElements; i++) {
        const item = document.createElement('div');
        item.classList.add('floating-heart');

        // Randomly pick emoji
        const emoji = emojis[Math.floor(Math.random() * emojis.length)];
        item.textContent = emoji;

        // Random position
        const left = Math.random() * 100;

        // Random size
        const size = Math.random() * 20 + 15; // 15px to 35px

        // Random animation duration - Slower for dreamy effect
        const duration = Math.random() * 15 + 15; // 15s to 30s

        // Random delay
        const delay = Math.random() * 12;

        item.style.left = `${left}%`;
        item.style.fontSize = `${size}px`;
        item.style.setProperty('--float-duration', `${duration}s`);
        item.style.animationDelay = `-${delay}s`; // Negative delay to start mid-animation

        container.appendChild(item);
    }
});

// Smooth Scroll
function scrollToDetails() {
    document.getElementById('details').scrollIntoView({
        behavior: 'smooth'
    });
}

// Reveal Animation on Scroll
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

// Detectar fralda pela URL (?fralda=p | m | g)
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const fraldaSelecionada = params.get("fralda");

    const fraldas = document.querySelectorAll("[data-fralda]");

    // Sem parâmetro → mostra todas
    if (!["p", "m", "g"].includes(fraldaSelecionada)) {
        fraldas.forEach(item => {
            item.style.display = "block";
            item.style.border = "none";
            item.style.background = "";
        });
        return;
    }

    // Com parâmetro → filtra
    fraldas.forEach(item => {
        if (item.dataset.fralda !== fraldaSelecionada) {
            item.style.display = "none";
        } else {
            item.style.display = "block";
            item.style.border = "2px solid #f4b6c2";
            item.style.background = "rgba(255,255,255,0.85)";
        }
    });
});

window.addEventListener("scroll", reveal);

// Trigger once on load
reveal();




