console.log("Welcome to Day 12 JavaScript file!");
//Day 12 - Functions, DOM Events
console.log("Day 12 - Functions, DOM Events");

console.log("Functions are reusable blocks of code that perform a specific task.");
console.log("They can take inputs (parameters) and return outputs (return values).");
//let's make a simple greet function
function greet(name) {
    //I can decide to make a more complex greeting later
    //and I will only have to change the code in one place!
    return "Hello, " + name + "!";
}
//at this stage we have a function defined but not yet used!
console.log(greet("Alice")); // Output: Hello, Alice!

//The beauty of this function is that we can call it multiple times with different names
console.log(greet("Bob")); // Output: Hello, Bob!

//in fact this function is sort of greeting factory!
//we can save the next greeting to a variable
const greetingForCharlie = greet("Charlie"); //better to start with const if you do not plan to reassign
console.log(greetingForCharlie); // Output: Hello, Charlie!

//let's compare with another type of function that does NOT return a value but just performs an action
//so function that prints a greeting to console directly
function printGreet(name) {
    console.log("Hi there, " + name + "!");
    //note we are not returning anything here from this function
    //this is a function with side effects (printing to console in this case very common scenario)
    //side effects are actions that affect something outside the function itself
}

printGreet("Diana"); // Output: Hi there, Diana!
//note if we try to save the result of printGreet to a variable we get undefined
const result = printGreet("Eve"); // Output: Hi there, Eve!
console.log("Result of printGreet function is: " + result); // Output: Result of printGreet function is: undefined
//so we had NO NEED to call printGreet inside console.log because it already prints to console itself

//functions can have NO parameters, so fixed function
function sayHelloWorld() {
    console.log("Hello, World!"); //again side-effect - affects outside world by printing to console
}

sayHelloWorld(); // Output: Hello, World!

//function with multiple parameters
function addNumbers(a, b) {
    return a + b; //returns sum of two numbers
}
const sum = addNumbers(5, 10);
console.log("Sum of 5 and 10 is: " + sum); // Output: Sum of 5 and 10 is: 15

//let's talk about a useful side-effect adding text to some DOM element
//so let's make a function that will take DOM element ID and some text and will add that text to the element
function addTextToElement(elementId, text) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent += text; //append text to existing content
    } else {
        console.log("Element with ID " + elementId + " not found.");
    }
}

//let's make a function that replaces text in an element
function replaceTextInElement(elementId, newText) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = newText; //replace existing content
    } else {
        console.log("Element with ID " + elementId + " not found.");
    }
}

//so essentially we have hidden /abstracted away the DOM manipulation details inside this function
//now we can use this function to add text to any element by ID
replaceTextInElement("function_example_div", "This text created using a function! ");
//let's add more text to show it appends
addTextToElement("function_example_div", "Here is some more text added via the same function. ");

//let's create a function that creates a list item given a list ID and item text
function addListItem(listId, itemText) {
    const listElement = document.getElementById(listId); 
    if (listElement) {
        const listItem = document.createElement("li"); //we create a new standalone list item
        listItem.textContent = itemText; //we give it some text
        listElement.appendChild(listItem); //crucial step - we add the new list item to the existing list in the DOM
    } else {
        console.log("List element with ID " + listId + " not found.");
    }   
}

//let's add some items to our list using the function
addListItem("function_ul", "Fruits");
addListItem("function_ul", "Vegetables");
addListItem("function_ul", "Grains");

//in fact we could have stored an array of some healthy foods and looped through them to add to the list
const healthyFoods = ["Nuts", "Seeds", "Legumes", "Lean Proteins"]; //this is an array of healthy foods
//so array is a collection of items stored in a single variable
//now we loop through the array and add each item to the list using our function
healthyFoods.forEach(food => addListItem("function_ul", food));
//so food is a variable that takes each value from the healthyFoods array in turn

//this shows how functions help us reuse code and keep our code organized!

//old way of looping throuh array is also possible using for loop
//let's have three more healthy foods
const moreHealthyFoods = ["Fish", "Whole Grains", "Mushrooms"];
//so we can get length and access each item by index, starting with 0 (not 1)
for (let i = 0; i < moreHealthyFoods.length; i++) {
    console.log(`Adding more healthy food index ${i}: ` + moreHealthyFoods[i]);
    addListItem("function_ul", moreHealthyFoods[i]);
}

//so trend is to avoid explicit for loops when index is not needed
//it is fine to use for loops when you need index or need to loop in reverse order etc.