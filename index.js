"use strict";
// changes the value of the input if button is clicked
function change(num){
    document.getElementById("calc").value += num;
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
}

//adds symbol based on the input
function symbols(num){
    let input = document.getElementById("calc");
    if(num == 1){
        input.value += "(";
    }else if(num == 2){
        input.value += ")";
    }else if(num == 3){
        input.value += "+";
    }else if(num == 4){
        input.value += "-";
    }else if(num == 5){
        input.value += "*";
    }else if(num == 6){
        input.value += "/";
    }else if(num == 7){
        input.value += "%";
    }else if(num == 8){
        input.value += "**2";
    }else if(num == 9){
        input.value += "**(1/2)";
    }
}

//adds the sin, cos, or tan function
function degree(num){
    let input = document.getElementById("calc");
    if(num == 1){
        input.value += "Math.sin(";
    }else if(num == 2){
        
    }
}