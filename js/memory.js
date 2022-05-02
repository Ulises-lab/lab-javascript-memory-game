class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    let array = this.cards;
    if(array === undefined) {return undefined};
    let currentIndex = array.length, randomIndex;
    while(currentIndex !== 0){
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex],array[randomIndex]]=[array[randomIndex],array[currentIndex]];
    }
    return array;
  } 
  
  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked += 1;
    if(card1 === card2){
      this.pairsGuessed += 1;
      return true;
    }else {
      return false;
    }
  }

  checkIfFinished() {
    // ... write your code here
    if(this.pairsGuessed === (this.cards.length/2)){
      return true;
    }
    return false;
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;








// let array = this.cards;
//     if(array !== 0){
//       function shuffle(array) {
//         var copy = [], n = array.length, i;
//         // While there remain elements to shuffle…
//         while (n) {
//         // Pick a remaining element…
//           i = Math.floor(Math.random() * array.length);
//         // If not already shuffled, move it to the new array.
//           if(i in array) {
//             copy.push(array[i]);
//             delete array[i];
//             n--;
//           }
//         }
//         return copy;
//       } 
//     }
//     return undefined;

// function shuffle(array){
//   let currentIndex = array.length, randomIndex;
//   while(currentIndex !== 0){
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;
//     [array[currentIndex],array[randomIndex]]=[array[randomIndex],array[currentIndex]];
//   }
//   return array;
// }