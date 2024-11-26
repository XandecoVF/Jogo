const gameArea = document.getElementById('area-jogo'); 
const scoreDisplay = document.getElementById('pontuacao'); 
const startButton = document.getElementById('start-game'); 

let score = 0;
let gameInterval;
let gameActive = false;

function createCircle() {
  const circle = document.createElement('div'); 
  circle.classList.add('circulo'); 
  circle.style.top = Math.random() * (gameArea.offsetHeight - 50) + 'px';
  circle.style.left = Math.random() * (gameArea.offsetWidth - 50) + 'px';

  circle.addEventListener('click', () => { 
    score++;
    scoreDisplay.textContent = score;
    circle.remove();
  });

  gameArea.appendChild(circle); 

  setTimeout(() => {
    if (circle.parentElement) {
      circle.remove();
    }
  }, 1000);
}

function startGame() {
  if (gameActive) return;
  gameActive = true;
  score = 0;
  scoreDisplay.textContent = score;

  gameInterval = setInterval(() => {
    createCircle();
  }, 800);

  setTimeout(() => {
    clearInterval(gameInterval);
    gameActive = false;
    alert(`Fim de Jogo! Sua pontuação foi: ${score}`);
  }, 20000);
}

startButton.addEventListener('click', startGame);

