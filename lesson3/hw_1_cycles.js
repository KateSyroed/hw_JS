/*Task - 1
  Replace the "for" loop with a "while" loop

for (let i = 0; i < 8; i++) {
  console.log( `число - ` + i);
}
*/
let i = 0;
while (i < 8) {
  console.log(`число - ` + i);
  i++;
}


/*Task - 2
  Implement algorithm which will calculate sum of numbers from 0 to 50 (included) not divisible by 3.
  Use 3 different cycles: for | while | do..while */

  let sumFor = 0;
for (let i = 0; i <= 50; i++) {
  if (i % 3 !== 0) {
    sumFor += i;
  }
}
console.log("Sum using for loop:", sumFor);

let sumWhile = 0;
let j = 0;
while (j <= 50) {
  if (j % 3 !== 0) {
    sumWhile += j;
  }
  j++;
}
console.log("Sum using while loop:", sumWhile);

let sumDoWhile = 0;
let k = 0;
do {
  if (k % 3 !== 0) {
    sumDoWhile += k;
  }
  k++;
} while (k <= 50);
console.log("Sum using do..while loop:", sumDoWhile);


/* Task - 3
  Implement algorithm which will
  calculate sum of numbers from firstNumber to secondNumber (included)
  Use for loop  
*/

let firstNumber = -100;
let secondNumber = 250;
let sum = 0;

for (let i = firstNumber; i <= secondNumber; i++) {
  sum += i;
}

console.log("The sum of numbers from", firstNumber, "to", secondNumber, "is:", sum);


/* Task - 4
  Make a timer that will count from 10 to 0

  For example,
  10 seconds left
  9 seconds left
  8 seconds left 
*/

let counter = 10;

const timer = setInterval(() => {
  if (counter >= 0) {
    console.log(`${counter} seconds left`);
    counter--;
  } else {
    clearInterval(timer);
    console.log("Timer stopped");
  }
}, 1000);


/* Task - 5
  Create program to display the following sequence: 7 14 21 28 35 42 49 */

  for (let i = 7; i <= 49; i += 7) {
    console.log(i);
  }
  

/* Task - 6 (Not required)
  implement algorithm which calculates factorial for 
  using for, while, do..while operators
  assign the result to corresponding variable
  what is factorial: https://www.mathsisfun.com/numbers/factorial.html 
*/

// Using for loop
function factorialFor(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
      result *= i;
    }
    return result;
  }
  
  // Using while loop
  function factorialWhile(number) {
    let result = 1;
    let i = 1;
    while (i <= number) {
      result *= i;
      i++;
    }
    return result;
  }
  
  // Using do..while loop
  function factorialDoWhile(number) {
    let result = 1;
    let i = 1;
    do {
      result *= i;
      i++;
    } while (i <= number);
    return result;
  }
  
  // Testing with a number, for example, 5
  let number = 5;
  let resultFor = factorialFor(number);
  let resultWhile = factorialWhile(number);
  let resultDoWhile = factorialDoWhile(number);
  
  console.log(`Factorial using for loop: ${resultFor}`);
  console.log(`Factorial using while loop: ${resultWhile}`);
  console.log(`Factorial using do..while loop: ${resultDoWhile}`);
  
/* Task - 7 (Not required)
  implement algorithm filling a bathtub using buckets. 
  we know how many liters the bathtub holds and the capacity of one bucket, but we don't know how many buckets we need. 
  We need to fill the bathtub without overflowing it.
  Use while loop 
*/

let bucket = 5; // Capacity of one bucket
let initialBathState = 0; // The initial value of the amount of water in the bathroom
let bathCapacity = 60; // Capacity of the bathtub

let bucketsUsed = 0;

while (initialBathState < bathCapacity) {
  initialBathState += bucket;
  bucketsUsed++;

  // Check if the bathtub is full
  if (initialBathState >= bathCapacity) {
    console.log(`Bathtub is filled! Used ${bucketsUsed} buckets.`);
  } else {
    console.log(`Used ${bucketsUsed} buckets. Current bath state: ${initialBathState} liters.`);
  }
}

//test 
