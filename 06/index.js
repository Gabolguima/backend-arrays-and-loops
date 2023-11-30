const numeros = [3, 4, 7, 8, 1, 6, 5, 10];

let counting = 0;

for (let pairs of numeros) {
  while (pairs % 2 === 0) {
    counting += pairs;
    break;
  }
}

console.log(counting);