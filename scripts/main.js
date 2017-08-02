/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to 
   write your logic.
*/


function handValue (hand) {  

// Declare variables here

let handTotal = 0;
// let card = "";
// let cardValue = 0;
let faceAndNumberTotal = 0;

// this part to the part below returns all correct numbers WITHOUT the aces accounted for//
for (i=0; i < hand.length; i++){

  if (hand[i] === "Q" || hand[i] === "K" || hand[i] === "J"){
    faceAndNumberTotal += 10;
    }  else if ((hand[i] === "2") || (hand[i] === "3") || (hand[i] === "4") || (hand[i] === "5") || (hand[i] === "6") || (hand[i] === "7") || (hand[i] === "8") || (hand[i] === "9") || (hand[i] === "10")){
      faceAndNumberTotal += parseFloat(hand[i]);
    }
          else if ((hand[i] === "A") && (faceAndNumberTotal < 11)){
            faceAndNumberTotal += 11;
            } else if ((hand[i] === "A") && (faceAndNumberTotal > 11)){
              faceAndNumberTotal += 1;
            }
// console.log(faceAndNumberTotal);    
}
if (faceAndNumberTotal > 21){
  faceAndNumberTotal -= 10;
}

          

console.log(faceAndNumberTotal);
return faceAndNumberTotal;

//end here//

}


  


  // let card = "";                     THIS WAS MY SECOND ATTEMPT
  // cardValue = parseFloat(card)

  //     for (i=0; i<hand.length; i++){
  //       if (hand[i] === "Q" || hand[i] === "K" || hand[i] === "J"){     make aces array to save for later
  //       cardValue = 10;                                make 3 separate functions for face, number (NOT aces, kings, jacks or queens
  //     } else if (hand[i] > "2" && hand[i] < "10"){
  //       cardValue = parseFloat[i];
  //     }
  //   }
  //   hand.push(cardValue);
  //   console.log(cardValue);



// let hand = [];             THIS WAS MY FIRST ATTEMPT
//   let card1 = [0];
//   let card2 = [1];
//   let card3 = [2];
//   let card4 = [3];
// let numberCards = ""
//   for (let i=0; i < hand.length; i++){
//     if (i < 10){
//       numberCards.push(hand);
//   }
// }
// function numberValue (sum1) {
// }
// let handTotal = [card1 + card2 + card3 + card4];
 
    // for (i=0; i < hand.length; i++){
    //   for (j=0; j <hand.length; j++){

    //   }
    // }




/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/