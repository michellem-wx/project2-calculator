// FUNCTION: Return numbers
let currentNumber = "";
const inputNumber = (n) => {
    //n (paramter of the function) and represents the value at the time the function is invoked
    // let currentNumber = 1;
    // currentNumber += n;
    currentNumber = currentNumber + n;
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

    const numberValue = button.innerText; //returning the actual text
    button.addEventListener("click", () => inputNumber(number));

    // button.addEventListener("click", () => inputNumber(numberValue));
}

// FUNCTION: Function for operator event
let previousNumber = "";
let currentOperator = "";
const inputOperator = (op) => {
    currentOperator = op;
    previousNumber = currentNumber;
    currentNumber = ""; //resets
};

// FUNCTION 7: Functioning operator buttons with event
const operatorArray = ["/", "x", "-", "+"];
for (let i = 0; i < operatorArray.length; i++) {
    const number = operatorArray[i];
    const button = document.getElementById("btn-" + number);
    button.addEventListener("click", () => inputOperator(number));
}

// FUNCTION: EQUALS EVENT WITH OPERATORS

const equalsOperator = () => {
    // division
    if (currentOperator === "/") {
        currentNumber = Number(previousNumber) / Number(currentNumber);
        displayNumbers();
        // Number(currentNumber) / Number(previousNumber);
        // console.log(Number(currentNumber), Number(previousNumber));
    }

    // multiplication

    if (currentOperator === "x") {
        // Number(currentNumber) * Number(previousNumber);
        currentNumber = Number(currentNumber) * Number(previousNumber);
        displayNumbers();
    }
    // minus
    if (currentOperator === "-") {
        // Number(currentNumber) - Number(previousNumber);
        currentNumber = Number(previousNumber) - Number(currentNumber);
        displayNumbers();
        // Number(currentNumber) - Number(previousNumber);
    }

    // addition
    if (currentOperator === "+") {
        // Number(currentNumber) * Number(previousNumber);
        currentNumber = Number(currentNumber) + Number(previousNumber);
        displayNumbers(); //remember -- you have this function
    }

    // if (currentOperator === "+") {
    // Number(currentNumber) + Number(previousNumber);
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
