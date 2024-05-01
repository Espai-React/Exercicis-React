const nom = "Carles";
const cognom = "Lópes";

console.log(nom + " " + cognom);
console.log(`${nom} ${cognom}`);

/* function Component({ backgroundColor }) {
				return (
          <div className={`bg-color-${backgroundColor}`}>
            Hola nois!
          </div>
        );
			}; */

const nom2 = "Ramon";
const edat2 = 45;
const twitter2 = "http://twitter.com/iaiaguapa";

const persona2 = {
	nom: nom2,
	edat: edat2,
	twitter: twitter2,
};

console.log(persona2);

const nom3 = "Pepita";
const edat3 = 54;
const twitter3 = "http://twitter.com/iaiaguapa2";

const persona3 = {
	nom3,
	edat3,
	twitter3,
};

console.log(persona3);

/* function Component({ initialState, totalCount }) {
  const [state, setState] = useState({ initialState, totalCount });
} */

function sumar(a, b) {
	return a + b;
}
console.log(sumar(2, 4));

const sumar2 = (a, b) => a + b;
console.log(sumar2(5, 7));

/* function LlistaFeines() {
				return (
					<ul>
						{llista.map((element) => (
							<li>{element.nom}</li>
						))}
					</ul>
				);
			}; */

const quadrat = {
	x: 10,
	y: 20,
};

const calculaArea = ({ x, y }) => x * y;
console.log(calculaArea(quadrat));

/* function Avatar({userName, url}) {
        return (
          <img src={url} alt={userName} />
        );
      }; */

const suma2 = (a = 0, b = 7) => a + b;
console.log(suma2(3));

const array = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];

const sumaArray = array.concat(array2);
console.log(sumaArray);

const sumaArrayBis = [...array, ...array2];
console.log(sumaArrayBis);

const obj1 = {
	a: "a",
	b: "b",
	c: "c",
};

const obj2 = {
	d: "d",
	e: "e",
};

const sumaObj = Object.assign({}, obj1, obj2);
console.log(sumaObj);

const sumaObj2 = { ...obj1, ...obj2 };
console.log(sumaObj2);

/*  function Component({id, name, username, profile}) {
        return <nouComponent key={id} name={name} username={username} profile={profile}/>;
}

function Component({id, ...props}) {
        return <nouComponent key={id} {...props}/>;
} */

import { suma } from "./add.js";
import resta from "./add.js";

function calculadora() {
	console.log(suma(2, 5), resta(6, 2));
}
calculadora();

import { prova } from "./add.js";
console.log(prova);

/* import React, { useState, useEffect, Fragment } from "react"; */

const cotxe = {
	marca: "dodge",
	model: "dart",
};

let model = cotxe.model ? cotxe.model : "X";
console.log(model);

/* function LlistaFeines({ feines }) {
  return (
    <>
      {feines.length ? (
        <ul>
          {feines.map((feina) => <li>{feina.nom}</li>)}
        </ul>
      ):(
        <div>
          No hi ha feines
        </div>
      )}
    </>
  )
}; */

function suma3(a, b) {
	a = a === null ? 0 : a;
	b = b === null ? 0 : b;
	return a + b;
}

console.log(suma3(3, 4));

function suma4(a, b) {
	a = a ?? 0;
	b = b ?? 0;
	return a + b;
}

console.log(suma4(3, 4));

/* function Avatar ({ user}) {
  return <img src={user.imageUrl ?? "https://..."}/>
} */

const usuari = {
	nom: "Ramon",
	edat: 55,
	localitzacio: {
		carrer: "Major 7",
		pis: "2on-3era",
		ciutat: {
			codiPostal: "08006",
			comarca: "Gibrellès",
		},
	},
};

const codiPostal =
	usuari &&
	usuari.localitzacio &&
	usuari.localitzacio.ciutat &&
	usuari.localitzacio.ciutat.codiPostal;
console.log(codiPostal);

const codiPostal2 = usuari?.localitzacio?.ciutat?.codiPostal;
console.log(codiPostal2);

