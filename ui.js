function  printNumber(number){
    const placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = number;
} //end printNumber

var button = document.getElementById('button');

button.onclick = function(){
    const result = dice.roll();
    printNumber(result);
}; //end button.onclick
