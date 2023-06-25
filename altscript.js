const container = document.querySelector("#container");
const display = document.querySelector('#display');

let number = "";
let result = 0;
let statement = '';
let currentSign = '';

//creation of number-containing buttons

for(let i=0; i<10; i++){
    const btn = document.createElement('button');
    btn.textContent = i;

    btn.addEventListener('click', () => {
        number += String(i);
        display.textContent = number;
    })
    container.appendChild(btn);
}

//Creation of buttons of signs

const plus = document.createElement('button');
plus.textContent = "+";
plus.addEventListener('click', () => {
    currentSign = "+";
    result = number;
    number = 0;
})
container.appendChild(plus);

const minus = document.createElement('button');
minus.textContent = "-";
minus.addEventListener('click', () => {
    currentSign = "-";
    result = number;
    number = 0;
});
container.appendChild(minus);

// Equals sign

const equals = document.createElement('button');
equals.textContent = "=";
equals.addEventListener('click', () => {
    if (currentSign == "+"){
        result = String(Number(result) + Number(number));
        display.textContent = result;

    }
    else if(currentSign == "-"){
        result = String(Number(result) - Number(number));
        display.textContent = result;

    };
});
container.appendChild(equals);
