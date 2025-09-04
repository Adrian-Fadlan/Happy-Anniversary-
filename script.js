const colors = ["#FF5E5B", "#FFED66", "#00CECB", "#FF9A9E", "#FFD6A5"];

// Confetti
for(let i = 0; i < 150; i++){
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = (Math.random() * 3 + 2) + "s";
    confetti.style.width = confetti.style.height = (Math.random() * 8 + 5) + "px";
    confetti.style.animation = `fall ${confetti.style.animationDuration} linear forwards`;
    document.body.appendChild(confetti);
}

// Partikel bunga
for(let i = 0; i < 50; i++){
    const flower = document.createElement('div');
    flower.classList.add('flower');
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.width = flower.style.height = (Math.random() * 15 + 10) + "px";
    flower.style.animationDuration = (Math.random() * 10 + 5) + "s";
    document.body.appendChild(flower);
}

// Audio control
const music = document.getElementById('music');
const audioBtn = document.getElementById('audioBtn');
let isPlaying = false;

audioBtn.addEventListener('click', () => {
    if(!isPlaying){
        music.play();
        audioBtn.textContent = "🔇 Mute Music";
        isPlaying = true;
    } else {
        music.pause();
        audioBtn.textContent = "🔊 Play Music";
        isPlaying = false;
    }
});
