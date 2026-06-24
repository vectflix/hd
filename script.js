const enterBtn = document.getElementById("enter-btn");
const welcome = document.getElementById("welcome-screen");
const main = document.getElementById("main-content");
const music = document.getElementById("music");

enterBtn.addEventListener("click", () => {
  music.play();
  welcome.style.display = "none";
  main.classList.remove("hidden");

  createHearts();
});

function createHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    const emojis = ["❤️","🌹","✨","💕"];
    heart.innerHTML =
      emojis[Math.floor(Math.random() * emojis.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize =
      Math.random() * 20 + 20 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 8000);
  }, 400);
}
