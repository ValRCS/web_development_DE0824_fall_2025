//we will learn about Javascript Arrays and DOM Input Events
console.log("Day 13 - Javascript Arrays, DOM Input Events");

//I could have made it constant but let's show that arrays can be modified
let fruits = ["Apple", "Banana", "Cherry"];
//so fruits will be our global array of fruit names
//part of so called global state of the application

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

//let's pop the last item from the array
const lastFruit = fruits.pop(); //removes and returns the last item
console.log("Popped last fruit: " + lastFruit);
console.log("Fruits after popping last item:");
fruits.forEach(fruit => console.log(fruit));
//let's get rid of elderberry from the start
const firstFruit = fruits.shift(); //removes and returns the first item
console.log("Removed first fruit: " + firstFruit);
console.log("Fruits after removing first item:");
fruits.forEach(fruit => console.log(fruit));

//let's make a function that given a dom id for ul or ol will add a fruit
function addFruitToList(domId, fruit) {
    const listElement = document.getElementById(domId);
    if (listElement) {
        const listItem = document.createElement("li");
        listItem.textContent = fruit;
        listElement.appendChild(listItem);
    } else {
        console.log("List element with ID " + domId + " not found.");
    }
}

//let's add all fruits to our list in the DOM
// fruits.forEach(fruit => addFruitToList("fruits_list", fruit));

//this shows how arrays help us manage collections of data easily!

//let's also add odd or even class to each list item based on index
for (let i = 0; i < fruits.length; i++) {
    const listElement = document.getElementById("fruits_list");
    if (listElement) {
        const listItem = document.createElement("li");
        listItem.textContent = fruits[i];
        if (i % 2 === 0) {
            listItem.classList.add("even");
        } else {
            listItem.classList.add("odd");
        }
        listElement.appendChild(listItem);
    } else {
        console.log("List element with ID fruits_list not found.");
    }
} 

//let's make a function that adds a fruit to the array and the DOM list
//it also uses odd or even class based on current length of the array
//it will have following parameters:
// item - the fruit name to add
// fruitArray - the array to add the fruit to
// domId - the id of the ul or ol element in the DOM
function addFruit(item, fruitArray, domId) {
    fruitArray.push(item);
    console.log("Added new fruit: " + item);
    const listElement = document.getElementById(domId);
    if (listElement) {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        if ((fruitArray.length - 1) % 2 === 0) {
            listItem.classList.add("even");
        } else {
            listItem.classList.add("odd");
        }
        listElement.appendChild(listItem);
    } else {
        console.log("List element with ID " + domId + " not found.");
    }
}

//so we have an input with id item_input where we can enter a new fruit
const itemInput = document.getElementById("item_input");
if (itemInput) {
    //we listen for keydown event
    itemInput.addEventListener("keydown", function(event) {
        //check if the key pressed is Enter
        if (event.key === "Enter") {
            const newItem = itemInput.value.trim();
            itemInput.value = "";
            if (newItem !== "") {
                //add to fruits array and DOM list
                addFruit(newItem, fruits, "fruits_list");
            }
            //old way without shared function
            // if (newItem !== "") {
            //     //add to fruits array   
            //     fruits.push(newItem);
            //     console.log("Added new fruit: " + newItem);
            //     //add to the list in DOM
            //     addFruitToList("fruits_list", newItem);
            //     //clear the input field
                
            // }
        };
    });
}

//add_item_button to add item on button click
const addItemButton = document.getElementById("add_item_button");
if (addItemButton) {
    addItemButton.addEventListener("click", function() {
        const newItem = itemInput.value.trim();
        itemInput.value = "";
        if (newItem !== "") {
            //old way without shared function
            // //add to fruits array   
            // fruits.push(newItem);
            // console.log("Added new fruit: " + newItem);
            // //add to the list in DOM
            // addFruitToList("fruits_list", newItem);
            // //clear the input field
            addFruit(newItem, fruits, "fruits_list");
        }
    });
}

//now let's handle delete_last_button to remove last item
const deleteLastButton = document.getElementById("delete_last_button");
if (deleteLastButton) {
    deleteLastButton.addEventListener("click", function() {
        if (fruits.length > 0) {
            const removedItem = fruits.pop();
            console.log("Removed last fruit: " + removedItem);
            //also remove from the DOM list
            const listElement = document.getElementById("fruits_list");
            if (listElement && listElement.lastChild) {
                listElement.removeChild(listElement.lastChild);
            } else {
                console.log("No items to remove from the list in DOM.");
            }
        } else {
            console.log("No fruits to remove.");
        }
    });
}

//let's add clear_everything button functionality
const clearEverythingButton = document.getElementById("clear_everything");
if (clearEverythingButton) {
    clearEverythingButton.addEventListener("click", function() {
        //clear the fruits array
        fruits = []; //we overwrite with a new empty array
        console.log("Cleared all fruits.");
        //clear the list in the DOM
        const listElement = document.getElementById("fruits_list");
        if (listElement) {
            //while there is a first child we remove it
            while (listElement.firstChild) {
                listElement.removeChild(listElement.firstChild);
            }
        } else {
            console.log("List element with ID fruits_list not found.");
        }
    });
}

//TODO make functions for delete and clear everything to avoid code duplication
//this would be important if I had other ways of deleting items or clearing the list
//then I could just call those functions from multiple places