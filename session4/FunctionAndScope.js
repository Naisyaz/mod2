//How we usually name our stuff
let this_is_my_name//Snake case
let thisIsMyName //Camel case
let ThisIsMyName //Caps for words

// Function name | Argument / Variable
function sayHello(helloName) {
  console.log("Hello " + helloName);
}

sayHello("John")

function addTwoNumbers(num1, num2){
    // console.log(addTwoNumbers); <------- Recursive function
    // console.log(num1 + num2);
    return num1 + num2;
}
console.log(addTwoNumbers(3, 3));

let sum = addTwoNumbers(2, 3)
console.log(sum)

// Mini Exercise 1
function subtractTwoNumbers(num1, num2) {
    return num1 - num2;
}   
console.log(subtractTwoNumbers(10, 7));

// Function Expressions
const multiply = function(num1, num2){
    return num1 * num2 
}
console.log(multiply(2,2))

// Mini Exercise 2
const divide = function(num1, num2){
    return num1 / num2;
}
console.log(divide(25, 5))

// Arrow Functions
// Shorthand arrow function - one line code
let myFunction = (a, b) => a * b;

// If you dont put let/const, it will default to let (let means vaariable, can be changed.)
hello = () => "Hello World!"
hello = () => "I am Aisyah"

console.log(hello());

//What is scope?
//Think of it as the accessibility of your "variables" or "arguments"

//Global scope
let global = "Outside (Global) Scope"

let functionScope = () => {
    let insideFunctionScope = "Inside (Function) Scope"
    console.log(global)
    console.log(insideFunctionScope)
}

functionScope()

console.log(global)
// console.log(insideFunctionScope)

// let tryAccessOtherFunctionVar = () => {
    //    console.log(insideFunctionScope)

// Mini Activity 2.5

function isOdd(num){
    return num % 2 == 1
}
console.log(isOdd(5))

function square(num){
    return num * num;
}
console.log(square(4))

// OR
//let square = (num) => num * num;
//console.log(square(3))

let isEven = (num) => num % 2 == 0 ? num + " is Even" : num + " is Odd";
isEven = (num) => {
    return num % 2 == 0 ? num + " is Even" : num + " is Odd";
}
console.log(isEven(8)); // True
console.log(isEven(9)); // False
