//Final Version
let firstNumber = "";
let operatorSymbol = "";
let secondNumber = "";
let result = "";
let currentString = "";


const display = document.getElementById("displayBox");
const operator = document.getElementById("buttons");
const inputElement = document.createElement("div"); 
const buttons = document.querySelectorAll("button");


buttons.forEach(button => {
    button.addEventListener("click", () => {
        calculatorTestCases(button.textContent);
    });
});


function appendToDisplay(number){
    

    //Ends first number input value once operator is clicked
    if(number == "+" || number == "-" || number == "X" || number == "÷"){
        //Input operator in display
        inputElement.innerHTML = currentString + number;
        display.appendChild(inputElement);
        firstNumber = currentString;
    }
    //Ends second number input value and Sends both number values to solveForAnswer Function
    else if(number == "="){
        console.log("first Num", firstNumber);
        console.log("osperator", operatorSymbol);
        console.log("2nd Num", secondNumber);
        solveForAnswer();
    }
    //Recieves input for first number value
    else{
        if(firstNumber !== ""){
            secondNumber = secondNumber + number;
            console.log("second number is gonna be ", secondNumber);
            inputElement.innerHTML = currentString + operatorSymbol + secondNumber;
            display.appendChild(inputElement);    
        }
        else{
            currentString = currentString + number;
            inputElement.innerHTML = currentString
            display.appendChild(inputElement);   
        }
    }
}

//Checks all the button cases of the calculator
function calculatorTestCases(input){
    switch(input){
        case "0": case "1": case "2": case "3": case "4": case "5": case "6": case "7": case "8": case "9":
            appendToDisplay(input);
            break;

        case "+": case "-": case "X": case "÷":
            operatorSymbol = input;
            appendToDisplay(input);
            break;
        
        case "=":
            appendToDisplay(input);
            break;
        
        case "DEL":
            deleteButton();
            break;
        case "AC":
            resetCalculator();
            break;
    }
}

//Solves the operation
function solveForAnswer(){
    switch (operatorSymbol){
        case "+":
            result = additionOperator(Number(firstNumber), Number(secondNumber));
            console.log(result);
            inputElement.textContent = result;
            chainClearCalculator();
            break;
        case "-":
            result = subtractionOperator(Number(firstNumber), Number(secondNumber));
            inputElement.textContent = result;
            chainClearCalculator();
            break;
        case "X":
            result = multiplicationOperator(Number(firstNumber), Number(secondNumber));
            inputElement.textContent = result;
            chainClearCalculator();
            break;
        case "÷":
            result = divisionOperator(Number(firstNumber), Number(secondNumber));
            inputElement.textContent = result;
            chainClearCalculator();
            break;
    }
}



//DEL BUTTON FUNCTION
function deleteButton(){
    if (operatorSymbol && firstNumber !== "") {
        secondNumber = secondNumber.slice(0, -1);
        console.log(secondNumber);
        inputElement.textContent = firstNumber + operatorSymbol + secondNumber;
    } else {
        currentString = currentString.slice(0, -1);
        inputElement.textContent = currentString;
    }
}


// AC BUTTON FUNCTION
function resetCalculator(){
    currentString = "";
    firstNumber  = "";
    operatorSymbol = "";
    secondNumber = "";
    result = "";

    display.textContent = "";
}


function chainClearCalculator(){
    console.log("Worked")
    console.log("this is the result ",result)
    currentString = String(result);
    firstNumber  = "";
    operatorSymbol = "";
    secondNumber = "";
}


//-----------Operator Functions-----------

function additionOperator(x, y){
    return x+y;
}

function subtractionOperator(x, y){
    return x - y;
}

function multiplicationOperator(x, y){
    return x * y;
}

function divisionOperator(x, y){
    return x / y;
}

//-----------Operator Functions-----------





























//First version 
/*
const display = document.getElementById("displayBox");
let counter = 0;
let currentString ="";
let inputValues = ["", "", ""]
function appendtoDisplay(input){
    const inputElement = document.createElement("div"); 
    if(counter != 1){
        inputElement.innerHTML = input;
        display.appendChild(inputElement);
    }
    else{
        console.log("operator sign worked");
        currentString = input;
        inputValues[1] = currentString;
        currentString = "";
        counter ++;
        inputElement.innerHTML = input;
        console.log(currentString);
        display.appendChild(inputElement);
    }

}


function inputVariables(input){
    if(counter == 0){
        if(input !== `=` && input !== `+` && input !== `-` && input !== `*` && input !== `/`){
            appendtoDisplay(input);
            currentString += input;
            console.log(currentString);
        }
        else{ //SYMBOL SIGN ALWAYS
            counter++;
            inputValues[0] = currentString;
            console.log("We clicked Plus sign")
            appendtoDisplay(input);
        }
    }
    

    else if(counter == 2){
        if(input !== `=` && input !== `+` && input !== `-` && input !== `*` && input !== `/`){
            appendtoDisplay(input);
            currentString += input;
            console.log(currentString);
        }
        else{
            inputValues[2] = currentString;
            currentString = "";
            findResults();
            console.log("rest time");
            counter = 0;

        }
    }
}

function findResults(){
    let result;
    const inputElement = document.createElement("div"); 
    display.innerHTML = "";

    switch (inputValues[1]){
        case "+":
            result = additionOperator(Number(inputValues[0]), Number(inputValues[2]));
            break;
        case "-":
            result = subtractionOperator(Number(inputValues[0]), Number(inputValues[2]));
            break;
        case "*":
            result = multiplicationOperator(Number(inputValues[0]), Number(inputValues[2]));
            break;
        case "/":
            result = divisionOperator(Number(inputValues[0]), Number(inputValues[2]));
            break;
    }

    inputElement.innerHTML = result;
    display.appendChild(inputElement);
}


function reset(){
    display.innerHTML = "";
    counter = 0;
    currentString ="";
    inputValues = ["", "", ""]

}

function remove(){
    console.log(currentString);
    currentString = currentString.slice(0, -1);
    console.log(currentString);
    display.innerHTML = "";
    const updateString = document.createElement("div");
    updateString.innerHTML = currentString;
    display.appendChild(updateString);
    
}


function operation(){

}


function additionOperator(x, y){
    return x+y;
}

function subtractionOperator(x, y){
    return x - y;
}

function multiplicationOperator(x, y){
    return x * y;
}

function divisionOperator(x, y){
    return x / y;
}
*/