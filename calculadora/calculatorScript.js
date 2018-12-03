var displayValue = "";
var operation;
var register = 0;
var display = document.getElementById('display');

document.getElementById('clear').onclick = function(){
    clear();
}
document.getElementById('zero').onclick = function(){
    pushToDisplay('0');
}
document.getElementById('one').onclick = function(){
    pushToDisplay('1');
}
document.getElementById('two').onclick = function(){
    pushToDisplay('2');
}
document.getElementById('three').onclick = function(){
    pushToDisplay('3');
}
document.getElementById('four').onclick = function(){
    pushToDisplay('4');
}
document.getElementById('five').onclick = function(){
    pushToDisplay('5');
}
document.getElementById('six').onclick = function(){
    pushToDisplay('6');
}
document.getElementById('seven').onclick = function(){
    pushToDisplay('7');
}
document.getElementById('eight').onclick = function(){
    pushToDisplay('8');
}
document.getElementById('nine').onclick = function(){
    pushToDisplay('9');
}
document.getElementById('nine').onclick = function(){
    pushToDisplay('9');
}
document.getElementById('plus').onclick = function(){
    adition();
}
document.getElementById('minus').onclick = function(){
    subtraction();
}
document.getElementById('times').onclick = function(){
    times();
}
document.getElementById('division').onclick = function(){
    division();
}
document.getElementById('dot').onclick = function(){
  if(displayValue == ""){
    pushToDisplay("0.");
  } else {
    pushToDisplay('.');
  }
}
document.getElementById('equal').onclick = function(){
    equal();
}

function pushToDisplay(value){
  displayValue = displayValue + value;
  display.innerHTML = displayValue / 1;
  console.log(register);
}

function clear() {
  displayValue = "";
  register = 0;
  pushToDisplay(displayValue);
}

function adition(){
  operation = 0;
  register += 1 * displayValue;
  display.innerHTML = register;
  displayValue = "";
}

function subtraction(){
  operation = 1;
  register = parseFloat((-1) * displayValue - register).toPrecision(10) * 1;
  display.innerHTML = (-1) * register;
  displayValue = "";
}

function times(){
  if (register === 0){
    register = 1;
  }
  operation = 2;
  register *= displayValue;
  display.innerHTML = register;
  displayValue = "";
}

function division(){
  if (register === 0){
    register = 1 * displayValue;
  } else {
    register /= displayValue;
    register = parseFloat(register).toPrecision(13) * 1;
  }
  operation = 3;
  display.innerHTML = register;
  displayValue = "";
}

function equal(){
  switch (operation) {
    case 0:
      adition();
      break;
    case 1:
      subtraction();
      break;
    case 2:
      times();
      break;
    case 3:
      division();
      break;
    case 4:
      break;
    default:
  }
  pushToDisplay(register);
  register = 0;
}
