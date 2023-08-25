console.log("Hola món");

function hello() {
  console.log("Hola nois");
  console.log("Proves amb Js");
}

hello();

function hello2() {
  return "Hola nois";
}

const result = hello2();
console.log(result);
console.log(hello2());

function hello3() {
  const num = 20;
  const boolea = true;
  return `${num} ${boolea}`;
}

console.log(hello3());

function hello4() {
  const nums = [1, 2, 3];
  return nums;
}

console.log(hello4());

function hello5() {
  const persona = { nom: "Josep Maria", edat: 53 };
  return persona;
}

console.log(hello5());

function hello6() {
  return function () {
    return "funció a dins de funció";
  };
}

console.log(hello6());
console.log(hello6()());

function salutacio(nom) {
  return "Hola " + nom;
}

console.log(salutacio("Ramon"));
console.log(salutacio("Pere"));

function sumar(x, y) {
  return x + y;
}

console.log(sumar(2, 64));
console.log(sumar(4, 345));

function sumar2(x = 2, y = 10) {
  return x + y;
}

console.log(sumar2());
console.log(sumar2(4));
console.log(sumar2(undefined, 2));

function registrarU(nom, pais = "Espanya", correu, telefon = "no especificat") {
  return `Nom: ${nom}, país: ${pais}, correu: ${correu}, telèfon: ${telefon}`;
}

console.log(registrarU("Jordi", undefined, "jordillop@hotmail.com"));

const usuari = {
  nom: "Ramon",
  cognom: "Pérez",
  edat: 30,
  adreça: {
    país: "Espanya",
    ciutat: "Lleida",
    carrer: "principal, 5, 2on 1era",
  },
  amics: ["Pere", "Josep", "Maria"],
  actiu: true,
  sendMail: function () {
    return "enviant correu electrònic...";
  },
  sendAvis() {
    return "estàs avisat";
  },
  sendSalutacio: () => "una salutació",
};

console.log(usuari.nom);
console.log(usuari.adreça);
console.log(usuari.adreça.carrer);
console.log(usuari.actiu);
console.log(usuari.amics);
console.log(usuari.amics[2]);
console.log(usuari.sendMail);
console.log(usuari.sendMail());
console.log(usuari.sendAvis());
console.log(usuari.sendSalutacio());
console.log(usuari);

const {
  nom,
  adreça: objAdreça,
  adreça: { carrer: varCarrer },
  actiu,
  amics: arrAmics,
  amics: { [1]: segonAmic },
  sendMail: emailEnviant,
  sendAvis: avis,
  sendSalutacio: salutacio2,
} = usuari;

console.log(nom);
console.log(actiu);
console.log(objAdreça);
console.log(varCarrer);
console.log(arrAmics);
console.log(segonAmic);
console.log(emailEnviant());
console.log(avis());
console.log(salutacio2());

const nums = [1, 2, 3];

const [primer, segon, tercer] = nums;

console.log(primer);
console.log(segon);
console.log(tercer);

const [saludo, pronombre, ...laResta] = ["Hola", "Yo", "soy", "Sarah"];

console.log(saludo);
console.log(pronombre);
console.log(laResta);
console.log(...laResta);

const producte = "pcPortatil";
const marca = "Dell";
const preu = 2500;
const usb = 2;

const ordinadors = {
  ordindador: producte,
  marca,
  preu,
  portsUSB: usb,
};

console.log(ordinadors);

const contenidor = document.createElement("header");
document.body.append(contenidor);

const titol = document.createElement("h1");
titol.innerText = "JS per React";
contenidor.append(titol);

const subtitol = document.createElement("h3");
subtitol.innerText = "Estem aquí per aprendre";
contenidor.append(subtitol);

const paragraf = document.createElement("p");
paragraf.innerText = "Lorem";
document.body.append(paragraf);

const boto = document.createElement("button");
boto.innerText = "Clic";
document.body.append(boto);