/* function User() {
  return <div>Codi Postal: { usuari?.localitzacio?.ciutat?.codiPostal }</div>;
} */

const posts = [
	{
		id: 1,
		titol: "El meu primer post",
		etiquetes: ["javascript", "webdevelopment"],
		valoracio: 7,
		any: 2021,
	},
	{
		id: 2,
		titol: "El meu primer React",
		imatge: "https://www.google.com/search?q",
		etiquetes: ["javascript", "webdevelopment", "react"],
		valoracio: 5,
		any: 2023,
	},
	{
		id: 3,
		titol: "El meu últim post",
		imatge: "https://www.google.com/search?4",
		etiquetes: ["javascript", "webdevelopment", "angular"],
		valoracio: 2,
		any: 2022,
	},
];

const nota = {
	min: 4,
	max: 7,
};

const trobat = posts.find((post) => post.titol === "El meu últim post");
console.log(trobat);

const hiHa = posts.some((post) => post.id === 1);
console.log(hiHa);

const etiqueta = posts.some((post) => post.etiquetes.includes("vue"));
console.log(etiqueta);

const tots = posts.every((post) => typeof post.id === "number");
console.log(tots);

const titols = posts.map((post) => post.titol);
console.log(titols);

const includesPost = posts.filter((post) => post.titol.includes("post"));
console.log(includesPost);

const ambImg = posts.filter((post) => post.imatge);
console.log(ambImg);

const etiquetes = posts.reduce(
	(etiquetesTotes, post) => [...etiquetesTotes, ...post.etiquetes],
	[]
);
console.log(etiquetes);

const etiquetesNoRepetides = Array.from(
	new Set(
		posts.reduce(
			(etiquetesTotes, post) => [...etiquetesTotes, ...post.etiquetes],
			[]
		)
	)
);
console.log(etiquetesNoRepetides);

const etiquetesNoRepetides2 = posts
	.reduce((etiquetesTotes, post) => [...etiquetesTotes, ...post.etiquetes], [])
	.filter((etiqueta, index, array) => index === array.indexOf(etiqueta));
console.log(etiquetesNoRepetides2);

const nota4a7 = posts.filter(
	(post) => post.valoracio >= 4 && post.valoracio <= 7
);
console.log(nota4a7);

const nota4a7bis = posts.filter(
	(post) => post.valoracio >= nota.min && post.valoracio <= nota.max
);
console.log(nota4a7bis);

const indexmes1 = posts.filter(
	(post, index) => index < 2 && post.etiquetes.includes("react")
);
console.log(indexmes1);

const anyActual = new Date().getFullYear();
console.log(anyActual);

const any2023 = posts.filter((post) => post.any === anyActual);
console.log(any2023);

const myArray = [
	-7, -5, -2, 2, 1, 3, 12, 14, 13, 15, 70, 17, 33, 25, 27, 30, 97,
];

function filtrarPrimers(element) {
	for (let i = 2; element > i; i++) {
		if (element % i === 0) {
			return false;
		}
	}
	return element > 1;
}

const primeNumbers = myArray.filter(filtrarPrimers);
console.log(primeNumbers);

const random = ["1", "blue", 2, "-4", 0, true, -3.4];
const numbers = random.filter(
	(num) => typeof num === "number" && Number.isInteger(num)
);
console.log(numbers);

const num5 = "123";
console.log(isNaN(num5));
console.log(Number.isFinite(num5));
console.log(Number.isInteger(num5));

const anyTitol = any2023.map(
	(posts) => `${posts.titol}, publicat l'any ${anyActual}`
);
console.log(anyTitol);

const text = "El meu últim";

const elMeuUltim = posts.filter((post) => post.titol.includes(text));
console.log(elMeuUltim);

const elMeuUltim2 = posts.filter((post) => post.titol.indexOf(text) !== -1);
console.log(elMeuUltim2);

let text2 = "abcde";
let nouArray = Array.from(text2, (element, index) => element + "-" + index);
console.log(nouArray);

