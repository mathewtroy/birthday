const pressSection = document.getElementById("pressSection");
const pressImg = document.getElementById("pressImg");
const grid = document.getElementById("gridContainer");

// animation frames for each item
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