boto.addEventListener("click", function () {
  titol.style.color = "green";
  titol.innerText = "Text actualitzat";
  console.log("canvi de color del titol");
});

boto.addEventListener("click", () => (subtitol.style.color = "red"));
boto.addEventListener("click", () => (boto.innerText = "Clicat!"));

const usuari2 = {
  nom: "Pere",
  edat: 30,
};

function imprimirInfo(algu) {
  return `Hola em dic ${usuari2.nom}`;
}

console.log(imprimirInfo(usuari2));
const h4 = document.createElement("h4");
h4.innerText = imprimirInfo(usuari2);
document.body.appendChild(h4);

function imprimirInfo2({ edat }) {
  return `<h4>Tinc ${edat} anys</h4>`;
}

console.log(imprimirInfo2(usuari2));
const div = document.createElement("div");
document.body.append(div);
div.innerHTML = imprimirInfo2(usuari2);
document.body.append(div);

//document.body.innerHTML = imprimirInfo2(usuari2);

function imprimirInfo3(algu) {
  const { nom: nomPere, edat: edatPere } = algu;
  return `Em dic ${nomPere}. Tinc ${edatPere} anys`;
}

console.log(imprimirInfo3(usuari2));

function inici() {
  return "Començant...";
}

console.log(inici());

const inici2 = function () {
  return "Començant2...";
};

console.log(inici2());

const inici3 = () => "Començant3...";

console.log(inici3());

const boto2 = document.createElement("button");
boto2.innerText = "Clica'm!";
document.body.append(boto2);

//boto2.addEventListener("click", () => alert("M'has clicat!"));

const clicat = () => alert("M'has clicat doble!");
boto2.addEventListener("dblclick", clicat);

const mostrarText = () => "Hola nois";
const mostrarNum = () => 22;
const mostrarBoolea = () => true;
const mostrarArray = () => [1, 2, 3];
const mostrarObjecte = () => ({ nom: "Ramon" });

console.log(mostrarText());
console.log(mostrarNum());
console.log(mostrarBoolea());
console.log(mostrarArray());
console.log(mostrarObjecte());

const boto3 = document.createElement("button");
boto3.innerText = "Clica'm!";
document.body.append(boto3);
boto3.style.cssText = "background: red; margin: 0 10px";
boto3.style.color = "white";
const fonsBlau = "blue";
const pad10px = "10px";
const autoritzat = true;
boto3.style.cssText += `background: ${
  autoritzat ? fonsBlau : "red"
}; padding: ${pad10px}`;
let llista = boto3.style.cssText;
console.log(llista);

boto3.addEventListener("click", () => {
  if (autoritzat) return alert("M'has clicat!");
  return alert("No estàs autoritzat");
});

const noms = ["Marina", "Joan", "Pep"];

for (let i = 0; i < noms.length; i++) {
  const element = noms[i];
  console.log(element);
}

noms.forEach(function (nom) {
  console.log(nom);
});

noms.forEach((nom) => console.log(`Hola ${nom}`));

const nouNoms = noms.map((nom) => `Copiat ${nom}`);
console.log(noms);
console.log(nouNoms);
const nouNoms2 = noms.map((nom) => [...nom]);
console.log(nouNoms2);

const trobat = noms.find((element) => element === "Pep");
console.log(trobat);

const nomsM = noms.filter((element) => element.startsWith("M"));
console.log(nomsM);
const nomsA = noms.filter((element) => element.includes("a"));
console.log(nomsA);
const noms3 = noms.filter(
  (element) => element.length > 4 || element.length <= 3,
);
console.log(noms3);

const noms2 = ["Marc", "Jordi", "Manel"];
const nomsJunts = noms.concat(noms2);
console.log(nomsJunts);

