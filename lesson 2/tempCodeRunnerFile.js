const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const secretNumber = Math.floor(Math.random() * 100) + 1;

rl.question('Угадайте число от 1 до 100: ', (guessedNumber) => {
  guessedNumber = parseInt(guessedNumber);

  if (guessedNumber === secretNumber) {
    console.log('Вы угадали число!');
  } else if (guessedNumber < secretNumber) {
    console.log('Загаданное число больше.');
  } else {
    console.log('Загаданное число меньше.');
  }

  rl.close();
});
