const numeros = [3, 4, 1, 8, 11, 7, 5];

let maiorNumero = numeros[0];

for (let numero of numeros) {
  if (numero > maiorNumero) {
    maiorNumero = numero;
  }
}

console.log(maiorNumero);

//==Usando a função Math.max

// const find = console.log(Math.max(...numeros));