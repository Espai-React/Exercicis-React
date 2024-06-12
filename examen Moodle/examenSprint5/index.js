// array academias = [{name: '', capacity: number, full:boolean, teachers: ['', '', '']  }]

const academias = [
  {
    name: 'it academy',
    capacity: 200,
    full: true,
    teachers: ['luis', 'ismael', 'rita'],
  },
  {
    name: 'englishacademy',
    capacity: 50,
    full: false,
    teachers: ['luis', 'john', 'sarah'],
  },
  {
    name: 'swimacademy',
    capacity: 300,
    full: true,
    teachers: ['lucia', 'rosy', 'manolo'],
  },
];

// Array d'acadèmies no plenes i de més de 200 places
(() => {
  const academiesAmb200AmbPlaces = academias.filter(
    (academia) => academia.capacity > 200 && academia.full === false
  );
  console.log('academiesAmb200AmbPlaces -->');
  console.table(academiesAmb200AmbPlaces);
})();

// Buscar professors repetits
let arrayProfessorsMapPla = [];

// Aconseguir un array de professors amb map + concat
(() => {
  const arrayProfessorsMap = academias.map((academia) => [
    ...academia.teachers,
  ]);
  arrayProfessorsMapPla = [].concat(...arrayProfessorsMap);
  console.log('Aconseguir un array de professors amb map + concat -->');
  console.table(arrayProfessorsMapPla);
})();

// Aconseguir un array de professors amb map + reduce
(() => {
  arrayProfessorsMapPla = academias
    .map((academia) => academia.teachers)
    .reduce((acumulat, actual) => [...acumulat, ...actual], []);
  console.log('Aconseguir un array de professors amb map + reduce -->');
  console.table(arrayProfessorsMapPla);
})();

// Aconseguir un array de professors amb map + flat
(() => {
  arrayProfessorsMapPla = academias.map((academia) => academia.teachers).flat();
  console.log('Aconseguir un array de professors amb map + flat -->');
  console.table(arrayProfessorsMapPla);
})();

// Aconseguir un array de professors amb flatMap
(() => {
  arrayProfessorsMapPla = academias.flatMap((academia) => [
    ...academia.teachers,
  ]);
  console.log('Aconseguir un array de professors amb flatMap -->');
  console.table(arrayProfessorsMapPla);
})();

// Aconseguir un array SENSE repetits
// Un Set elimina els elements repetits
(() => {
  const setProfessorsSenseRepetir = new Set(arrayProfessorsMapPla);
  const arrayProfessorsSenseRepetir = [...setProfessorsSenseRepetir];
  console.log(
    'Un Set per definició elimina els elements repetits -->',
    arrayProfessorsSenseRepetir
  );
})();

// Aconseguir un array dels repetits
// Fer-ho només amb arrays i un reduce
(() => {
  const arrayProfessorsSenseRepetir = arrayProfessorsMapPla.reduce(
    (noRepetit, professor, index, array) => {
      if (
        array.indexOf(professor) !== array.lastIndexOf(professor) &&
        !noRepetit.includes(professor)
      ) {
        noRepetit.push(professor);
      }
      return noRepetit;
    },
    []
  );
  console.log(
    'Fer-ho només amb arrays i un reduce -->',
    arrayProfessorsSenseRepetir
  );
})();

// Aconseguir un array amb els repetits
(() => {
  const arrayProfessorsSenseRepetir = arrayProfessorsMapPla.reduce(
    (noRepetit, professor, index, array) => array.indexOf(professor) === index,
    []
  );
  console.log(
    'Aconseguir un array amb els repetits',
    arrayProfessorsSenseRepetir
  );
})();
