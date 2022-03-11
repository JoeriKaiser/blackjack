const totalCartes1 = document.querySelector("#cartes-1");
const totalCartes2 = document.querySelector("#cartes-2");
const winnerH1 = document.querySelector("#winner");

function compareScores(score1, score2) {
  if (score1 > score2) {
    winnerH1.innerHTML = "Joueur 1 a gagné";
  } else if (score1 === score2) {
    winnerH1.innerHTML = "Egalité";
  } else if (score1 < score2 ) {
    winnerH1.innerHTML = "Joueur 2 a gagné";
  } else if (score2 > 21){
    winnerH1.innerHTML = "Joueur 1 a gagné car le Joueur 2 a dépassé 21.";
  }
}

function getRandom() {
  return Math.floor(Math.random(1, 10) *10 + 1);
}

function getValue(hand) {
  let sum = 0;
  for (let i = 0; i < hand.length; i++) {
    sum = sum + hand[i];
  }
  return sum;totalCartes2.innerHTML = `${cartes2}, Pour un total de : ${getValue(cartes2)}`
};

function startGame() {
  cartes1 = [getRandom(), getRandom()];
  cartes2 = [getRandom(), getRandom()];
}

function startButton() {
  if (window.confirm("Voulez-vous commencer et piocher deux cartes?")){
    startGame();
    totalCartes1.innerHTML = `${cartes1}, Pour un total de : ${getValue(cartes1)}`
    totalCartes2.innerHTML = `${cartes2[0]}, et une carte cachée`;
  } else {
    alert("Dommage!");
    location.reload();
  }
  while (getValue(cartes1) < 21) {
    if (window.confirm(`Votre total est de ${getValue(cartes1)} souhaitez-vous tirer une carte supplémentaire?`)) {
      cartes1.push(getRandom());
      totalCartes1.innerHTML = `${cartes1}, Pour un total de : ${getValue(cartes1)}`
    } else {
      break;
      }
  }
  
  if (getValue(cartes1) > 21) {
    alert("Game Over!")
    totalCartes1.innerHTML = `GAME OVER!`
    window.location.reload()
  } else if (getValue(cartes1) === 21) {
    alert("BLACKJACK !!");
    window.location.reload()
  }
  
  if (getValue(cartes2) <= 16) {
    cartes2.push(getRandom());
    totalCartes2.innerHTML = `${cartes2}, Pour un total de : ${getValue(cartes2)}`
    compareScores(getValue(cartes1), getValue(cartes2));
  } else if (getValue(cartes2) > 21) {
    compareScores(getValue(cartes1), getValue(cartes2));
    totalCartes2.innerHTML = `${cartes2}, Pour un total de : ${getValue(cartes2)}`
    alert("Le Joueur 2 a eu plus que 21, donc le joueur 1 remporte la partie");
    winnerH1.innerHTML = "Joueur 1 a gagné car le Joueur 2 a dépassé 21.";
  } else {
    compareScores(getValue(cartes1), getValue(cartes2));
  }
}