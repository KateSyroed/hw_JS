/* Task - 2
    Перевірка теорії ймовірності. Напишіть функцію яка буде генерувати певну кількість випадкових чисел в діапазоні 
    від 100 до 1000 включно. Порахувати кількість парних та непарних серед них. 
    Обчислити відсоткове співвідношення - чи буде воно близьке до 50%50? Приклад функції checkProbabilityTheory(count). 
    Парметр count буде вказувати скільки разів буде генеруватися випадкове число.

    Функція виводить інформацію
    Кількість згенерованих чисел: кількість чисел
    Парних чисел: кількість парних чисел
    Не парних чисел: кількість не парних чисел
    Відсоток парних до не парних
*/

function checkProbabilityTheory(count) {
    let totalNumbers = 0;
    let evenNumbers = 0;
  
    for (let i = 0; i < count; i++) {
      const randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
      totalNumbers++;
  
      if (randomNumber % 2 === 0) {
        evenNumbers++;
      }
    }
  
    const oddNumbers = totalNumbers - evenNumbers;
    const percentageEven = (evenNumbers / totalNumbers) * 100;
    const percentageOdd = 100 - percentageEven;
  
    console.log(`Кількість згенерованих чисел: ${totalNumbers}`);
    console.log(`Парних чисел: ${evenNumbers}`);
    console.log(`Не парних чисел: ${oddNumbers}`);
    console.log(`Відсоток парних до не парних: ${percentageEven.toFixed(2)}% : ${percentageOdd.toFixed(2)}%`);
  }
  
  
  checkProbabilityTheory(1000);
  

/* Task - 3
    Необхідно написати власну реалізацію функцій padEnd та padStart, але у вас повинна бути одна функція pad(‘qwerty’, ‘+’, true), яка приймає чотири аргументи:

    рядок, до якого буде додаватися символ.
    символ, який буде додаватися.
    Скільки додавати символів
    булеве значення, яке вказує, куди додавати символ. Якщо true, то до початку, якщо false, то в кінець.
    Останній аргумент повинен працювати як і в оригінальній функції, а саме якщо наш рядок з 5 символів, а ви вказуєте знаачення 6, то додаєте тільки один символ
*/

function pad(str, symbol, count, addToStart) {
    const padString = symbol.repeat(count);
  
    if (addToStart) {
      return padString + str;
    } else {
      return str + padString;
    }
  }
  

  console.log(pad('qwerty', '+', 3, true));   // '+++qwerty'
  console.log(pad('qwerty', '+', 3, false));  // 'qwerty+++'
  