/*  Task - 1
    Напишіть регулярний вираз, який допоможе знайти принаймні шість символів і не містяти літери А (великої або малої)
*/
var regex = /^(?!.*[Aa]).{6,}$/;


/*  Task - 2

    var text = 'cat car can';

    Напишіть regex, котрий знайде cat та can, але не знайде car
 
*/

var regex = /\b(cat|can)\b(?!r)/;


/*  Task - 3

    text = 'I would like 8 cups of coffee, please.';

    Напишіть regex, котрий знайде кількість чашок кофе.
 
*/

var regex = /\b\d+\s*cups?\s+of\s+coffee\b/i;

/*  Task - 4

    var text = 'Hello people of 1974. I come from the future. In 2014 we have laser guns, hover boards and live on the moon!';


    Напишіть regex, котрий знайде ВСІ слова котрі починаются на h
 
*/

var regex = /\bh\w+/ig;



/*  Task - 5 (Not required)

    var text = 'Hello people of 1974. I come from the future. In 2014 we have laser guns, hover boards and live on the moon!';


    Напишіть regex, котрий знайде ВСІ слова від 4 до 6 символів
 
*/

var regex = /\b\w{4,6}\b/g;


/*  Task - 6 (Not required)

    var text = 'Hello people of 1974. I come from the future. In 2014 we have laser guns, hover boards and live on the moon!';


    Напишіть regex, котрий знайде ВСІ слова більше ніж 5 символів
 
*/

var regex = /\b\w{6,}\b/g;


/*  Task - 7 (Not required)

    var text = 'Hello people of 1974. I come from the future. In 2014 we have laser guns, hover boards and live on the moon!';


    Напишіть regex, котрий знайде ВСІ слова довжина котрих 6 смиволів
 
*/

var regex = /\b\w{6}\b/g;


/*  Task - 8. Paranoya (Not required)
    В нас є масив обєктів в яких міститься email.

    var arr = [
        {
            userName:"Test",
            lastName:"Test",
            email:"test.test@gmail.com"
        },
        {
            userName:"Dmitro",
            lastName:"Porohov",
            email:"dmitro.porohov@yahoo.com"
        },
        {
            userName:"Andrii",
            lastName:"",
            email:"andrii@mail.ru" // Нам такі не підходять
        },
    ];


    У нас параноя, ми не довіряємо жодним адресам, окрім зареєстрованих на доменах gmail.com та yahoo.com.

    За допомогою регулярного виразу створіть масив з адресами, гідними довіри. Постарайтеся також зробити просту валідацію до @

    - одне, або два слова які можуть містити (латинські букви, цифри) яке може бути розділене крапкою.
*/

var arr = [
    {
      userName: "Test",
      lastName: "Test",
      email: "test.test@gmail.com",
    },
    {
      userName: "Dmitro",
      lastName: "Porohov",
      email: "dmitro.porohov@yahoo.com",
    },
    {
      userName: "Andrii",
      lastName: "",
      email: "andrii@mail.ru", // Нам такі не підходять
    },
  ];
  
  var trustedEmails = arr.filter((obj) => /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/i.test(obj.email));
  
  console.log(trustedEmails);
  


/*  Task - 9 (Not required)

    У нас є масив рядків, давайте знайдемо посилання.

    var strings = [
	'https://https://github.com/',
	'this is not a URL',
	'https://google.com/',
	'123461',
	'https://google.com/search?q=cats',
	'http://not a valid url',
	'abc http://invalid.url/'
];


*/

var strings = [
    'https://https://github.com/',
    'this is not a URL',
    'https://google.com/',
    '123461',
    'https://google.com/search?q=cats',
    'http://not a valid url',
    'abc http://invalid.url/'
  ];
  
  var urlRegex = /^(https?:\/\/)?[\da-z.-]+\.[a-z]{2,}(\/[^\s]*)?$/i;
  var validURLs = strings.filter(str => urlRegex.test(str));
  
  console.log(validURLs);
  


/* Task - 10  (Not required)

    Поміняйте місцями ім'я та прізвище

    var name = 'John Smith';

*/

var name = 'John Smith';
var reversedName = name.replace(/(\w+)\s(\w+)/, '$2 $1');
