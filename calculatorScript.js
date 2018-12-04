var displayValue = "";
var fisrtNumber = 0;
var secondNumber = null;
var operation = null;
var register = null;
var equalPressed = 0;
var display = document.getElementById('display');

keys.onclick = function(event){
  button = event.target;
  if(button.className.indexOf("number") > -1){
    getInput(button.textContent);
  } else if (button.className.indexOf("operator") > -1) {
    operationPressed(button.textContent);
  }
}

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
  console.log(output);
  if (outputLength > 14){
    output = output.toExponential();
    outputLength = output.length;
    if (outputLength > 14){
      output = (1 * output).toExponential(9);
    }
  }
  if(isNaN(output)){
    output = "Math Error";
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
  printToDisplay(displayValue.toString());
  calculateToRegister();
}

function clear() {
  operation = null;
  displayValue = "0";
  fisrtNumber = 0;
  secondNumber = null;
  register = null;
  printToDisplay(displayValue.toString());
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