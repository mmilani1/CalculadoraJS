var displayValue = "";
var fisrtNumber = null;
var secondNumber = null;
var operation = null;
var register = null;
var equalPressed = 0;
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
  operationPressed(0);
}
document.getElementById('minus').onclick = function(){
  operationPressed(1);
}
document.getElementById('times').onclick = function(){
  operationPressed(2);
}
document.getElementById('division').onclick = function(){
  operationPressed(3);
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
  equalPressed++;  
}

function pushToDisplay(value){
  displayValue = displayValue + value;
  if (operation == null){
    fisrtNumber = displayValue;
  } else {
    secondNumber = displayValue;
  }
  display.innerHTML = 1 * displayValue;
  calculateToRegister();
  console.log("n1 = " + fisrtNumber, "n2 = " + secondNumber, "reg = " + register);
}

function clear() {
  operation = null;
  displayValue = "";
  fisrtNumber = null;
  secondNumber = null;
  register = null;
  display.innerHTML = displayValue;
}

function operationPressed (operationNumber) {
  equalPressed = false;
  if(register != null){
    fisrtNumber = register;
  }
  secondNumber = null;
  displayValue = "";
  operation = operationNumber;
  display.innerHTML = (register != null) ? register : 0;
}

function equal (){
  fisrtNumber = register;
  if (equalPressed != 0){
    calculateToRegister();
  }
  var finalResult = register;
  display.innerHTML = finalResult;
  console.log("n1 = " + fisrtNumber, "n2 = " + secondNumber, "reg = " + register);
}

function calculateToRegister() {
  switch (operation) {
    case 0:
      register = parseFloat(fisrtNumber) + parseFloat(secondNumber);
      break;
    case 1:
      register = parseFloat(fisrtNumber) - parseFloat(secondNumber);
      break;
    case 2:
      register = parseFloat(fisrtNumber) * parseFloat(secondNumber);
      break;
    case 3:
      register = parseFloat(fisrtNumber) / parseFloat(secondNumber);
      break;  
    default:
      break;
  }
}