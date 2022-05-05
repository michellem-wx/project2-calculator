// FUNCTION: RETURNING NUMBERS
let currentNumber = ""; //placeholder value - remember 'let' allows for the variable to change.

//Function to display the numbers in the UI
const inputNumber = (anyNumber) => {
    currentNumber += anyNumber; //each time a number is selected, it will become the 'currentNumber' (note: call currentNumber in the console to check this.)
    displayNumbers(); // needed to return number in display (another function)
};

// FUNCTION: Display numbers on calculator screen
const displayNumbers = () => {
    document.getElementById("display").innerText = currentNumber; // setting the innerText of the calc screen to display currentNumber
};

// FUNCTION: Add click event to numerical buttons
const btnNumArray = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "decimal",
];
for (let i = 0; i < btnNumArray.length; i++) {
    const number = btnNumArray[i]; //creating a variable for the array to be used in getting the element by ID through button
    const button = document.getElementById("btn-" + number);
    const numberValue = button.innerText; //remember: innerText is returning the actual text. this line refers to 'button.' (i.e. the line before this one) and is therefore looking for the innerText of const button!!!

    button.addEventListener("click", () => inputNumber(numberValue)); // added eventListner once the button is clicked - function inputNumber but, numberValue is used (returning actual text)
}

// FUNCTION: Function for operator event - defining the previous and current number

let previousNumber = "";
let currentOperator = ""; //different operators

const inputOperator = (op) => {
    currentOperator = op;
    previousNumber = currentNumber; //the first number you click (currentNumber) becomes the previous number.
    currentNumber = ""; //the current number is now an empty string and will be the NEXT number you input (note previous number is defined as an empty string)
};

// FUNCTION 7: Functioning operator buttons with event
const operatorArray = ["/", "x", "-", "+"]; //create operator array to reference ids in the for loop
for (let i = 0; i < operatorArray.length; i++) {
    const operator = operatorArray[i];
    const button = document.getElementById("btn-" + operator);
    button.addEventListener("click", () => inputOperator(operator)); //the event is: once an operator is selected, your current number will become previous number, and what follows the operator will now be the current number
}

// FUNCTION: EQUALS EVENT WITH OPERATORS

const equalsOperator = () => {
    // division
    if (currentOperator === "/") {
        currentNumber = Number(previousNumber) / Number(currentNumber);
        displayNumbers(); //this calls your displayNumbers function you defined earlier
    }

    // multiplication
    if (currentOperator === "x") {
        currentNumber = Number(currentNumber) * Number(previousNumber);
        displayNumbers();
    }
    // minus
    if (currentOperator === "-") {
        currentNumber = Number(previousNumber) - Number(currentNumber); // bug: why is it returning negative??? ==> note the change in console in previous and current number.
        // currentNumber = Number(currentNumber) - Number(previousNumber);
        displayNumbers();
    }

    // addition
    if (currentOperator === "+") {
        currentNumber = Number(currentNumber) + Number(previousNumber);
        displayNumbers();
    }
};

// FUNCTION: Equals event with event listener
const equalsButton = document.getElementById("btn-=");
equalsButton.addEventListener("click", () => equalsOperator()); // your equals button event is calling the equalsOperator function (where all your operators are stored (functions) and returning in display)

// FUNCTION: Clear all
const clear = () => {
    currentNumber = "";
    document.getElementById("display").innerText = currentNumber;
};

const clearAll = document.getElementById("btn-c");
clearAll.addEventListener("click", () => clear());
