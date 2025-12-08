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