const nomsJunts2 = [...noms, ...noms2];
console.log(nomsJunts2);
const nomsJunts3 = [[...noms], [...noms2]];
console.log(nomsJunts3);
const nomsLletres = [noms.map((nom) => [...nom]), noms2.map((nom) => [...nom])];
console.log(nomsLletres);
const nomsLletres2 = [];
noms.forEach((nom) => nomsLletres2.push(...nom));
console.log(nomsLletres2);
const nomsLletres3 = [];
noms2.forEach((nom) => nomsLletres3.push(...nom));
console.log(nomsLletres3);
const totLletres = [...nomsLletres2, ...nomsLletres3];
console.log(totLletres);

const gos = {
  nom: "Petit",
  raça: "podenc",
};

const dadesGos = {
  potes: 4,
  cua: 1,
};

const gosTotJunt = [{ ...gos }, { ...dadesGos }];
console.log(gosTotJunt);
const gosTotJunt2 = { ...gos, ...dadesGos };
console.log(gosTotJunt2);

/* import { suma, multi } from "./add.js";

const resultat = suma(10, 20);
console.log(resultat);

const resultat2 = multi(10, 20);
console.log(resultat2);

import { titolI, actiuI, punts } from "./add.js";

console.log(titolI, actiuI, punts);

import sumaAdd from "./add.js";

console.log(sumaAdd(2, 4));

import { suma, multi } from "./add.js"; */

import * as totAdd from "./add.js";

const resultat = totAdd.suma(10, 20);
console.log(resultat);

const resultat2 = totAdd.multi(10, 20);
console.log(resultat2);

console.log(totAdd.titolI, totAdd.actiuI, totAdd.punts);

console.log(totAdd.suma(2, 4));

const individu = {
  nom: "Pep",
  adreça: {
    ciutat: "Lleida",
  },
};

console.log(individu?.nom);
console.log(individu.adreça?.ciutat);
console.log(individu.location?.city);
console.log(individu?.location);

/* let data = fetch("https://jsonplaceholder.typicode.com/posts");
console.log(data); */

const ul = document.createElement("ul");

/* fetch("https://jsonplaceholder.typicode.com/posts")
.then(function (response) {
	return response.json();
})
.then(function (data) {
	console.log(data);
	data.forEach((element, index) => {
			const innerUl = document.createElement("ul");
			innerUl.style.cssText = "list-style: disc";
			const titleElement = document.createElement("p");
			titleElement.innerText = `Element número ${index}`;
			titleElement.style.cssText = "font-weight: bold; font-size: 20px";
			innerUl.appendChild(titleElement);
			const li1 = document.createElement("li");
			li1.innerText = `UserID: ${element.userId}`;
			innerUl.append(li1);
			const li2 = document.createElement("li");
			li2.innerText = `ElementID: ${element.id}`;
			innerUl.append(li2);
			const li3 = document.createElement("li");
			li3.innerText = `Title: ${element.title}`;
			innerUl.append(li3);
			const li4 = document.createElement("li");
			li4.innerText = `Body: ${element.body}`;
			innerUl.append(li4);
			ul.appendChild(innerUl);
			const br = document.createElement("br");
			ul.appendChild(br);
		});
	});

document.body.append(ul);
console.log("línia 2"); */

async function carregarDades() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);

  data.forEach((element, index) => {
    const innerUl = document.createElement("ul");
    innerUl.style.cssText = "list-style: disc";
    const titleElement = document.createElement("p");
    titleElement.innerText = `Element número ${index}`;
    titleElement.style.cssText = "font-weight: bold; font-size: 20px";
    innerUl.appendChild(titleElement);
    const li1 = document.createElement("li");
    li1.innerText = `UserID: ${element.userId}`;
    innerUl.append(li1);
    const li2 = document.createElement("li");
    li2.innerText = `ElementID: ${element.id}`;
    innerUl.append(li2);
    const li3 = document.createElement("li");
    li3.innerText = `Title: ${element.title}`;
    innerUl.append(li3);
    const li4 = document.createElement("li");
    li4.innerText = `Body: ${element.body}`;
    innerUl.append(li4);
    ul.appendChild(innerUl);
    const br = document.createElement("br");
    ul.appendChild(br);
  });

  document.body.append(ul);
}

carregarDades();
console.log("linea 2");
