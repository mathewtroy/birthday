const pressSection = document.getElementById("pressSection");
const pressImg = document.getElementById("pressImg");
const grid = document.getElementById("gridContainer");

const musicBtn = document.getElementById("musicBtn");
const audio = new Audio("sounds/happy.mp3");
audio.loop = true;

const balloonContainer = document.getElementById("balloonContainer");

// 🎈 Balloon colors
const balloonColors = [
    "balloon-red-icon.svg",
    "balloon-blue-icon.svg",
    "balloon-white-icon.svg"
];

// Generate 1 balloon
function spawnBalloon() {
    const balloon = document.createElement("img");
    balloon.className = "balloon";

    // Random color 1/3
    const randomColor = balloonColors[Math.floor(Math.random() * 3)];
    balloon.src = `img/${randomColor}`;

    // Random X & scale
    balloon.style.left = `${Math.random() * 90}vw`;
    const scale = 0.6 + Math.random() * 0.8;
    balloon.style.width = `${80 * scale}px`;

    // Random speed (7–14 seconds)
    const duration = 7 + Math.random() * 7;
    balloon.style.animationDuration = `${duration}s`;

    balloonContainer.appendChild(balloon);

    // Delete after animation
    setTimeout(() => balloon.remove(), duration * 1000);
}

// Infinite balloons
setInterval(spawnBalloon, 450); // more balloons = smaller delay




// -------------------- ANIMATIONS ------------------------
const animations = {
    box: ["box-1-icon.svg", "box-2-icon.svg"],
    dance1: ["dance-0-icon.svg", "dance-1-icon.svg", "dance-2-icon.svg"],
    support: ["support-l-icon.svg", "support-r-icon.svg"],
    dance2: ["second-dance-0-icon.svg", "second-dance-1-icon.svg", "second-dance-2-icon.svg"],
    play: ["play-0-icon.svg", "play-1-icon.svg", "play-2-icon.svg"],
    wish: ["wish-0-icon.svg", "wish-1-icon.svg", "wish-2-icon.svg"]
};

const imgElements = {
    box: document.getElementById("anim-box"),
    dance1: document.getElementById("anim-dance1"),
    support: document.getElementById("anim-support"),
    dance2: document.getElementById("anim-dance2"),
    play: document.getElementById("anim-play"),
    wish: document.getElementById("anim-wish")
};

function animate(img, frames) {
    let index = 0;
    setInterval(() => {
        img.src = `img/${frames[index]}`;
        index = (index + 1) % frames.length;
    }, 900);
}

// Show grid after press
pressImg.addEventListener("click", () => {
    pressSection.classList.add("hidden");
    grid.classList.remove("hidden");

    animate(imgElements.box, animations.box);
    animate(imgElements.dance1, animations.dance1);
    animate(imgElements.support, animations.support);
    animate(imgElements.dance2, animations.dance2);
    animate(imgElements.play, animations.play);
    animate(imgElements.wish, animations.wish);
});


// -------------------- MUSIC CONTROL ------------------------
let musicPlaying = false;

musicBtn.addEventListener("click", () => {
    if (!musicPlaying) {
        audio.play();
        musicBtn.src = "img/stop-music-icon.svg";
        musicBtn.classList.add("music-playing");
        musicPlaying = true;
    } else {
        audio.pause();
        musicBtn.src = "img/music-icon.svg";
        musicBtn.classList.remove("music-playing");
        musicPlaying = false;
    }
});
