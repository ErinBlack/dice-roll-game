// const dice = {
//   sides: 6,
//   roll:function(){
//     const randomNumber = Math.floor(Math.random() * this.sides) + 1;
//     return randomNumber;
//   } //end roll
// }; //end dice

function Dice(sides) {
    this.sides = sides;
    this.roll = function(){
      const randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;
    }; //end this.roll
}// end Dice constructor function

var dice = new Dice(6);
