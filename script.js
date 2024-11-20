import { prompt } from "./helper.js";
const LIMIT = 100000000000000;
console.log("ADDITION-MASTER ™️");

/*
console.log(` Choisissez un opérateur:
 1. Addition
 2. Soustraction
 3. Multiplication
 4. Division`);

const operator = Number(await prompt(" Enter the operator : "));
if (operator !== 1 && operator !== 2 && operator !== 3 && operator !== 4) {
  console.warn(" Choix invalide car ni 1 ni 2 ni 3  ni 4");
  process.exit(1);
}

*/
console.log(` Choisissez un opérateur:
  1. Addition
  2. Soustraction
  3. Multiplication
  4. Division`);
let operator = 0;
while (operator === 0) {
  let operatorTemp = Number(await prompt(" Enter the operator : "));
  if (
    operatorTemp !== 1 &&
    operatorTemp !== 2 &&
    operatorTemp !== 3 &&
    operatorTemp !== 4
  ) {
    console.warn(" Choix invalide car ni 1 ni 2 ni 3  ni 4");
    //operatorTemp = Number(await prompt(" Enter the operator : "));
    //operator = 0;
    //process.exit(1);
  } else {
    operator = operatorTemp;
  }
}

const firstNumber = Number(await prompt("Enter the first number : "));

if (Number.isNaN(firstNumber) || Math.abs(firstNumber) > LIMIT) {
  console.log(
    `Error : ${firstNumber} is not a number or is  too tall / too small than ${LIMIT}`
  );
  process.exit(1);
}

const secondNumber = Number(await prompt("Enter the second number : "));

if (Number.isNaN(secondNumber) || Math.abs(secondNumber) > LIMIT) {
  console.log(
    `Error : ${secondNumber} is not a number or is too tall /too small than ${LIMIT}`
  );
  process.exit(1);
}

if (operator === 4 && secondNumber === 0) {
  console.warn(" Error division by 0");
  process.exit(1);
}

// 🦁 Utilise switch pour gérer les différents cas
// 📖 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
// 💡 switch (operator) {
// 💡   case '1':
// 💡     ...
// 💡     break;
// 💡   ...
// 💡 }
switch (operator) {
  case 1:
    console.log("The result of sum is : ", firstNumber + secondNumber);
    break;
  case 2:
    console.log("The result of minus is : ", firstNumber - secondNumber);
    break;
  case 3:
    console.log("The result of multiply is : ", firstNumber * secondNumber);
    break;
  case 4:
    console.log("The result of division is : ", firstNumber / secondNumber);
    break;
  default:
    console.warn(" Error ! You have choiced any opertor");
    break;
}
