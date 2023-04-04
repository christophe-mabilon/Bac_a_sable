/**
 * fonctions
 *
 */
const voyelles = ["a", "e", "i", "o", "u", "y"];
const consonnes = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "z",
];

const unitee = [
  "",
  "un",
  "deux",
  "trois",
  "quatre",
  "cinq",
  "six",
  "sept",
  "huit",
  "neuf",
];
const dixaine = [
  "",
  "dix",
  "vingt",
  "trente",
  "quarante",
  "cinquante",
  "soixante",
  "soixante-dix",
  "quatre-vingt",
  "quatre-vingt-dix",
];

const exceptions = [
  "",
  "onze",
  "douze",
  "treize",
  "quatorze",
  "quinze",
  "seize",
];

function shuffle(array) {
  array.sort((a, b) => 0.5 - Math.random());
}

/**
 * 1. Addition de deux nombres
 */
let a = 12;
let b = 15;
let result1 = addition(a, b);
console.log("result 1 : ", result1);
function addition(a, b) {
  return a + b;
}
/**
 * 2.Nombre d le plus grand
 *
 */
let arrayNombre = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result2 = plusGrand(arrayNombre);

console.log("result 2 : ", result2);

function plusGrand(arrayNombre) {
  let max = 0;
  for (const element of arrayNombre) {
    if (element > max) {
      max = element;
    }
  }
  return max;
}

/**
 * 3.tab sans voyelles
 */

let tab = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
let tabSansVoyelles = [];
tabSansVoyelles = tab.filter((element) => !voyelles.includes(element));
console.log("result 3 : ", tabSansVoyelles);

/**
 * 4.classement d'un tableau  de string
 */

let tabString = ["a", "B", "c", "d", "e", "f", "g", "h", "L", "j"];
const result4 = triEnFonctionDesmajuscules(tabString);
console.log("result 4 : ", result4);
function triEnFonctionDesmajuscules() {
  tabString.sort((a, b) => {
    a.toLowerCase() > b.toLowerCase();
  });
  return tabString;
}

/**
 *
 * 5. fonction qui renvoi une chaine
 *
 */

let nombre = 1;

const result5 = getNommbre(nombre);
console.log("result 5 : ", result5);

function getNommbre(nombre) {
  if (nombre <= 16 && nombre > 10) {
    return exceptions[nombre - 10];
  }
  let unite = nombre % 10;

  let dizaine = parseInt(nombre / 10);
  if (dizaine < 1) {
    return dixaine[unite];
  } else {
    return `${dixaine[dizaine]}-${unitee[unite]}`;
  }
}

/**
 *  6.Écrivez une fonction qui prend un tableau d'objets et un nom de propriété et renvoie un tableau des valeurs de cette propriété dans chaque objet.
 */

let arrayObject = [
  {
    nom: "toto",
    age: 12,
  },
  {
    nom: "tata",
    age: 15,
  },
];

let result6 = returnArray(arrayObject);
console.log("result 6 : ", result6);

function returnArray(obj) {
  let array = [];
  for (const element of obj) {
    if (element.age) {
      array.push(element.age);
    }
  }
  return array;
}

/**
 * 7.tableau triée par ordre décroissant
 */

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result7 = array.sort((a, b) => a - b);
console.log("result 7 : ", result7);

/**
 * 8.Chaine de caractere remplacé par des majuscules
 */

let string = "Bonjour je suis un string";
let result8 = remplaceVoyellesUppercase(string);

function remplaceVoyellesUppercase(string) {
  let stringArray = string.split("");
  let result = [];
  for (const element of stringArray) {
    if (voyelles.includes(element)) {
      result.push(element.toUpperCase());
    } else {
      result.push(element);
    }
  }
  return result.join("");
}
console.log("result 8 : ", result8);

/**
 *
 * 9. nombre de voyelles dans une chaine de caractere
 */
const string9 = "Bonjour je suis un string";
const result9 = getNombreVoyelles(string9);
console.log("result 9 : ", result9);

function getNombreVoyelles(string) {
  let compteur = 0;
  if (string) {
    for (const element of string) {
      if (voyelles.includes(element)) {
        compteur++;
      }
    }
    return compteur;
  }
}

/**
 *
 * 10. nombre de consonnes dans une chaine de caractere
 */
const string10 = "Bonjour je suis un string";
const result10 = getNombreConsonnes(string9);
console.log("result 10 : ", result10);

function getNombreConsonnes(string) {
  let compteur = 0;
  if (string) {
    for (const element of string) {
      if (consonnes.includes(element)) {
        compteur++;
      }
    }
    return compteur;
  }
}
