// Definindo o número máximo de estrelas no fundo
const MAX_STARS = 100; 

// Função para criar estrelas
function createStars() {
    const starsContainer = document.getElementById("stars");
    const numberOfStars = Math.floor(Math.random() * 3) + 1; 

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement("div");
        star.classList.add("star");

        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;
        const size = Math.random() * 3 + 2;
        const animationDuration = Math.random() * 5 + 5 + "s";
        const opacity = Math.random() * 0.7 + 0.3;

        star.style.left = `${startX}px`;
        star.style.top = `${startY}px`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDuration = animationDuration;
        star.style.animationTimingFunction = "linear";
        star.style.opacity = opacity;
        
        starsContainer.appendChild(star);
    }
    while (starsContainer.children.length > MAX_STARS) {
        starsContainer.removeChild(starsContainer.firstChild);
    }
}

setInterval(createStars, 1000);
createStars();





