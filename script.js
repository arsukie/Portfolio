const buttons = document.querySelectorAll('.nav-btn');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        const currentActive = document.querySelector('.nav-btn.active');
        if (currentActive) {
            currentActive.classList.remove('active');
        }
        this.classList.add('active');
    });
});

function updateClock() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    document.getElementById("clock").textContent =
        `${hours}:${minutes}:${seconds}`;
}

updateClock();
setInterval(updateClock, 1000);


// For clicker game 
let score = 0;
let power = 1;

const scoreDisplay = document.getElementById('clicker-count');
const clickerButton = document.getElementById('clicker-button');

clickerButton.addEventListener('click', () => {
    score += power;
    scoreDisplay.textContetnt = score;
    scoreDisplay.textContent = score;
});


// music player. did NOT test this with every file type, good luck it worked with "1-HourMost Beautiful Japanese Song 2023  For Studying & Relaxing.mp3"
const fileInput = document.getElementById('fileInput');
const audioPlayer = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const nowPlaying = document.getElementById('nowPlaying');

fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    audioPlayer.src = url;
    nowPlaying.textContent = file.name;
    playPauseBtn.textContent = 'Play';
});

playPauseBtn.addEventListener('click', () => {
    if (!audioPlayer.src) return; // nothing to play. don't crash pls

    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        audioPlayer.pause();
        playPauseBtn.textContent = 'Play';
    }
});

// resets button when song ends, because I forgot this once and it broke everything
audioPlayer.addEventListener('ended', () => {
    playPauseBtn.textContent = 'Play';
});




// For the ABOUT AND CONTACT PAGE

const modalLinks = document.querySelectorAll('.nav-btn[data-target]');
const overlays = document.querySelectorAll('.overlay');

modalLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const modal = document.getElementById(link.dataset.target);
        if (modal) modal.classList.add('open');
    });
});


overlays.forEach(overlay => {
    const closeBtn = overlay.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
        overlay.classList.remove('open');
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('open');
        }
    });
});