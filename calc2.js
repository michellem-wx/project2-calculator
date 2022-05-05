// Function 1 - define inputNumber to return numbers
// The function will use 'currentNumber' to..

let currentNumber = ""; // placeholder as a string. starting at nothing
const inputNumber = (n) => {
    //inputNumber is adding to the end of currentNumber
    currentNumber += n; //this will show what number(s) are displayed in the screen when you call 'currentNumber' in console.
    displayNumbers(); //needed to return number in display. calling displayNumbers function!!
};

// Function 2 - DISPLAY NUMBERS in screen. If you don't have this, numbers will not return in the screen.
const displayNumbers = () => {
    document.getElementById("display").innerText = currentNumber;
    // return currentNumber;
};

// Function 3 - Add click event to numerical buttons

const btnNumArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
for (let i = 0; i < btnNumArray.length; i++) {
    //not keeping track of the value
    const number = btnNumArray[i];
    const button = document.getElementById("btn-" + number);
    button.addEventListener("click", () => inputNumber(number));
}

// NEW FUNCTION: OPERATOR EVENT -- this is where inputOperator event has been defined (look at function 7: last line: your event listner after click)
let previousNumber = ""; //live outside the function
let currentOperator = ""; // placeholder
const inputOperator = (op) => {
    currentOperator = op;
    // create previousNumber variable
    // once operator is selected, save currentNumber as previousNumber
    // how do i save currentNumber as previousNumber? where does it go?
    previousNumber = currentNumber; //reassigning
    currentNumber = "";
};

// FUNCTION 7
const operatorArray = ["/", "x", "-", "+"];
for (let i = 0; i < operatorArray.length; i++) {
    const number = operatorArray[i];
    const button = document.getElementById("btn-" + number);
    button.addEventListener("click", () => inputOperator(number));
}

// FUNCTION: EQUALS EVENT
// new function for equals button:

const equalsOperator = () => {
    // division
    if (currentOperator === "/") {
        Number(currentNumber) / Number(previousNumber);
        console.log(Number(currentNumber) / Number(previousNumber));
    }
    // multiplication

    if (currentOperator === "*") {
        Number(currentNumber) * Number(previousNumber);
        console.log(Number(currentNumber) * Number(previousNumber));
    }
    // minus
    if (currentOperator === "-") {
        Number(currentNumber) - Number(previousNumber);
        console.log(Number(currentNumber) - Number(previousNumber));
    }
    // addition

    if (currentOperator === "+") {
        Number(currentNumber) + Number(previousNumber);
        return (displayNumbers.textContent = number);
        // console.log(Number(currentNumber) + Number(previousNumber));
    }
};

// Equals event
const equalsButton = document.getElementById("btn-=");
equalsButton.addEventListener("click", () => equalsOperator());

// // FUNCTION - CLEAR ALL
// //This is the function to clear all
const clear = () => {
    currentNumber = "";
    document.getElementById("display").innerText = currentNumber; // this is removing the currentNumber
};

//This is defining the on click event to clear all
const clearAll = document.getElementById("btn-c");
clearAll.addEventListener("click", () => clear());

// // FUNCTION 2 - Create a click event for numbers
// button = document.getElementById("one");
// button.addEventListener("click", () => inputNumber("1"));

// button = document.getElementById("two");
// button.addEventListener("click", () => inputNumber("2"));

// button = document.getElementById("three");
// button.addEventListener("click", () => inputNumber("3"));

// button = document.getElementById("four");
// button.addEventListener("click", () => inputNumber("4"));

// // FUNCTION 3 - DISPLAY FUNCTION - accessing the div display and add argument (num) in the display
// const displayNumbers = (num) => {
//     document.getElementById("display").innerText = num;
//     return num;
// };

// // FUNCTION 1 - Return number: when you select a number, it will return in the display
// let currentNumber = ""; // atm - will be an empty string. but the function will return the inputNumber
// const inputNumber = (x) => { //the argument you add in the parameter (i.e. number) - join together and stored in currentNumber
//     currentNumber += x; //keep adding the arguments together
//     displayNumbers(x); //anything can be added here
// };
// // console.log(currentNumber);

// // FUNCTION 4 - CLEAR ALL
// //This is the function to clear all
// const clear = () => {
//     currentNumber = "";
// };

// //This is defining the on click event to clear all
// const clearAll = document.getElementById("clear");
// clearAll.addEventListener("click", () => clear());

// // button = document.getElementById("two");
// // button.addEventListener("click", () => inputNumber("2"));

// // button = document.getElementById("three");
// // button.addEventListener("click", () => inputNumber("3"));

// // button = document.getElementById("four");
// // button.addEventListener("click", () => inputNumber("4"));

// // button = document.getElementById("five");
// // button.addEventListener("click", () => inputNumber("5"));

// // button = document.getElementById("six");
// // button.addEventListener("click", () => inputNumber("6"));

// // button = document.getElementById("seven");
// // button.addEventListener("click", () => inputNumber("7"));

// // button = document.getElementById("eight");
// // button.addEventListener("click", () => inputNumber("8"));

// // button = document.getElementById("nine");
// // button.addEventListener("click", () => inputNumber("9"));

// // button = document.getElementById("zero");
// // button.addEventListener("click", () => inputNumber("0"));

// // Function 2 - define inputNumber to return number

// let currentNumber = "";
// const inputNumber = (x) => {
//     return (currentNumber += x);
//     displayNumbers = x;
// };

// // Function 3 - displayNumber: show in display
// const displayNumbers = (num) => {
//     document.getElementById("display").innerText = num;
//     return num;
// };

// // FUNCTION 1 - CLICK EVENT
// button = document.getElementById("one");
// button.addEventListener("click", () => inputNumber("1"));

// // FUNCTION 2 - DISPLAY FUNCTION
// const displayNumbers = (num) => {
//     document.getElementById("display").innerText = num;
//     return num;
// };

// // FUNCTION 3 - RETURN NUMBER
// let currentNumber = "";
// const inputNumber = (x) => {
//     currentNumber += x;
//     displayNumbers(x);
// };
// console.log(currentNumber);

// // FUNCTION 4 - CLEAR ALL
// const clear = () => {
//     currentNumber = "";
// };

// const clearAll = document.getElementById("clear");
// clearAll.addEventListener("click", () => clear());
