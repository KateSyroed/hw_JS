/* Task - 0
    Create a function task1Func which will always return true
*/

function task1Func() {
    return true;
  }

  console.log(task1Func()); // Output: true
  

/* Task 1
    Write a function min(a, b) that returns the lesser of two numbers a and b.

    For example,
    min(2, 5) == 2
    min(3, -1) == -1
    min(1, 1) == 1
*/

function min(a, b) {
    return a < b ? a : b;
  }
  
  console.log(min(2, 5));   // Output: 2
  console.log(min(3, -1));  // Output: -1
  console.log(min(1, 1));   // Output: 1
  

/* Task 2
    Write a function pow(x, n) that returns the number x raised to the power of n. 
    In other words, it multiplies the number x by itself n times and returns the result.

    For example,
    pow(3, 2) = 3 * 3 = 9
    pow(3, 3) = 3 * 3 * 3 = 27
    pow(1, 100) = 1 * 1 * ...* 1 = 1
*/

function pow(x, n) {
    let result = 1;
  
    for (let i = 0; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  console.log(pow(3, 2));    // Output: 9
  console.log(pow(3, 3));    // Output: 27
  console.log(pow(1, 100));  // Output: 1
  

/* Task 3
    Remake a function from the task 2
    * just make second parameter to have a default value equal 5

*/

function pow(x, n = 5) {
    let result = 1;
  
    for (let i = 0; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  console.log(pow(3));    // Output: 243 (3^5)
  console.log(pow(3, 2));  // Output: 9 (3^2)
  console.log(pow(2));    // Output: 32 (2^5)
  
  

/* Task 4
   Create a variable  which will return a function
    which will take parameter pet as a number (where 1 stands for pizza, 2 is spagetti and 0 is other)
    and returns text ee.g. "My lunch for today is pizza"
    Use function expression with arrow function notation
*/
const lunchChoice = (pet) => {
    switch (pet) {
      case 1:
        return "My lunch for today is pizza";
      case 2:
        return "My lunch for today is spaghetti";
      default:
        return "My lunch for today is something else";
    }
  };

  console.log(lunchChoice(1));  // Output: My lunch for today is pizza
  console.log(lunchChoice(2));  // Output: My lunch for today is spaghetti
  console.log(lunchChoice(0));  // Output: My lunch for today is something else
  
/* Task 5 (Not required)
    You need to draw a rectangular triangle of stars (or pluses, or some other symbol) in the console: one star on the first line, two on the second, and so on. 
    Write your solution in the form of a function that takes two parameters: the height of the triangle and the symbol you want to use to draw it.

    Example, 
    drawTriangle(5, *);
*
**
***
****
*****

*/

function drawTriangle(height, symbol) {
    for (let i = 1; i <= height; i++) {
      console.log(symbol.repeat(i));
    }
  }
  
  // Example usage
  drawTriangle(6, '+');
  

/* Task 6 (Not required)
    Callback
    Create a function (e.g. function1)  which will take another function (e.g. function2) as an argument
    and returns result of execution of that another function in string format
 
    Example,
    if function2  returns "THIS IS THE RESULT OF CALLBACK FUNCTION"
    than function1 should return "The result = THIS IS THE RESULT OF CALLBACK FUNCTION"
*/

function function1(callbackFunction) {
    const result = callbackFunction();
    return `The result = ${result}`;
  }
  
  function function2() {
    return "THIS IS THE RESULT OF CALLBACK FUNCTION";
  }
  
  const resultString = function1(function2);
  console.log(resultString);
  

/* Task 7 (Not required)
    Create a function task13Func which returns word google with given numbers of "o" symbols
    Example
    funcName(7) // => gooooooogle
*/

function task13Func(numOfOs) {
    return "g" + "o".repeat(numOfOs) + "gle";
  }
  
  console.log(task13Func(10));  // Output: goooooogle
