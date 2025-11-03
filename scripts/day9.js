// This is a comment in Javascript it does nothing for now
//console.log is used for debugging purposes
//it prints the content inside the parentheses to the console in your browser
//this console is available in developer tools (F12 in most browsers)
console.log("Hello, welcome to Day 9 of Web Development!");
//typically console.log is used for debugging purposes
//it is turned off in final production code usually

//let's change background color of header_id element
document.getElementById("header_id").style.backgroundColor = "lightblue";
console.log("Changed background color of header_id to lightblue");

console.log("End of day9.js");

//let's get our output_id element for our output
//so I've created an instruction to get the element by its ID
//note I use const because I don't plan to change this variable later
const outputElement = document.getElementById("output_id");
//so instead of writing document.getElementById("output_id") every time
//I can just use outputElement variable

//so rule of thumb we use const unless we plan to change the variable later
//when we need something that changes we use let keyword

//in old days we only had var keyword but it had some issues so we avoid using it now

//let's print some text to that element
outputElement.textContent = "This text is added by Javascript code in day9.js file.";
console.log("Added text to output_id element");

//let's start with some basic math operations
//we want to append the results to output_id element
const a = 10; //this data could be coming from user input or outside source
const b = 4;
const result = a + b;
outputElement.textContent += `\nThe sum of ${a} and ${b} is ${result}.`;

console.log("Added sum of a and b to output_id element");

//you can try other operations as well
const difference = a - b;
outputElement.textContent += `\nThe difference of ${a} and ${b} is ${difference}.`;

//let's print all mathemtical operations that Javascript supports and put it into a paragraph
const multiplication = a * b;
const division = a / b;
const modulus = a % b;
const exponentiation = a ** b;

outputElement.textContent += `\nThe multiplication of ${a} and ${b} is ${multiplication}.`;
outputElement.textContent += `\nThe division of ${a} by ${b} is ${division}.`;
outputElement.textContent += `\nThe modulus of ${a} and ${b} is ${modulus}.`;
outputElement.textContent += `\nThe exponentiation of ${a} to the power of ${b} is ${exponentiation}.`;

console.log("Added all mathematical operations to output_id element");

//let's add current date and time to footer_id element
//so again typically we find the element first
//we store it in a variable for easier access
//again here we use a const because we don't plan to change this variable later
const footerElement = document.getElementById("footer_text");
const currentDate = new Date();
footerElement.textContent += `\nCurrent date and time: ${currentDate.toString()}`;
console.log("Added current date and time to footer_text element");

//again console.log is not required just using it for debugging and demonstration purposes
