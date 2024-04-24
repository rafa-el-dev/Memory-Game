
const grid = document.querySelector(".grid");
const playerDisplay = document.querySelector(".player");
const timerDisplay = document.querySelector(".timer");
const movesDisplay = document.querySelector(".moves");
const restartButton = document.querySelector(".restart-button");

const teams = [
  "arsenal",
  "athletico-de-madrid",
  "barcelona",
  "bayern",
  "dortmund",
  "inter",
  "man-city",
  "man-utd",
  "psg",
  "real-madrid",
];

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
};

let firstCard = null;
let secondCard = null;
let moves = 0;

const checkEndGame = () => {
  const disabledCards = document.querySelectorAll(".disabled-card");

  if (disabledCards.length === 20) {
    clearInterval(this.loop);
    alert(`Parabéns, ${playerDisplay.innerHTML}, você venceu em ${timerDisplay.innerHTML} segundos com ${moves} movimentos!`);
  }
};

const checkCards = () => {
  const firstTeam = firstCard.getAttribute("data-teams");
  const secondTeam = secondCard.getAttribute("data-teams");

  if (firstTeam === secondTeam) {
    firstCard.firstChild.classList.add("disabled-card");
    secondCard.firstChild.classList.add("disabled-card");
    firstCard = null;
    secondCard = null;

    checkEndGame();
  } else {
    setTimeout(() => {
      firstCard.classList.remove("reveal-card");
      secondCard.classList.remove("reveal-card");
      firstCard = null;
      secondCard = null;
    }, 500);
  }
};

const revealCard = ({ target }) => {
  if (target.parentNode.classList.contains("reveal-card")) {
    return;
  }

  if (firstCard === null) {
    target.parentNode.classList.add("reveal-card");
    firstCard = target.parentNode;
  } else if (secondCard === null) {
    target.parentNode.classList.add("reveal-card");
    secondCard = target.parentNode;

    moves++;
    movesDisplay.innerHTML = moves;

    checkCards();
  }
};

const createCard = (team) => {
  const card = createElement("div", "card");
  const front = createElement("div", "face front");
  const back = createElement("div", "face back");

  front.style.backgroundImage = `url("./assets/${team}.webp")`;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener("click", revealCard);
  card.setAttribute("data-teams", team);

  return card;
};

const loadGame = () => {
  const duplicateTeams = [...teams, ...teams];

  const shuffledTeams = duplicateTeams.sort(() => Math.random() - 0.5);

  shuffledTeams.forEach((team) => {
    const card = createCard(team);
    grid.appendChild(card);
  });
};

let timerInterval;

const startTimer = () => {
  let seconds = 0;
  timerInterval = setInterval(() => {
    seconds++;
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  }, 1000);
};

const restartGame = () => {
  clearInterval(timerInterval);
  window.location.href = "./pages/index.html";
};

window.onload = () => {
  playerDisplay.innerHTML = localStorage.getItem("player");

  restartButton.addEventListener("click", restartGame);
  restartButton.setAttribute("data-action", "restart");

  startTimer();
  loadGame();
};
