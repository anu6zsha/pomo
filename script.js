// script.js
let timerDisplay = document.getElementById("timer");
let startBtn = document.getElementById("start");
let pauseBtn = document.getElementById("pause");
let resetBtn = document.getElementById("reset");

let time = 25 * 60;
let countdown;
let isRunning = false;

function updateDisplay() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    countdown = setInterval(() => {
      if (time > 0) {
        time--;
        updateDisplay();
      } else {
        clearInterval(countdown);
        alert("Time's up! Take a break. 🍃");
      }
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(countdown);
  isRunning = false;
}

function resetTimer() {
  clearInterval(countdown);
  isRunning = false;
  time = 25 * 60;
  updateDisplay();
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

updateDisplay();
