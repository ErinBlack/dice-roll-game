// const dice = {
//   sides: 6,
//   roll:function(){
//     const randomNumber = Math.floor(Math.random() * this.sides) + 1;
//     return randomNumber;
//   } //end roll
// }; //end dice



function Dice(sides) {
    this.sides = sides;
}// end Dice constructor function

Dice.prototype.roll = function diceRoll(){
  const randomNumber = Math.floor(Math.random() * this.sides) + 1;
  return randomNumber;
}; //end this.roll

const dice = new Dice(6);
const dice10 = new Dice(10);

console.log(dice.roll === dice10.roll);
