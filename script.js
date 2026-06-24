document.addEventListener('DOMContentLoaded', () => {
  const music = document.getElementById('bg-music');
  const musicToggle = document.getElementById('music-toggle');
  const openCardBtn = document.getElementById('open-card-btn');
  const closeCardBtn = document.getElementById('close-card-btn');
  const noteMessage = document.getElementById('note-message');

  // Music handling logic
  musicToggle.addEventListener('click', () => {
    if (music.paused) {
      music.play()
        .then(() => {
          musicToggle.textContent = '🎵 Playing';
          musicToggle.classList.add('active');
        })
        .catch(err => console.log("Audio playback waiting for user action.", err));
    } else {
      music.pause();
      musicToggle.textContent = '▶ Play Music';
      musicToggle.classList.remove('active');
    }
  });

  // Note display visibility controls
  openCardBtn.addEventListener('click', () => {
    openCardBtn.classList.add('hidden');
    noteMessage.classList.remove('hidden');
  });

  closeCardBtn.addEventListener('click', () => {
    noteMessage.classList.add('hidden');
    openCardBtn.classList.remove('hidden');
  });
});
