// ? LA FUNCIÓN FLECHA ES ANÓNIMA, PARA PODER DECLARAR NECESITO ALMACENARLA EN UNA VARIABLE
// ? NO NECESITA LA PALABRA RESERVADA FUNCTION
//* SU ORDEN ES () => {}

//! 1. FUNCIONES FLECHA
//1.
let saludo = () => "Hola me llamo Sif";
console.log(saludo()); // Hola me llamo Sif

//2.
let sumar = (a, b) => a / b;
console.log(sumar(6, 4)); //1.5

//3.
let miNombre = (a) => {
  return "Mi nombre es" + a;
};
console.log(miNombre(" Sif")); //Mi nombre es Sif

//4.

// ! FOREACH
// 1.

// const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// const mayoresEdad = ages.filter(age => age >=18)

// console.log(mayoresEdad);

let gente = [
  {
    nombre: "Jamiro",
    edad: 45,
  },
  {
    nombre: "Juan",
    edad: 35,
  },
  {
    nombre: "Paco",
    edad: 34,
  },
  {
    nombre: "Pepe",
    edad: 14,
  },
  {
    nombre: "Pilar",
    edad: 24,
  },
  {
    nombre: "Laura",
    edad: 24,
  },
  {
    nombre: "Jenny",
    edad: 10,
  },
];

//1.  
let mayoresDe25 = gente.filter((filtro) => filtro.edad >= 25);
console.log(mayoresDe25);
            // Lo he hecho con filter...

// ! MAP

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//! FILTER

const foodList = [
    {
      name: 'Tempeh',
      isVeggie: true
    },
    {
      name: 'Cheesbacon burguer',
      isVeggie: false
    },
    {
      name: 'Tofu burguer',
      isVeggie: true
    },
    {
      name: 'Entrecot',
      isVeggie: false
    }
  ];
  /* [
      'Que rico Tempeh me voy a comer!',
      'Que rica Tofu burguer me voy a comer!'
     ]
  */






// !REDUCE
const numeros = [39, 2, 4, 25, 62];

const numeroMultiplicados = numeros.reduce((a,b)=> a*b)
console.log(numeroMultiplicados)