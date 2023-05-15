//! Exercises: Level 1
//? exercise: 1
// Get user input using prompt(“Enter your age:”).
// If user is 18 or older , give feedback:'You are old enough to drive'
// but if not 18 give another feedback stating to wait for the number
// of years he needs to turn 18.


let age = prompt("Enter your age:");

if (age >= 18) {
    console.log("You are old enough to drive.");
} else {
    let yearsToWait = 18 - age;
    console.log("Sorry, you are not old enough to drive. Please wait for " + yearsToWait + " more year(s).");
}

//? exercise: 2
/*
Compare the values of myAge and yourAge using if … else.
Based on the comparison and log the result to console stating
who is older (me or you).
 Use prompt(“Enter your age:”) to get the age as input.
 */


let myAge = prompt("Enter my age:");
let yourAge = prompt("Enter your age:");

if (myAge > yourAge) {
    let difference = myAge - yourAge;
    console.log("You are " + difference + " years older than me.");
} else {
    let difference = yourAge - myAge;
    console.log("You are " + difference + " years older than me.");
}


// ? exercise: 3

/*
If a is greater than b return 'a is greater than b'
else 'a is less than b'. Try to implement it in to ways:
1.using if else
2.ternary operator.
*/

//1
let a = 3;
let b = 2;

if (a > b) {
    console.log("a is greater than b");
} else {
    console.log("a is less than b");
}

//2
let c = 5;
let d = 6;

(c > d) ? console.log("c is greater than d") : console.log("c is less than d");


//? exercise: 4

/* Even numbers are divisible by 2 and the remainder is zero.
How do you check, if a number is even or not using JavaScript?*/

let number = prompt("Enter a number");

if (number % 2 == 0) {
    console.log(number + " is an even number");
} else {
    console.log(number + " is an odd number");
}


//! Exercises: Level 2

//? exercise: 1

/*
Write a code which can give grades to students according to theirs scores:
---90-100, A
---70-89, B
---60-69, C
---50-59, D
---0-49, F
 */

let score = prompt("Enter the student's score:")

let grade;

if (score >= 90 && score <= 100) {
    grade = 'A';
} else if (score >= 70 && score <= 89) {
    grade = 'B';
} else if (score >= 60 && score <= 69) {
    grade = 'C';
} else if (score >= 50 && score <= 59) {
    grade = 'D';
} else if (score >= 0 && score <= 49) {
    grade = 'E';
} else {
    grade = "invalid score";
}
console.log("the studnt's grade: " + grade);


//? exercise: 2

/*Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer*/

let userInput1 = prompt("Enter the month");
let month = userInput1.toLocaleLowerCase();
let season;

if (month === "september" || month === "october" || month === "november") {
    season = "Autumn";
} else if (month === "december" || month === "january" || month === "february") {
    season = "Winter";
} else if (month === "march" || month === "april" || month === "may") {
    season = "Spring";
} else if (month === "june" || month === "july" || month === "august") {
    season = "Summer";
} else {
    season = "Invalid input";
}

console.log("The season corresponding to the input month is: " + season);


//? exercise: 3

/* Check if a day is weekend day or a working day. Your script will take day as an input.*/

let userInput2 = prompt("What is the day today?");
let day = userInput2.toLocaleLowerCase();

let message;

switch (day) {
    case 'saturday':
    case 'sunday':
        message = day + " is a weekend";
        break;
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
        message = day + ' is a working day.';
        break;

    default:
        message = 'invalid input.';
        break;
}
console.log(message);


//! Exercise: Level 3

/*
Write a program which tells the number of days in a month.
  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days.

*/

let userInput = prompt("Enter a month: ");
let month2 = userInput.toLocaleLowerCase();

let days;

switch (month2) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        days = 31;
        break;
    case "april":
    case "june":
    case "september":
    case "november":
        days = 30;
        break;
    case "february":
        days = "28 or 29";
        break;
    default:
        days = "invalid input.";
        break;
}
console.log(`${userInput} has ${days} days`);
