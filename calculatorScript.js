var displayValue = "";                                            // Variável para impressão no display
var fisrtNumber = 0;                                              // Primeiro termo do cálculo
var secondNumber = null;                                          // Segundo termo do cálculo
var operation = null;                                             // Ultimo operador pressionado
var register = null;                                              // Variável acumuladora de resultados
var equalPressed = 0;                                             // Controle de estado para o botão de igualdade
var display = document.getElementById('display');                 // Elemento HTML que recebe os valores para o display

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
 / Atibuição das funções para cada evento de 'onclick' dos botões 
 / do teclado da calculadora.
*/
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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
 / Função de impressão no display. Corrige problemas de formato da saída
*/
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
  console.log("n1 = " + fisrtNumber, "n2 = " + secondNumber, "reg = " + register);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
 / Função que armazena os inputs numéricos do usuário e mostra as
 / entradas no display.
*/
function getInput(value){
  if(equalPressed != 0){
    clear();
  }
  displayValue = displayValue + value;
  if (operation == null){
    fisrtNumber = displayValue;
  } else {
    secondNumber = displayValue;
  }
  printToDisplay(displayValue.toString());
  calculateToRegister();
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
 / Função de 'reset', re-inicializando variáveis necessárias e o diplay.
*/
function clear() {
  operation = null;
  displayValue = "0";
  equalPressed = 0;
  fisrtNumber = 0;
  secondNumber = null;
  register = null;
  printToDisplay(displayValue.toString());
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
 / Função que recebe um identificador de operação quando ativada, armazenando
 / para cálculos sequenciais.
 /
 / Re-inicializa o display para a entrada de um novo termo para calcular.
*/
function operationPressed (operationNumber) {
  equalPressed = 0;
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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
 / Função para o botão de igualdade.
 / Calculos sequenciais são possiveis.
*/
function equal (){
  fisrtNumber = register;
  if (equalPressed != 0){
    calculateToRegister();
  }
  var finalResult = register;
  displayValue = "";
  if (finalResult == null){
    printToDisplay("");
  } else {
  printToDisplay(finalResult.toString());
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
 / Executa as operações e guarda no acumulador, baseado no último operador 
 / pressionado.
*/
function calculateToRegister() {
  switch (operation) {
    case "+":
      register = parseFloat(fisrtNumber) +
        parseFloat(secondNumber);
      break;
    case "-":
      register =(parseFloat(fisrtNumber) -
        parseFloat(secondNumber)).toPrecision(15) * 1;
      break;
    case "x":
      register = parseFloat(fisrtNumber) *
        parseFloat(secondNumber);
      break;
    case "/":
      register = parseFloat(fisrtNumber) /
        parseFloat(secondNumber);
      break;  
    default:
      break;
  }
}