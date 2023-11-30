const numeros = [54, 22, 14, 87, 10, 284];

let resposta = -1;

for (let indice = 0; indice < numeros.length; indice++) {
  let numero = numeros[indice];
  if (numero === 10) {
    resposta = indice;
    break;
  }
}

console.log(resposta);