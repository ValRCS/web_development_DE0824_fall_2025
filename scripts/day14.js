//Today we will tak about Javascript Objects, JSON, Event Target Identification
console.log("Day 14 - Javascript Objects, JSON, Event Target Identification");

//Javascript objects are collections of key-value pairs
//they are similar to Python dictionaries
//other languages call it by different names like maps, hashmaps, associative arrays, etc.

//let's create a simple object representing a person
//so variable person is an object with keys firstName, lastName, age, isEmployed, hobbies, city
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isEmployed: true,
    hobbies: ["reading", "traveling", "swimming"],
    city: "New York"
};

console.log(person);

//accessing object properties
console.log("First Name: " + person.firstName);
console.log("Last Name: " + person["lastName"]); //alternative syntax

//what is different about the above access syntax?
//dot notation is more common and easier to read
//bracket notation is useful when the key is stored in a variable or has special characters
//so . is good if key has no spaces or special characters

//let's add a new property to the object
//objects allow mutation and we can add/remove properties
person.country = "USA";
console.log("After adding country: ", person);

//we can have the key stored as a variable
let key = "profession";
person[key] = "Engineer";
console.log("After adding profession: ", person);
//we can also retrieve using variable key
console.log("Profession: " + person[key]);

//so how about key "hobbies" which is an array?
console.log("Hobbies: " + person.hobbies);
//we can simply loop through them one by one
console.log("Hobbies listed:");
// person.hobbies.forEach(hobby => console.log("- " + hobby)); // this is fine using arrow syntax
//but let's use a for of loop this time
//this works because person.hobbies is an array!
for (const hobby of person.hobbies) {
    console.log("- " + hobby);
}

//values for object could be another object as well!
person.address = {
    street: "123 Main St",
    city: "New York",
    zip: "10001"
};
console.log("After adding address: ", person);
console.log("Now we can access nested 2nd level properties:");
console.log("Street is at person.address.street: " + person.address.street);
//dot syntax is very convenient but it only works if we know the keys at coding time
//if we had address key and street key stored as variables then we would use the following:
let addrKey = "address";
let streetKey = "street";
console.log("Street using variable keys: " + person[addrKey][streetKey]);

//how about looping through all key value pairs in an object?
console.log("Looping through all key-value pairs in person object:");
//NOTE how for objects we use for...in loop NOT for...of loop !!!
for (const key in person) {
    //so for each key in our object we print key and value
    //hasOwnProperty check is good practice to avoid inherited properties - not strictly needed here
    if (person.hasOwnProperty(key)) {
        console.log(key + ": " + person[key]);
        //TODO pretty print also values that are objects currently [object Object] is printed
        //you could add an if that checks if value is object and then loop through its keys as well
    }
}

//often we have arrays of objects for example list(array) of people
let people = [
    {
        firstName: "Alice",
        lastName: "Smith",
        age: 28
    },
    {
        firstName: "Bob",
        lastName: "Johnson", 
        age: 35
    },
    {   firstName: "Charlie",
        lastName: "Brown",
        age: 22
    }
];

//so let's print out ages of these people
console.log("Ages of people in the array:");
// people.forEach(person => console.log(person.firstName + " " + person.lastName + " is " + person.age + " years old."));
for (const person of people) {
    console.log(person.firstName + " " + person.lastName + " is " + person.age + " years old.");
}

//above people structure translates nicely to tabular format
console.log("People in tabular format:");
console.table(people);
//console.table is very handy for viewing arrays of objects

//let's add a handler to button id download_json_button" and download a people.json file when clicked
const downloadButton = document.getElementById("download_json_button");
if (downloadButton) {
    downloadButton.addEventListener("click", () => {
        //convert people array to JSON string
        const jsonString = JSON.stringify(people, null, 2); //pretty print with 2 space indent
        //so inside Javascript we are dealing with objects and arrays as data
        //JSON is a text format that represents objects and arrays, JUST LIKE XML,CSV, HTML but easier for data
        //create a blob from the JSON string
        const blob = new Blob([jsonString], {type: "application/json"});
        //create a link element
        const url = URL.createObjectURL(blob);
        //we create an anchor element and trigger download
        const a = document.createElement("a");
        a.href = url;
        console.log("Downloading from url: " + url);
        a.download = "people.json";
        document.body.appendChild(a);
        a.click(); //we actually trigger the download by simulating a click! so Javascript can do this programmatically clicks
        document.body.removeChild(a);
        URL.revokeObjectURL(url); //so this was a temporary url we created, we should release the memory
    });
}

//let's now talk about event target identification

//we have a button with id "myButton    " and we want to know when it is clicked
const eventTargetButton = document.getElementById("myButton");
//we also have secondButton with id "secondButton"
const secondButton = document.getElementById("secondButton");

