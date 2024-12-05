let display = document.getElementById('numbers');

function append(value){
display.value+=value;}

function calculate(){
    display.value = eval(display.value);
}

function clear1(){
    display.value = ''
}

function backspace(){
    display.value=display.value.slice(0,-1);
    }

function percent(){
    display.value = parseFloat(display.value)/100;
}