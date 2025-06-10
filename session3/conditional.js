if (false) {
    console.log("Condition is true!");
}else {
    console.log("Condition is false!");
}   

x = 15
if (x < 10) {
    console.log("x is smaller than 10");
}else {
    console.log("x is larger than 10");
}

console.log(x == 10)
// == is used to compare values between left and right
// < is smaller than
// > is larger than
// === checks for value + type
// != not equal
// !==  not equal value + type

if(5 != 1){
    console.log("Statement is true");
}else{
    console.log("Statement is false");
}

console.log("------------------------------------------------");

// Logic Gates
// AND, OR, NOT, NAND, XOR, XAND, NOR
// will only need 2 of them, 
// AND and OR

if(true && true){
    console.log("Logic AND gates true");    
}else{
    console.log("Logic AND gates false");
}

if(true || false){
    console.log("Logic OR gates true");
}else{
    console.log("Logic OR gates false");
}

x = 5
y = 10
if(x < 7 && y > 8){
    console.log("x is smaller than 7 AND y is larger than 8");
}else{
    console.log("x is not smaller than 7 OR y is not larger than 8");
}

//To declare variables, use:-
//let, var (older, technically let), const
//let username = )
const correctUsername = "aisyah"
const correctPassword = "12345"

let username = prompt("Type your username")
let password = prompt("Type your password")

if (username == correctUsername && password == correctPassword){
    console.log("Login successful!")
}else{
    console.log("Login failed")
}