//let's make a function onButtonClick that handles the click event
function onButtonClick(event) {
        //inside this function event.target is the element that was clicked 
        console.log("Button with id " + event.target.id + " was clicked.");
        //we can change its text content of the target element that was clicked
        event.target.textContent = "Clicked!";

    };

    //let's add event listeners to both buttons
if (eventTargetButton) {
    eventTargetButton.addEventListener("click", onButtonClick);
}
if (secondButton) {
    secondButton.addEventListener("click", onButtonClick);
}
//NOTE how we savee the function reference without parentheses so onButtonClick is not called immediately but only when click happens

//so let's apply event target to make our car editing app interactive by allowing user to change car color by clicking color buttons
//we have following elemtents in HTML:
    // <div class="input-container">
    //     <label for="car_make_input">Car Make:</label>
    //     <input type="text" id="car_make_input" placeholder="Enter car make">
    //     <label for="car_model_input">Car Model:</label>
    //     <input type="text" id="car_model_input" placeholder="Enter car model">
    //     <label for="car_year_input">Car Year:</label>
    //     <input type="number" id="car_year_input" placeholder="Enter car year">
    //     <button id="add_car_button">Add Car</button>
    //     <button id="clear_cars_button">Clear All Cars</button>
    // </div>
    // <ul id="car_list">
    //     <!-- Car items will be added here -->
    // </ul>

//we have an array to hold car objects
let cars = []; 
//each car will be an object with make, model, year, color properties

//function to add car to array and DOM list
function addCar(make, model, year, color) {
    const car = {
        make: make,
        model: model,
        year: year,
        color: color
    };
    cars.push(car); //add to car array in memory
    console.log("Added new car: ", car);
    //also add to DOM list
    const carList = document.getElementById("car_list");
    if (carList) {
        const li = document.createElement("li");
        li.textContent = `${car.make} ${car.model} (${car.year}) - Color: ${car.color}`;
        carList.appendChild(li);
        //here we calculate the index of the car we just added
        const carIndex = cars.length - 1;
        //then add odd or even class based on index
        if (carIndex % 2 === 0) {
            li.classList.add("even");
            console.log("Added even class to car list item.");
        } else {
            li.classList.add("odd");
            console.log("Added odd class to car list item.");
        }
        //HINT this above type of approach can be used in your project 3 as well.
        //here we want to add an event listener to each car list item so that when clicked it changes color
        li.addEventListener("click", () => {
            //on click we prompt user for new color
            const newColor = prompt("Enter new color for the car:", car.color);
            if (newColor && newColor.trim() !== "") {
                car.color = newColor.trim(); //update color in object
                //we want to keep any child elements like delete button so we update only text content part
                li.firstChild.textContent = `${car.make} ${car.model} (${car.year}) - Color: ${car.color}`; //update DOM text
                console.log("Updated car color to: " + car.color);
            }
        });

        //let's add Delete me button to each car list item
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete me";
        deleteButton.style.marginLeft = "10px";
        li.appendChild(deleteButton);
        //add event listener to delete button
        deleteButton.addEventListener("click", (event) => {

            //we do this so delete button which is child of car list item does not trigger color change or any other parent event
            event.stopPropagation();

            //remove car from cars array
            const index = cars.indexOf(car); //find which index this car is at
            if (index > -1) {
                cars.splice(index, 1); //splice removes a specific index
                console.log("Deleted car: ", car);
            }
            //remove li from DOM
            li.remove();

        });
    }
}

//now we can use the addCar function when user clicks add_car_button
const addCarButton = document.getElementById("add_car_button");
if (addCarButton) {
    addCarButton.addEventListener("click", () => {
        const makeInput = document.getElementById("car_make_input");
        const modelInput = document.getElementById("car_model_input");
        const yearInput = document.getElementById("car_year_input");
        const colorInput = document.getElementById("car_color_input");
        const make = makeInput ? makeInput.value.trim() : "";
        const model = modelInput ? modelInput.value.trim() : "";
        const year = yearInput ? parseInt(yearInput.value) : NaN;
        const color = colorInput ? colorInput.value.trim() : "Unknown";
        addCar(make, model, year, color);
    });
}

//let's now add clear all cars button functionality
const clearCarsButton = document.getElementById("clear_cars_button");
if (clearCarsButton) {
    clearCarsButton.addEventListener("click", () => {
        cars = []; //clear the array
        const carList = document.getElementById("car_list");
        if (carList) {
            carList.innerHTML = ""; //clear the DOM list -very quick and dirty way to remove all children
            console.log("Cleared all cars.");
            //alternative would have been to loop through and remove each child one by one - both ways work
        }
    });
}

//now we want to add an event listener to indivudal cars so they can change their colors when clicked
