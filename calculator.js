// Function 1 - define inputNumber to return numbers
// The function will use 'currentNumber' to

let currentNumber = "";
const inputNumber = (x) => {
    currentNumber += x; //this will show what number(s) are displayed in the screen when you call 'currentNumber' in console.
    displayNumbers(x); //needed to return number in display
};

// Function 2 - Add click event to numerical buttons

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
    "/",
    "x",
    "-",
    "+",
    "=",
];
for (let i = 0; i < btnNumArray.length; i++) {
    const number = btnNumArray[i];
    const button = document.getElementById("btn-" + number);
    button.addEventListener("click", () => inputNumber(number));
}

// Function 3 - display  numbers in screen. If you don't have this, numbers will not return in the screen.
// Q1. why can the parameter for displayNumbers be empty?
const displayNumbers = () => {
    document.getElementById("display").innerText = currentNumber;
    return currentNumber;
};

// // FUNCTION 4 - CLEAR ALL
// //This is the function to clear all
const clear = () => {
    currentNumber = "";
};
// //This is defining the on click event to clear all
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
