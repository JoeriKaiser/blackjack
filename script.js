const confirmation = confirm("Voulez-vous commencer à jouer?");
let cartes1 = [getRandom(), getRandom()];
let cartes2 = [getRandom(), getRandom()];
if (confirmation) {
  console.log("Cartes du joueur numéro 1 : ", cartes1[0], "et", cartes1[1]);
  console.log("Cartes du joueur numéro 2 : ", cartes2[0], "et une carte cachée");
} else {
  alert("Dommage !");
}
const totalCartes1 = document.querySelector("#cartes-1");
const totalCartes2 = document.querySelector("#cartes-2");
totalCartes1.innerHTML = `${getValue(cartes1)}`;
totalCartes2.innerHTML = `${cartes2[0]}, et une carte cachée`;
function getRandom() {
  return Math.floor(Math.random(1, 10) *10 + 1);
}
function getValue(hand) {
  let sum = 0;
  for (let i = 0; i < hand.length; i++) {
    sum = sum + hand[i];
  }
  return sum
}
function hit() {
  if (getValue(cartes1) < 21) {
    cartes1.push(getRandom());
    console.log(getValue(cartes1));
    totalCartes1.innerHTML = `${getValue(cartes1)}`;
  } else {
    console.log("test")
  }
  while (getValue(cartes1) > 21) {
    const response = confirm("Le joueur 1 à perdu voulez-vous rejouer?");
    if (response === true) {
      window.location.reload();
    }
    totalCartes1.innerHTML = `${getValue(cartes1)}`;
  }
  while (getValue(cartes1) === 21) {
    const response = confirm("Le joueur 1 à fait un Blackjack, voulez-vous rejouer?");
    if (response === true) {
      window.location.reload();
    }
    totalCartes1.innerHTML = `${getValue(cartes1)}`;
  }

  while (getValue(cartes2) <= 16) {
    cartes2.push(getRandom());
    totalCartes2.innerHTML = `${getValue(cartes2)}`;
  }
  while (getValue(cartes2) > 17 && getValue(cartes2) < 21) {
    console.log(`Le joueur 2 s'arrete à ${getValue(cartes2)}`);
    totalCartes2.innerHTML = `${getValue(cartes2)}`;
    break;
  }

  while (getValue(cartes2) > 21 ) {
    const response = confirm("Le joueur 2 a perdu, voulez-vous rejouer?");
    if (response === true) {
      window.location.reload();
    }
    totalCartes2.innerHTML = `${getValue(cartes2)}`;
    break;
  }
  while (getValue(cartes2) === 21 ) {
    const response = confirm("Le joueur 2 à fait un Blackjack, voulez-vous rejouer?");
    if (response === true) {
      window.location.reload();
    }
    totalCartes2.innerHTML = `${getValue(cartes2)}`;
    break;
  }
}