const numeros = [2, 3, 4, 6];

let soma = 0;

//--FOR-- 

for (let indice = 0; indice < numeros.length; indice++) {
  soma += numeros[indice];
}

//--FOR of--

// for (let item of numeros) {
//   soma += item;
// }

console.log(soma);