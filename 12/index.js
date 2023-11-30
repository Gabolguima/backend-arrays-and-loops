const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];


while (filaDeDentro.length < 5) {
  const primeiroDeFora = filaDeFora.shift();
  if (primeiroDeFora === undefined) {
    break;
  }
  filaDeDentro.push(primeiroDeFora);
}

console.log(filaDeDentro);
console.log(filaDeFora);

//== Outra forma de fazer

// while (filaDeDentro.length < 5) {
//   filaDeDentro.push("Joana", "Roberta");
//   filaDeFora.shift("Joana");
//   filaDeFora.shift("Roberta");
// }

// console.log(filaDeDentro);
// console.log(filaDeFora);
