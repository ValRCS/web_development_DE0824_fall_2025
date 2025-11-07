console.log("Day 10 - Javascript Comparison, Logical Operators, Branching");

// Example of comparison operators
let a = 10;
let b = 20;
let c= "10";

// Strict equality and inequality

console.log("USE a === b:", a === b); // false
console.log("USE a !== b:", a !== b); // true
console.log("AVOID a == c:", a == c); // true
console.log("AVOID a != c:", a != c); // false
console.log("a < b:", a < b); // true
console.log("a <= b:", a <= b); // true
console.log("a > b:", a > b); // false
console.log("a >= b:", a >= b); // false

// Example of logical operators
let x = 5;
let y = 10;

console.log("Using logical operators we can combine multiple truthy or falsy values:");
console.log("USE (x < y) && (y > 5):", (x < y) && (y > 5)); // true
console.log("USE (x < y) || (y < 5):", (x < y) || (y < 5)); // true
console.log("USE !(x < y):", !(x < y)); // false

//let's show some branching examples
if (x < y) {
    console.log("x is less than y");
} else {
    console.log("x is not less than y");
}

console.log("We can also have if-else if-else structures, ORDER IS IMPORTANT!:");
console.log("Again only one of the blocks will execute:");
a = 15;
b = 15;
if (a > b) {
    console.log("a is greater than b");
    console.log(`a is ${a}, b is ${b}`); //FIXME this line is repeated in each block
} else if (a === b) {
    console.log("a is equal to b");
    console.log(`a is ${a}, b is ${b}`);
} else {
    console.log("a is less than b");
    console.log(`a is ${a}, b is ${b}`);
}
//note in this case console.log(`a is ${a}, b is ${b}`); is repeated in each block, we can optimize this using nested ifs
//we could have printed it at the end outside the if-else if-else structure
