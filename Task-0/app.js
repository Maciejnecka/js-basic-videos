'use strict';
// // Number
// 5;
// 1.5;
// // String
// ('Hello');
// ("I can't");
// // Boolean
// true;
// false;
// // null
// null;
// //undefined
// undefined;

// //object
// ({
//   name: 'Fluffy',
//   age: 3,
// })[
//   // Array (subtype or kind of Object)
//   ('Fluffy', 3)
// ];
// Functions are also Objects!!!
// var a = 5;
// console.log(a);
// var b = 'Hello';
// console.log(b);
// b = 5;
// console.log(b);

// var numberLiteral = 5;
// var numberLiteral2 = 1.5;
// console.log(numberLiteral);
// console.log(numberLiteral2);

// var stringLiteral = 'Hello';
// var stringLiteral2 = "I can't";
// console.log(stringLiteral);
// console.log(stringLiteral2);

// var booleanLiteral = true;
// var booleanLiteral2 = false;
// console.log(booleanLiteral);
// console.log(booleanLiteral2);

// var nullLiteral = null;
// var undefinedLiteral = undefined;
// console.log(nullLiteral);
// console.log(undefinedLiteral);
// console.log('Hello');
// console.log(console);
// console.log(console.log);
// var cat = {};
// console.log(cat);

// var x = 5;
// var y = 10;

// add becomes a variable accessible in global scope
// function add(a, b) {
//   return a + b;
// }
// console.log(add(x, y));
// console.log(add(15, 15));
// console.log('Hello world');
// function add(x, y) {
//   return x + y;
// }

// const userInput1 = prompt('Please type a number!');
// const number1 = Number(userInput1);

// const userInput2 = prompt('Please type second number!');
// const number2 = Number(userInput2);

// var sum = add(number1, number2);

// if (sum) {
//   alert('The result is: ' + sum);
// } else {
//   if (sum === 0) {
//     alert('The result is: ' + sum);
//   } else {
//     alert('Sorry, you provided not a number!');
//   }
// }
// Function declaration / statement
// function add(a, b) {
//   return a + b;
// }

// var addExpression = function addExpression(a, b) {
//   return a + b;
// };

// // annonymus function expression
// var addAnonymousExpression = function (a, b) {
//   return a + b;
// };

// var func1 = function namedFunction(a, b) {
//   return a + b;
// };
// var func2 = func1;

// var numbersAmont = 3;

// function add(a, b) {
//   return a + b;
// }

// function showResult() {
//   if (sum) {
//     alert('The result is: ' + sum);
//   } else {
//     if (sum === 0) {
//       alert('The result is: ' + sum);
//     } else {
//       alert('Sorry, you provided not a number!');
//     }
//   }
// }

// var userInput1 = prompt('Please type a number');
// var number1 = Number(userInput1);

// var userInput2 = prompt('Please type second number');
// var number2 = Number(userInput2);
// console.log(typeof number1, typeof number2);

// var sum = add(number1 + number2);

// showResult();

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // for (let i = 0; i < numbers.length; i++) {
// //   console.log('#1 - Start of iteration no.: ' + i);
// //   var number = numbers[i];
// //   if (numbers[i] < 6) {
// //     console.log(number);
// //   }
// // }

// // for (var j = 0; j < numbers.length; j++) {
// //   console.log('#2 - Start of iteration no.: ' + j);

// //   var number = numbers[j];

// //   if (number < 6) {
// //     console.log(number);
// //   } else {
// //     break;
// //   }
// // }

// // for (var k = 0; k < numbers.length; k++) {
// //   console.log('#3 - Start of iteration no.: ' + k);

// //   var number = numbers[k];

// //   if (number % 2 === 0) {
// //     continue;
// //   }
// //   console.log(number);
// // }
// var num1 = 1;
// var num2 = 2;

// var operator = prompt('Please type on of +, -, *, /');

// function add(a, b) {
//   return a + b;
// }
// function subtract(a, b) {
//   return a - b;
// }
// function multiply(a, b) {
//   return a * b;
// }
// function divide(a, b) {
//   return a / b;
// }

// var result = 0;

// // if (operator === '+') {
// //   result = add(num1, num2);
// // }
// // if (operator === '-') {
// //   result = subtract(num1, num2);
// // }
// // if (operator === '*') {
// //   result = multiply(num1, num2);
// // }
// // if (operator === '/') {
// //   result = divide(num1, num2);
// // }

// switch (operator) {
//   case '+':
//     result = add(num1, num2);
//     break;
//   case '-':
//     result = subtract(num1, num2);
//     break;
//   case '*':
//     result = multiply(num1, num2);
//     break;
//   case '/':
//     result = divide(num1, num2);
//     break;
//   default:
//     displayError();
// }

// console.log(result);
