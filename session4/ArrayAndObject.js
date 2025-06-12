
let fruits = ["Apple", "Banana", "Strawberry", "Guava", "Mango"];
//console.log(fruits)
//console.log(fruits[0])

//Before push
// console.log(fruits[fruits.length - 1]);

// Push - Adds an element at the end of array
// fruits.push("Orange");

//After push
// console.log(fruits[fruits.length - 1]);

// Pop - Removes the last element from the array
// fruits.pop()

//After pop
// console.log(fruits[fruits.length - 1])

// Splice - Remove element at a position followed by movement to the right
// fruits.splice(0, 1)

// After splice
// console.log(fruits)

//Fruit at position 1 is "fruit"
fruits.forEach(function(fruit, i){
    console.log("Fruit " + (i + 1) + ": " + fruit);
})

for(let fruit of fruits){
    console.log(fruit)
}

console.log("==========================")
// Objects
// Objects are just arrays with an identifier for their index.
let myProfile = {
    name: "Aisyah",
    age: 26,
    email: "nurulaisyahazman99@gmail.com",
    hobbies: ["Reading", "Sports", "Movies"]
}
console.log(myProfile.name)
console.log(myProfile['name'])

console.log(myProfile.age)
console.log(myProfile.hobbies[0])


/* Mini Activity
Create an array of 5 of your favorite movies.

Log the first and last movie.

Use push() to add one, and pop() to remove one.

Create an object profile with your name, age, and an array of 3 hobbies.

Log your second hobby.

*/

let Movies = ["POTC", "John Wick", "Flipped", "Despicable Me", "Hotel Transylvania"]
console.log("First Movie: " + Movies[0])
console.log("Last Movie: " + Movies[Movies.length - 1])

Movies.push("The Proposal")
console.log("Last Movie: " + Movies[Movies.length - 1])

Movies.pop()
console.log("Last Movie: " + Movies[Movies.length - 1])

let newProfile = {
    name: "Aisyah",
    age: 26,
    movies: Movies
}
console.log(newProfile.movies[0])




