// 'if' conditional

/* Task - 1
 Create a program that will store the value of the cat's weight. 
If the cat weighs less than 5 kg, then the cat is small and still needs to be fed, 
if it weighs more than 5, then the cat is very fluffy and needs to be combed :) */


let catWeight = 6; // You can change the value to test different cases

if (catWeight < 5) {
  console.log("The cat is small and still needs to be fed.");
} else {
  console.log("The cat is very fluffy and needs to be combed.");
}


/* Task - 2
Write an if condition to check if the age value is NOT between 18 and 50 inclusive, if it is not, then hire */

let age = 25; // You can change the value to test different cases

if (age >= 18 && age <= 50) {
  console.log("Hire");
} else {
  console.log("Do not hire");
}


/* Task - 3
Write a program for checking grades.
If the grade is A and B, the student has passed the exam
If C and D - we send them for a retake
If E - expulsion. */

let grade = "B"; // You can change the value to test different cases

if (grade === "A" || grade === "B") {
  console.log("The student has passed the exam.");
} else if (grade === "C" || grade === "D") {
  console.log("Send the student for a retake.");
} else if (grade === "E") {
  console.log("Expulsion.");
} else {
  console.log("Invalid grade");
}

/* Task - 4 (Not required)
 Write a small program "Guess the number", where you need to enter a number from the console and tell the user whether he entered less or more or guessed the number. */


// "Guess the number" program
let secretNumber = 42; // You can change the secret number
let guesedNumber = 56;

if (guesedNumber < secretNumber) {
  console.log("Too low! Try again.");
} else if (guesedNumber > secretNumber) {
  console.log("Too high! Try again.");
} else {
  console.log("Congratulations! You guessed the number!");
}


 /* Task - 5 (Not required)
Rewrite the if statement using the conditional operator '?

if (height < 140) {
  console.log("Заборонено на атракціон");
} else {
    console.log("Проходьте, будь ласка!");
}
 */

let height = 170; // You can change the height value

let message =
  height < 140 ? "Forbidden to use attraction" : "Проходьте, будь ласка!";
console.log(message);

/* Task - 6 (Not required)

Rewrite if..else using several ternary operators '? 

if (height < 50) 
{
     console.log("Forbidden to use attraction"); 
    } else if (height >= 50 && height < 80) {
         console.log("Permit - attraction №1");
         } else if (height >= 80 && height < 120) {
             console.log("Permit - attraction №1 or №2"); 
            } else { 
                console.log("Permit - All"); }
*/

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 'switch' conditinal

let height_1 = 40; // You can change the height value

let result =
  height < 50
    ? "Forbidden to use attraction"
    : height >= 50 && height < 80
    ? "Permit - attraction №1"
    : height >= 80 && height < 120
    ? "Permit - attraction №1 or №2"
    : "Permit - All";

console.log(result);


/* Task - 7
 Create a program that will print the day of the week according to the day number. */


let dayNumber = 3; // You can change the value to test different cases

switch (dayNumber) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day number");
}

/* Task - 8
 Make a program that will display the time of year a particular month number belongs to (for example, I enter "1" and it tells me that it is winter, I enter "5" - spring, etc.) */

let monthNumber = 5; // You can change the value to test different cases

if (monthNumber >= 1 && monthNumber <= 3) {
  console.log("Winter");
} else if (monthNumber >= 4 && monthNumber <= 6) {
  console.log("Spring");
} else if (monthNumber >= 7 && monthNumber <= 9) {
  console.log("Summer");
} else if (monthNumber >= 10 && monthNumber <= 12) {
  console.log("Autumn");
} else {
  console.log("Invalid month number");
}

 /* Task - 9
 Rewrite the "switch" into an "if"
 
 switch (browser) {
  case 'Edge':
    console.log( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    console.log( 'We hope that this page looks ok!' );
}
 */


let browser = "Chrome"; // You can change the value to test different cases

if (browser === "Edge") {
  console.log("You've got the Edge!");
} else if (
  browser === "Chrome" ||
  browser === "Firefox" ||
  browser === "Safari" ||
  browser === "Opera"
) {
  console.log("Okay we support these browsers too");
} else {
  console.log("We hope that this page looks ok!");
}


/* Task - 10 (Not required)
Rewrite "if" into "switch" 

let age = 16;
if (age < 16) {
    console.log( 'We cant hire u!' );
}
if (age >= 18) {
  console.log( 'U can take full time job' );
}

if (age == 16 || a == 17) {
  console.log( 'U can take part time job' );
}
*/

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let age_1 = 3;

switch (true) {
  case age_1 < 16:
    console.log("We cant hire u!");
    break;
  case age_1 >= 18:
    console.log("U can take full-time job");
    break;
  case age_1 === 16 || age_1 === 17:
    console.log("U can take part-time job");
    break;
  default:
    console.log("Invalid age");
}

/* Task - 11 (Not required)
Create a program  - https://take.ms/mN65i 

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled”

Use only what've learned!

*/


var prompt = require('prompt-sync')();

// Simulating user input
let login = "Admin"; // Replace with the desired login value
let password = "TheMaster"; // Replace with the desired password value

if (login === "Admin") {
  if (password === "TheMaster") {
    console.log("Welcome!");
  } else if (password === "" || password === null) {
    console.log("Canceled");
  } else {
    console.log("Wrong password");
  }
} else if (login === "" || login === null) {
  console.log("Canceled");
} else {
  console.log("I don't know you");
}
