// 🦁 Importe cette fonction
import { prompt } from "./helper.js";

console.log("ADDITION-MASTER ™️");

// 🦁 Utilise la fonction "prompt" pour demander le premier nombre à l'utilisateur
// 🦁 Stocke le résultat dans une variable "firstNumber" et utilise `Number()` pour convertir la valeur en nombre
// 💡 await prompt('Enter your name: ') permet de récupérer la valeur saisie par l'utilisateur

// Addition
const firstNumber = Number(await prompt("Entrez le premier nombre: "));
if (Number.isNaN(firstNumber)) {
  console.error(" Attention Erreur firstNumber n'est pas un nombre");
  process.exit(1);
}
// 🦁 Fais la même chose pour la variable "secondNumber"
const secondNumber = Number(await prompt("Entrez le second nombre: "));
if (Number.isNaN(secondNumber)) {
  console.error(" Attention Erreur secondNumber  n'est pas un nombre");
  process.exit(1);
}
// 🦁 Affiche l'addition des deux nombres
const resultat = firstNumber + secondNumber;
console.log("Le résultat de l'addition est :", resultat);

// Soustraction
const thirdNumber = Number(await prompt("Entrez le troisième nombre: "));
if (Number.isNaN(thirdNumber)) {
  console.error(" Attention Erreur  thirdNumber n'est pas un nombre");
  process.exit(1);
}
const fourthNumber = Number(await prompt("Entrez le quatrième nombre: "));
if (Number.isNaN(fourthNumber)) {
  console.error(" Attention Erreur fourthNumber  n'est pas un nombre");
  process.exit(1);
}
// 🦁 Affiche la soustraction des deux nombres
const resultMinus = thirdNumber - fourthNumber;
console.log("Le résultat de la soustraction est :", resultMinus);

// Division
const fifthNumber = Number(await prompt("Entrez le cinquième nombre: "));
if (Number.isNaN(fifthNumber)) {
  console.error(" Attention Erreur fifthNumber n'est pas un nombre");
  process.exit(1);
}
const sixthNumber = Number(await prompt("Entrez le sixième nombre: "));

if (sixthNumber === 0) {
  console.warn("Erreur !");
  process.exit(1);
}

if (Number.isNaN(sixthNumber)) {
  console.error(" Attention Erreur sixthNumber n'est pas un nombre");
  process.exit(1);
}
// 🦁 Affiche la division des deux nombres
const resultDivide = fifthNumber / sixthNumber;
console.log("Le résultat de la division est :", resultDivide);
