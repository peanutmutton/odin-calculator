const container = document.querySelector("#container");
const display = document.querySelector('#display');

let strmemory = '';
let first = 0;
let second = 0;
let operator = '';

function add(){
    first = Number(strmemory);
    strmemory = '';
    operator = "+";
    display.textContent = strmemory;
};

function subtract(){
    first = Number(strmemory);
    strmemory = '';
    operator = "-";
    display.textContent = strmemory;
};

function multiply(){
    first = Number(strmemory);
    strmemory = '';
    operator = "*";
    display.textContent = strmemory;
};

function divide(){
    first = Number(strmemory);
    strmemory = '';
    operator = "/";
    display.textContent = strmemory;
};



function operate(){
    second = Number(strmemory);
    strmemory = '';
    if (operator == "+"){
        display.textContent = first + second;
    }
    else if (operator == "-"){
        display.textContent = first - second;
    }
    else if (operator == "*"){
        display.textContent = first * second;
    }
    else if (operator == "/"){
        display.textContent = first / second;
    };

}
//number buttons creation
for(let i=0; i<10;i++){
    const btn = document.createElement('button');
    btn.textContent = i;
    btn.classList = "numbers";
    btn.addEventListener('click', () => {
        strmemory += String(i);
        display.textContent = strmemory;
    })
    container.appendChild(btn);

}
//---------

