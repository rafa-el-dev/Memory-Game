const grid = document.querySelector(".grid");

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

// Function to create a card for a specific team
const createCard = (team) => {  
  const card = createElement("div", "card");
  const front = createElement("div", "face front");
  const back = createElement("div", "face back");

  front.style.backgroundImage = `url("../assets/${team}.webp")`;

  card.appendChild(front);
  card.appendChild(back);

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
