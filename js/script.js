// Selects the element with the "grid" class in HTML and stores it in a constant
const grid = document.querySelector(".grid");

// Array with football team names
const teams = [
  "arsenal",
  "athletico-de-madrid",
  "barcelona",
  "bayern",
  "dortmund",
  "inter",
  "man-city",
  "man-utd",
  // 'milan',
  // 'porto',
  "psg",
  "real-madrid",
];

// Utility function to create HTML elements with a specific class
const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
};

// Variables to store the first and second clicked cards
let firstCard = '';
let secondCard = '';

// Function to check if the game is over
const checkEndGame = () => {
  const disabledCards = document.querySelectorAll(".disabled-card");

  if(disabledCards.length === 20) {
    setTimeout(() => {
      alert("Congratulations, You won the game!");
    }, 500);
}}

// Function to check if the cards match
const checkCards = () => {
  const firstTeam = firstCard.getAttribute("data-teams");
  const secondTeam = secondCard.getAttribute("data-teams");

  if(firstTeam === secondTeam) {
    firstCard.firstChild.classList.add("disabled-card");
    secondCard.firstChild.classList.add("disabled-card");
    firstCard = '';
    secondCard = '';

    checkEndGame();
  } else {
    setTimeout(() => {
        firstCard.classList.remove("reveal-card");
        secondCard.classList.remove("reveal-card");
        firstCard = '';
        secondCard = '';
    }, 500);
}}

// Function to reveal the card.
const revealCard = ({ target }) => {
  if (target.parentNode.classList.add("reveal-card")) {
    return;
  }

  if (firstCard === '') {
    target.parentNode.classList.add("reveal-card");
    firstCard = target.parentNode;
} else if (secondCard === '') {
    target.parentNode.classList.add("reveal-card");
    secondCard = target.parentNode;

    checkCards();
}}

// Function to create a card for a specific team
const createCard = (team) => {
  const card = createElement("div", "card");
  const front = createElement("div", "face front");
  const back = createElement("div", "face back");

  front.style.backgroundImage = `url("../assets/${team}.webp")`;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener("click", revealCard);
  card.setAttribute("data-teams", team);

  return card;
};

// Function to load the game
const loadGame = () => {
  const duplicateTeams = [...teams, ...teams];

  const shuffledTeams = duplicateTeams.sort(() => Math.random() - 0.5);

  shuffledTeams.forEach((team) => {
    const card = createCard(team);
    grid.appendChild(card);
  });
};

loadGame();
