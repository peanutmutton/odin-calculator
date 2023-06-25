let firstmemory = 0;
let secondmemory = 0;
let operatormemory = "";
let displayValue = "";

const display = document.querySelector('#display');


function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(first,second,operator){
    first = Number(first);
    second = Number(second);
    if (operator == "+"){
        displayValue = String(add(first,second));
        display.textContent = displayValue
    }
    else if (operator == "-"){
        displayValue = String(subtract(first,second));
        display.textContent = displayValue
    }
    else if (operator == "*"){
        displayValue = String(multiply(first,second));
        display.textContent = displayValue
    }
    else if (operator == "/"){
        displayValue = String(divide(first,second));
        display.textContent = displayValue
    }
}

function numberInput(number){
    console.log(displayValue += String(number));
    display.textContent = displayValue
}

function changeOperator(newoperator){
    operatormemory = newoperator;
    console.log(operatormemory);
    firstmemory = Number(displayValue);
    displayValue = "";
    display.textContent = displayValue
}