const obj = {
  nom: "jordi",
  cognom: "llop",
};

const nouObj = { ...obj };
nouObj.nom = "Ramon";

console.log(obj);
console.log(nouObj);

const obj2 = {
  usuari: { nom: "Pepe", cognom: "Sarsanedas" },
};

const nouObj2 = { ...obj2, usuari: { ...obj2.usuari } };
nouObj2.usuari.nom = "Ramon";

console.log(obj2);
console.log("nouObj2", nouObj2);

const objPlantilla = {
  usuari: { tipus: "alumne", nom: "aquíNom", cognom: "aquíCognom" },
};
console.log(objPlantilla);

const actualitzaObj = (obj, nom, cognom) => ({
  ...obj,
  usuari: { ...obj.usuari, nom, cognom },
});

console.log(actualitzaObj(objPlantilla, "Joan", "Petit"));
console.log(actualitzaObj(objPlantilla, "Maria", "Gran"));

import produce from "immer";

const baseState = [
  {
    title: "Learn TypeScript",
    done: true,
  },
  {
    title: "Try Immer",
    done: false,
  },
];

const nextState = baseState;
nextState.push({ title: "Tweet about it" });
nextState[1].done = true;

console.log(baseState);
console.log(nextState);

const baseState2 = [
  {
    title: "Learn TypeScript",
    done: true,
  },
  {
    title: "Try Immer",
    done: false,
  },
];

const nextState2 = produce(baseState2, (draftState) => {
  draftState.push({ title: "Tweet about it" });
  draftState[1].done = true;
});

console.log(baseState2);
console.log(nextState2);

const baseState3 = [
  {
    title: "Learn TypeScript",
    new: {
      new: {
        new: false,
      },
    },
    done: true,
  },
  {
    title: "Try Immer",
    done: false,
  },
];

const nextState3 = produce(baseState3, (draftState) => {
  draftState[0].new.new.new = true;
});

console.log(baseState3[0]);
console.log(nextState3[0]);

