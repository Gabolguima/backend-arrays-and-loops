//==Usando o método Push com a lógica mais simples

// const nomes = ["Ana", "Joana", "Carlos", "amanda"];

// const nameStartsWithA = [];
// nameStartsWithA.push("Ana", "amanda");

// console.log(nameStartsWithA);

//==Usando o For

const nomesComecadosComA = [];
for (let nome of nomes) {
  const inicial = nome[0];

  if (inicial === "A" || inicial === "a") {
    nomesComecadosComA.push(nome);
  }
}

console.log(nomesComecadosComA);