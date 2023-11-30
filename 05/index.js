const original = [1, 4, 12, 21, 53, 88, 112];

let pares = [];

for (let numeros of original) {
  const restoDivisao = numeros % 2;
  if (restoDivisao === 0) {
    pares.push(numeros);
  }
}

console.log(pares);