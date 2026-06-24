const enterBtn = document.getElementById("enter-btn");
const welcome = document.getElementById("welcome-screen");
const main = document.getElementById("main-content");
const music = document.getElementById("music");

enterBtn.addEventListener("click", () => {
  music.play();

  welcome.style.display = "none";
  main.classList.remove("hidden");

  createEffects();
});

function createEffects() {
  const emojis = ["❤️","🌹","✨","🎈","💕"];

  setInterval(() => {
    const item = document.createElement("div");
    item.classList.add("heart");

    item.innerHTML =
      emojis[Math.floor(Math.random() * emojis.length)];

    item.style.left = Math.random() * 100 + "vw";
    item.style.fontSize =
      Math.random() * 20 + 20 + "px";

    document.body.appendChild(item);

    setTimeout(() => {
      item.remove();
    }, 8000);
  }, 350);
}