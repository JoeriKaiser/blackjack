
let cartes1 = 0;
let cartes2 = 0;

const totalCartes1 = document.querySelector("#cartes-1");
const totalCartes2 = document.querySelector("#cartes-2");
const winnerH1 = document.querySelector("#winner");

function compareScores(score1, score2) {
  if (score1 > score2) {
    winnerH1.innerHTML = "Joueur 1 a gagner";
  } else if (score1 === score2) {
    winnerH1.innerHTML = "Egalite";
  } else if (score1 < score2 ) {
    winnerH1.innerHTML = "Joueur 2 a gagner";
  }
}
console.log(compareScores())

function getRandom() {
  return Math.floor(Math.random(1, 10) *10 + 1);
}

function getValue(hand) {
  let sum = 0;
  for (let i = 0; i < hand.length; i++) {
    sum = sum + hand[i];
  }
  return sum;
};

function startGame() {
  cartes1 = [getRandom(), getRandom()];
  cartes2 = [getRandom(), getRandom()];
}
if (window.confirm("Voulez-vous commencer et piocher deux cartes?")){
  startGame();
  totalCartes1.innerHTML = `${cartes1}, Pour un total de : ${getValue(cartes1)}`
  totalCartes2.innerHTML = `${cartes2}, Pour un total de : ${getValue(cartes2)}`
} else {
  alert("Dommage!");
  location.reload();
}
console.log("Player hand 1 :" + cartes1);
console.log("Player hand 1 value : " + getValue(cartes1));
console.log("Player hand 2 :" + cartes2);
console.log("Player hand 2 value : " + getValue(cartes2));

while (getValue(cartes1) < 21) {
  if (window.confirm(`Votre total est de ${getValue(cartes1)} vous souhaiter tirer une carte supplémentaire?`)) {
    cartes1.push(getRandom());
    totalCartes1.innerHTML = `${cartes1}, Pour un total de : ${getValue(cartes1)}`
  } else {
    break;
    }
}

if (getValue(cartes1) > 21) {
  alert("Game Over!")
  window.location.reload()
} else if (getValue(cartes1) === 21) {
  alert("BLACKJACK !!");
}

if (getValue(cartes2) <= 16) {
  cartes2.push(getRandom());
  totalCartes2.innerHTML = `${cartes2}, Pour un total de : ${getValue(cartes2)}`
  compareScores(getValue(cartes1), getValue(cartes2));
} else if (getValue(cartes2) > 21) {
  alert("Le Joueur 2 a eu plus que 21, Donc le joueur 1 remporte la partie");
  winnerH1.innerHTML = "Joueur 1 a gagner car le Joueur 2 à d2";
} else {
  compareScores(getValue(cartes1), getValue(cartes2));
}