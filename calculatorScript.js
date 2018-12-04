var displayValue = "";
var fisrtNumber = 0;
var secondNumber = null;
var operation = null;
var register = null;
var equalPressed = 0;
var display = document.getElementById('display');

document.getElementById('clear').onclick = function(){
    clear();
}
document.getElementById('zero').onclick = function(){
   getInput('0');
}
document.getElementById('one').onclick = function(){
   getInput('1');
}
document.getElementById('two').onclick = function(){
   getInput('2');
}
document.getElementById('three').onclick = function(){
   getInput('3');
}
document.getElementById('four').onclick = function(){
   getInput('4');
}
document.getElementById('five').onclick = function(){
   getInput('5');
}
document.getElementById('six').onclick = function(){
   getInput('6');
}
document.getElementById('seven').onclick = function(){
   getInput('7');
}
document.getElementById('eight').onclick = function(){
   getInput('8');
}
document.getElementById('nine').onclick = function(){
   getInput('9');
}
document.getElementById('nine').onclick = function(){
   getInput('9');
}
document.getElementById('plus').onclick = function(){
  operationPressed("+");
}
document.getElementById('minus').onclick = function(){
  operationPressed("-");
}
document.getElementById('times').onclick = function(){
  operationPressed("x");
}
document.getElementById('division').onclick = function(){
  operationPressed("/");
}

/*keys.onclick = function(event){
  button = event.target;
  if(button.className.indexOf("number") > -1){
    getInput(button.textContent);
  } else if (button.className.indexOf("operator") > -1) {
    operationPressed(button.textContent);
  }
}*/

document.getElementById('dot').onclick = function(){
  if(displayValue == ""){
   getInput("0.");
  } else {
   getInput('.');
  }
}
document.getElementById('equal').onclick = function(){
  equal();
  equalPressed++;  
}

document.getElementById('clear').onclick = function(){
  clear();
}

function printToDisplay(output) {
  var outputLength = output.length;
  output = parseFloat(output);

  if (outputLength > 14){
    output = output.toExponential();
    outputLength = output.length;
    if (outputLength > 14){
      output = (1 * output).toExponential(10);
    }
  }
  display.innerHTML = output;
}

function getInput(value){
  displayValue = displayValue + value;
  if (operation == null){
    fisrtNumber = displayValue;
  } else {
    secondNumber = displayValue;
  }
  printToDisplay(displayValue);
  calculateToRegister();
  console.log("n1 = " + fisrtNumber, "n2 = " + secondNumber, "reg = " + register);
}

function clear() {
  operation = null;
  displayValue = "0";
  fisrtNumber = 0;
  secondNumber = null;
  register = null;
  printToDisplay(displayValue);
}

function operationPressed (operationNumber) {
  equalPressed = false;
  if(register != null){
    fisrtNumber = register;
  }
  secondNumber = null;
  displayValue = "";
  operation = operationNumber;
  if (register != null){
    printToDisplay(register.toString());
  } else {
    printToDisplay("0");
  }
}

function equal (){
  fisrtNumber = register;
  if (equalPressed != 0){
    calculateToRegister();
  }
  var finalResult = register;
  printToDisplay(finalResult.toString());
  console.log("n1 = " + fisrtNumber, "n2 = " + secondNumber, "reg = " + register);
}

function calculateToRegister() {
  switch (operation) {
    case "+":
      register = parseFloat(fisrtNumber) + parseFloat(secondNumber);
      break;
    case "-":
      register = (parseFloat(fisrtNumber) - parseFloat(secondNumber)).toPrecision(15) * 1;
      break;
    case "x":
      register = parseFloat(fisrtNumber) * parseFloat(secondNumber);
      break;
    case "/":
      register = parseFloat(fisrtNumber) / parseFloat(secondNumber);
      break;  
    default:
      break;
  }
}