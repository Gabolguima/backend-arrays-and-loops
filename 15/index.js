const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

//== For tradicional
for (let i = 0; i < original.length; i++) {
  if (original[i] % 2 === 0) {
    pares.push(original[i]);
  } else {
    impares.push(original[i]);
  }
}

console.log(pares);
console.log(impares);

//== For de of
// for (let numero of original) {
//   const resto = numero % 2;

//   if (resto === 0) {
//     pares.push(numero);
//   } else {
//     impares.push(numero);
//   }
// }

// console.log(pares);
// console.log(impares);