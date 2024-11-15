// 🦁 Importe cette fonction
import { prompt } from "./helper.js";

console.log("NODE-MAILER ™️");

// 🦁 Récupère le mail, l'objet et le message
const userEmail = await prompt("Entrez votre email : ");
const objetEmail = await prompt("Entrez l'objet de votre email : ");
if (userEmail.length === 0 || objetEmail.length === 0) {
  console.info(" Vous n'avez pas renseigné de mail ou  d'objet ");
  process.exit(1);
}

const msgEmail = await prompt("Entrez votre message : ");
// 🦁 Affiche un log
console.log(`
 
Le mail est en train d'être envoyé ..

A : ${userEmail}
Objet : ${objetEmail} 
${msgEmail}`);
// - Le message du mail
