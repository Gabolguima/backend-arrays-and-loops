const numeros = [11, 7, 55, 9];

let maiorDiferenca = -Number.MAX_VALUE;

for (let x of numeros) {
  for (let y of numeros) {
    const diferencaAtual = x - y;
    if (diferencaAtual > maiorDiferenca) {
      maiorDiferenca = diferencaAtual;
    }
  }
}

console.log(maiorDiferenca);

//== Usando as funções Math. min e max ===//

// const minNumber = Math.min(...numeros);
// const maxNumber = Math.max(...numeros);

// const maxDiference = (maxNumber - minNumber);

// console.log(maxDiference);