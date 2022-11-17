"use strict";
// changes the value of the input if button is clicked
function change(num){
    document.getElementById("calc").value += num;
}

//adds a plus sign
function add(){
    document.getElementById("calc").value += "+";
}

//adds a subtraction sign
function sub(){
    document.getElementById("calc").value += "-";
}

//adds a multiplication sign
function mul(){
    document.getElementById("calc").value += "*";
}

//adds a division sign
function div(){
    document.getElementById("calc").value += "/";
}

//calculates the input
function enter(){
    let equation = document.getElementById("calc").value;
    equation = eval(equation);
    document.getElementById("calc").value = equation;
}

//clears the input
function clearer(){
    document.getElementById("calc").value = " ";
    console.log("test")
}
