//we will learn about Javascript Arrays and DOM Input Events
console.log("Day 13 - Javascript Arrays, DOM Input Events");

//I could have made it constant but let's show that arrays can be modified
let fruits = ["Apple", "Banana", "Cherry"];

//first how many items in the array?
console.log("Number of fruits: " + fruits.length); // Output: Number of fruits: 3
console.log(fruits[0]); // Output: Apple
//note that arrays are zero-indexed, so first element is at index 0!

//let's add some fruit with letter D
fruits.push("Date"); //adds Date to the end of the array
console.log("After adding Date, number of fruits: " + fruits.length); // Output: After adding Date, number of fruits: 4

//so how would you access the last element of the array no matter how many items are there?
console.log("Last fruit is: " + fruits[fruits.length - 1]); // Output: Last fruit is: Date
//unlike Python we cannot use negative indexing in Javascript

//let's add something with letter E at the start
fruits.unshift("Elderberry"); //adds Elderberry to the start of the array
//note generally unshift is slower than push as it has to move all existing elements
console.log("After adding Elderberry, number of fruits: " + fruits.length);
//how about last item?
console.log("Last fruit is: " + fruits[fruits.length - 1]); // Output: Last fruit is: Date

//so now let's print all fruits using a loop
//there are a couple of ways of doing this
//first let's do a classical for loop
console.log("Fruits in the array (using for loop):");
//so while our i is less than length of array we print the item at index i
for (let i = 0; i < fruits.length; i++) {
    // console.log(fruits[i]);
    //let's print index as well
    console.log("Index " + i + ": " + fruits[i]);
    //we can do more stuff here if needed
}

//above is handy if you need index for some reason
//but more common way is to use forEach method of the array
console.log("Fruits in the array (using forEach):");
fruits.forEach(fruit => console.log(fruit));
//so fruit is a variable that takes each value from the fruits array in turn
//above is using arrow function syntax
//fruit => console.log(fruit) is actually a function that takes one argument fruit and calls console.log with it
//arrow functions are good for small functions like this

//there is another way using for...of loop
//this guarantees going through each item in the array
console.log("Fruits in the array (using for...of loop):");
for (const fruit of fruits) {
    console.log(fruit);
    //again we can do more stuff here if needed
}