let text3 = "abcdeabdeacdeba";

let text4 = Array.from(text3);
console.log(text4);

let nouArray2 = Array.from(text3)
	.filter((element, index, array) => index === array.indexOf(element))
	.map((element, index) => element + "-" + index);
console.log(nouArray2);

let text5 = text3.split("");
console.log(text5);

let nouArray3 = text3
	.split("")
	.filter((element, index, array) => index === array.indexOf(element))
	.map((element, index) => element + "-" + index);
console.log(nouArray3);

const dades = [
	{
		id: 1,
		titol: "Iron Man",
		edicio: 2008,
	},
	{
		id: 2,
		titol: "Spiderman: homecoming",
		edicio: 2008,
	},
	{
		id: 1,
		titol: "Iron Man",
		edicio: 2008,
	},
];

const rebreDades2 = () => dades;
console.log(rebreDades2());

const rebreDades3 = () =>
	setTimeout(() => {
		console.log("2s més tard...", dades);
	}, 2000);
console.log(rebreDades3());

const error = "Cagada pastoret!...";

const rebreDades4 = () => {
	return new Promise((resolve, reject) => {
		if (dades.length == 0) {
			reject(new Error(error));
		} else {
			setTimeout(() => {
				resolve(dades);
			}, 2000);
		}
	});
};

rebreDades4()
	.then((dades) => {
		console.log("2s més tard...", dades);
	})
	.catch((err) => {
		console.log(err.message);
	});
console.log(rebreDades4());

async function demanaDades() {
	try {
		const demana = await rebreDades4();
		console.log("2s més tard...", demana);
	} catch (err) {
		console.log(err.message);
	}
}
console.log(demanaDades());

const fetched = true;
const result2 = "Promise was fulfilled";
const error2 = "Promise was rejected";

const myPromise = new Promise((resolve, reject) => {
	if (fetched) {
		resolve(dades);
	} else {
		reject(new Error(error2));
	}
});

myPromise
	.then(() => {
		console.log(dades, result2);
	})
	.catch((error2) => {
		console.log(error2.message);
	});

async function exerciciPromise() {
	try {
		const result3 = await myPromise;
		console.log(result3, dades);
	} catch (error2) {
		console.log(error2.message);
	}
}
console.log(exerciciPromise());

const url = "https://pokeapi.co/api/v2/encounter-condition/1/";
fetch(url)
	.then((response) => response.json())
	.then((pokemon) => {
		console.log(pokemon);
	})
	.catch((err) => console.error(err));

fetch("https://jsonplaceholder.typicode.com/posts/1")
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		console.log(data);
	})
	.catch((err) => console.error(err));
console.log("línia 2");

async function carregarDades() {
	const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
	const data = await response.json();
	console.log(data);
}
console.log(carregarDades());

const rebreAcudit = async () => {
	try {
		const resposta = await fetch("https://icanhazdadjoke.com/", { headers: { Accept: "application/json" } });
		const dades = await resposta.json();
		console.log(dades);
	} catch (err) {
		console.log(err.message)
	} finally {
		console.log("Promesa acabada")
	};
}
console.log(rebreAcudit());



const numbers3 = [2, 4, 6];
//const newNumbers = numbers.map((n) => n / 2);
const newNumbers = numbers3.map(function calcul(n) {
	return n / 2;
});
console.log(newNumbers);

const midu = {
	name: "Miguel",
	twitter: "@midudev",
	experience: {
		years: 18,
		focus: "javascript",
	},
};

const miduWithNewInfo = {
	...midu,
	youtube: "https://youtube.com/midudev",
	books: ["Aprende React"],
};

console.log(midu);
console.log(miduWithNewInfo);

// cambiamos un par de propiedades de la "copia" del objeto
miduWithNewInfo.name = "Miguel Ángel";
miduWithNewInfo.experience.years = 19;

// hacemos un console.log del objeto inicial
console.log(midu);
console.log(miduWithNewInfo);
