// FUNCTION: RETURNING NUMBERS
let currentNumber = "";

const inputNumber = (anyNumber) => {
    currentNumber += anyNumber;
    displayNumbers();
};

// FUNCTION: Display numbers on calculator screen
const displayNumbers = () => {
    document.getElementById("display").innerText = currentNumber;
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
    const number = btnNumArray[i];
    const button = document.getElementById("btn-" + number);
    const numberValue = button.innerText;
    button.addEventListener("click", () => inputNumber(numberValue));
}

// FUNCTION: Define previous and current number with operator event

let previousNumber = "";
let currentOperator = "";

const inputOperator = (op) => {
    currentOperator = op;
    previousNumber = currentNumber;
    currentNumber = "";
};

// FUNCTION 7: Functioning operator buttons with event
const operatorArray = ["/", "x", "-", "+"];
for (let i = 0; i < operatorArray.length; i++) {
    const operator = operatorArray[i];
    const button = document.getElementById("btn-" + operator);
    button.addEventListener("click", () => inputOperator(operator));
}

// FUNCTION: Operators
const equalsOperator = () => {
    if (currentOperator === "/") {
        currentNumber = Number(previousNumber) / Number(currentNumber);
        displayNumbers();
    }
    if (currentOperator === "x") {
        currentNumber = Number(currentNumber) * Number(previousNumber);
        displayNumbers();
    }
    if (currentOperator === "-") {
        currentNumber = Number(previousNumber) - Number(currentNumber);
        displayNumbers();
    }
    if (currentOperator === "+") {
        currentNumber = Number(currentNumber) + Number(previousNumber);
        displayNumbers();
    }
};

// FUNCTION: Equals event with event listener
const equalsButton = document.getElementById("btn-=");
equalsButton.addEventListener("click", () => equalsOperator());

// FUNCTION: Clear all
const clear = () => {
    currentNumber = "";
    document.getElementById("display").innerText = currentNumber;
};

const clearAll = document.getElementById("btn-c");
clearAll.addEventListener("click", () => clear());
