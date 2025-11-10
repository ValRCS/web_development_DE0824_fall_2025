//Day 11 - Switch Statement, While and For Loops
console.log("Day 11 - Switch Statement, While and For Loops");
// Switch Statement Example
//let's get day of the week automatically
let today = new Date();
//let's print full day to console first
console.log("Today is: " + today.toString());
let day = today.getDay(); //0-6 (0=Sunday, 1=Monday, ..., 6=Saturday)
//let's print the numeric day to console
console.log("Numeric day of the week: " + day);

//let's start with blank message
let dayMessage = "";
//switch statement to determine the day name
switch (day) {
    case 0:
        dayMessage = "Today is Sunday.";
        break;
    case 1:
        dayMessage = "Today is Happy Monday.";
        break;
    case 2:
        dayMessage = "Today is Tuesday.";
        break;
    case 3:
        dayMessage = "Today is Wednesday.";
        break;
    case 4:
        dayMessage = "Today is Thursday.";
        break;
    case 5:
        dayMessage = "Today is Friday.";
        break;
    case 6:
        dayMessage = "Today is Saturday.";
        break;
    default: //in this case this is basically aliens landing
        dayMessage = "Invalid day.";
}
//now we find a specific element by ID and set its text content to our message
document.getElementById("switch_example").textContent = dayMessage; //I override the placeholder text

//note with numeric indexes we could have stored the day names in an array and just accessed them directly..
//that will be covered another day!

//now let us get month by name and use switch statement again and create new message
let customMonthMessage = "";
let month = today.getMonth(); 
//Javascript offers a way to get month name directly 
let fullMonthName = today.toLocaleString('default', { month: 'long' });
console.log("Numeric month of the year: " + month);
console.log("Full month name: " + fullMonthName);

//so instead of using numbers we will use the actual month name in switch

switch (fullMonthName) {
    case "January":
        customMonthMessage = "It's January, the start of a new year!";
        break;
    case "February":
        customMonthMessage = "It's February, the month of love!";
        break;
    case "March":
        customMonthMessage = "It's March, spring is coming!";
        break;
    case "April":
        customMonthMessage = "It's April, time for showers!";
        break;
    case "May":
        customMonthMessage = "It's May, flowers are blooming!";
        break;
    case "June":
        customMonthMessage = "It's June, the start of summer!";
        break;
    case "July":
        customMonthMessage = "It's July, time for vacations!";
        break;
    case "August":
        customMonthMessage = "It's August, summer is in full swing!";
        break;
    case "September":
        customMonthMessage = "It's September, back to school!";
        break;
    case "October":
        customMonthMessage = "It's October, time for Halloween!";
        break;
    case "November":
        customMonthMessage = "It's November, time to give thanks!";
        // break; //allowed but generally not a good idea so what will happen if we forget break here?
        break;
    case "December":
        customMonthMessage = "It's December, holiday season!";
        break;
    default:
        customMonthMessage = "Invalid month.";
}
document.getElementById("another_switch_example").textContent = customMonthMessage;

//let's illustrate fall through by showing seasons based on month
let seasonMessage = "";
switch (fullMonthName) {
    case "December":
    case "January":
    case "February": //so either of all these months will lead to same outcome
        seasonMessage = "It's Winter season.";
        break;
    case "March":
    case "April":
    case "May":
        seasonMessage = "It's Spring season.";
        break;
    case "June":
    case "July":
    case "August":
        seasonMessage = "It's Summer season.";
        break;
    case "September":
    case "October":
    case "November":
        seasonMessage = "It's Fall season.";
        break;
}
document.getElementById("yet_another_switch_example").textContent = seasonMessage;

//I could have achieved the above with if..else if..else but switch is cleaner when checking same variable against multiple values
//so if (fullMonthName === "December" || fullMonthName === "January" || fullMonthName === "February") { ... } etc.

//so downside of switch is that it checks for strict equality (===) so no type coercion
//but if you need like a range of values then if..else is better suited