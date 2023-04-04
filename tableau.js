const jourDeLaSemaine = [
  "lundi",
  "mardi",
  "mercredi",
  "jeudi",
  "vendredi",
  "samedi",
  "dimanche",
];
const chiffresPair = [2, 4, 6, 8, 10];
const fruits = ["pomme", "poire", "fraise", "banane", "orange"];
const notes = [12, 15, 8, 9, 10, 11, 13, 14, 16, 17, 18, 19, 20];
const nomOiseaux = ["pigeon", "corbeau", "mouette", "hibou", "faucon"];
const nomPays = ["france", "Belgique", "Suisse", "Luxembourg", "Allemagne"];
const mois = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "aout",
  "septembre",
  "octobre",
  "novembre",
  "décembre",
];
const arrayRandom = createRandomArray(10);
const textRandom = generateRandomText(3);

function createRandomArray(length) {
  let array = [];
  for (let i = 0; i < length; i++) {
    array.push(Math.floor(Math.random() * 100));
  }
  return array;
}

function generateRandomText(longueur) {
  const mots = [
    "Lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet",
    "consectetur",
    "adipiscing",
    "elit",
    "sed",
    "do",
    "eiusmod",
    "tempor",
    "incididunt",
    "ut",
    "labore",
    "et",
    "dolore",
    "magna",
    "aliqua",
  ];
  let texte = "";
  for (let i = 0; i < longueur; i++) {
    texte += mots[Math.floor(Math.random() * mots.length)] + " ";
  }
  return texte.trim();
}

/*
 * 1. Créer un tableau contenant les nombres de 1 à 10 et iterer desssus
 */
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array.forEach((element, index) => {
  console.log("result 1", "index", index, "contenu", element);
});

/**
 * 2.Affiche le premier jour de la semaine
 *
 */

result2 = jourDeLaSemaine[0];
console.log("result 2", result2);

/**
 * 3.Somme des nombres du tableau chiffresPair
 *
 */
result3 = chiffresPair.reduce((acc, curr) => acc + curr);
console.log("result 3", result3);

/**
 * 4.ajoute un sixeme fruite au tab et affiche le tableau
 *
 */

result4 = ajouteUnFruit("kiwi");

function ajouteUnFruit(fruit) {
  fruits.push(fruit);
}

/**
 * 5.Calcul de la moyenne des notes
 *
 */

result5 = calculMoyenne();
console.log("result 5", result5);
function calculMoyenne() {
  let resultTotal = 0;
  let moyenne = notes.forEach((note) => (resultTotal += note));
  return resultTotal / notes.length;
}

/**
 * 6.check si l oiseau est present dans le tableau
 */
let result6 = checkIfExist("pigteon");
console.log("result 6", result6);
function checkIfExist(oiseau) {
  return nomOiseaux.includes(oiseau);
}

/**
 * 7. Affiche les pays dans l'ordre alphabetique
 *
 */
let result7 = affichePays(nomPays);
console.log("result 7", result7);
function affichePays(nomPays) {
  nomPays.sort((a, b) => a.localeCompare(b));
  return nomPays;
}

/**
 * 8. Affiche le troisieme mois
 */
result8 = showThirdMonth(mois);
console.log("result 8", result8);
function showThirdMonth(mois) {
  return mois[2];
}

/**
 * 9.Créez un tableau contenant des nombres aléatoires
 *
 */

let result9 = functionPlusPetit(arrayRandom);
console.log("result 9", result9);

function functionPlusPetit(arrayRandom) {
  let result = arrayRandom[0];
  arrayRandom.forEach((element) => {
    if (element < result) {
      result = element;
    }
  });
  return result;
}

/**
 *
 *
 */

let array10 = [];
for (let i = 1; i <= 10; i++) {
  array10.push(generateRandomText(i));
}
let plusGrand = "";
for (let i = 0; i < array10.length; i++) {
  plusGrand.length < array10[i].length
    ? (plusGrand = array10[i])
    : (plusGrand = plusGrand);
}
console.log("result 10", plusGrand);
