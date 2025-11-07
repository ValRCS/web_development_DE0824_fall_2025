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
