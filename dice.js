const dice = {
  sides: 6,
  roll:function(){
    const randomNumber = Math.floor(Math.random() * this.sides) + 1;
    console.log(randomNumber);
  } //end roll
}; //end dice

const dice10 = {
  sides: 10,
  roll: function(){
    const randomNumber = Math.floor(Math.random() * this.sides) + 1;
    console.log('randomNumber');
  } // end roll
}; //end dice10
