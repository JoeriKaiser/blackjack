const confirmation = confirm("Voulez-vous commencer à jouer?");
let sum1 = 0;
let sum2 = 0;

let cartes1 = [getRandom(), getRandom()];
let cartes2 = [getRandom(), getRandom()];


function getRandom() {
  return Math.floor(Math.random(1, 10) *10 + 1);
}
for (let i = 0; i < cartes1.length; i++) {
  sum1 += cartes1[i];
}
for (let i = 0; i < cartes2.length; i++) {
  sum2 += cartes2[i];
}

if (confirmation) {
  console.log("Cartes du joueur numéro 1 : ", cartes1[0], "et", cartes1[1]);
  console.log("Cartes du joueur numéro 2 : ", cartes2[0], "et une carte cachée");
  const resultTour1 = confirm(`Joueur 1 le total de vos cartes est de ${sum1} Voulez vous piocher une autre carte?`);
  if (resultTour1) {
    while (sum1 < 21 && resultTour1) {
      cartes1.push(getRandom())
        if (condition) {
          
        }
    } 
  } else {
    window.location.reload();
  }
  // ALERT Je suis sortie de la boucle


    // const resultTour1 = confirm(`Joueur 1 le total de vos cartes est de ${sum1} Voulez vous piocher une autre carte?`);
    //   if (resultTour1) {
    //     cartes1.push(getRandom());
    //     if (sum1 === 21) {
    //       alert("Blackjack");
    //     } else if (sum1 < 21) {
    //       console.log(sum1);
    //       const resultTour2 = confirm(`Joueur 1 le total de vos cartes est de ${sum1} Voulez vous piocher une autre carte?`);
    //     } else {
    //       alert("Vous avez perdu")
    //     }
    //     window.location.reload();
    //   } else {
    //     console.log(`Votre score final est de ${sum1}`);
    //     console.log(`Le score de votre adversaire est de ${sum2} `)
    //     if (sum1 === sum2) {
    //       alert("Vous êtes à égalité")
    //     } else if (sum1 > sum2) {
    //       alert("Vous avez gagné")
    //     } else {
    //       alert("Vous avez perdu!")
    //     }
    //     window.location.reload();
    //   }
      // if (sum1 < 21) {
      //   const resultTour2 = confirm(`Joueur 1 le total de vos cartes est de ${sum1} Voulez vous piocher une autre carte?`);
      //   if (resultTour2) {
      //     cartes1.push(getRandom());
      //     console.log(sum1)
      //   }
      // } else {
      //   console.log(`Votre score final est de ${sum1}`);
      //   console.log(`Le score de votre adversaire est de ${sum2} `)
      //   if (sum1 === sum2) {
      //     alert("Vous êtes à égalité")
      //   } else if (sum1 > sum2) {
      //     alert("Vous avez gagné")
      //   } else {
      //     alert("Vous avez perdu!")
      //   }
      //   window.location.reload();
      //   // Votre score final est de ... vous avez gagner ou perdu
      // }
      //   console.log(cartes1)

} else {
  console.log("Dommage !");
}
