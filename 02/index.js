const letras = ["A", "a", "B", "C", "E", "e"];

let contagem = 0;

for (letra of letras) {
  if (letra === "E" || letra === "e") {
    contagem++;
  }
}

if (contagem === 0) {
  console.log("Nenhuma letra \"E\" ou \"e\" foi encontrada.");
} else if (contagem === 1) {
  console.log("Foi encontrada 1 letra \"E\" ou \"e\".");
} else {
  console.log(`Foram encontradas ${contagem} letras "E" ou "e"!`);
}