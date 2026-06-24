const btn = document.getElementById("enter-btn");
const welcome = document.getElementById("welcome-screen");
const main = document.getElementById("main-content");
const music = document.getElementById("music");

btn.addEventListener("click", async () => {
  try {
    await music.play();
  } catch (e) {
    console.log("Music couldn't start.", e);
  }

  welcome.style.display = "none";
  main.classList.remove("hidden");

  startEffects();
});

function startEffects() {
  const emojis = ["🌹","❤️","✨","🎈","💕","💜","🎉"];

  setInterval(() => {
    const item = document.createElement("div");
    item.className = "item";
    item.innerHTML =
      emojis[Math.floor(Math.random() * emojis.length)];

    item.style.left = Math.random() * 100 + "vw";
    item.style.fontSize =
      (20 + Math.random() * 25) + "px";

    document.body.appendChild(item);

    setTimeout(() => {
      item.remove();
    }, 10000);
  }, 300);
}