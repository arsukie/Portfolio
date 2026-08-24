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




