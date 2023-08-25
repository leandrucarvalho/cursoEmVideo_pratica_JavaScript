let num = [5, 2, 8];
num[3] = 4;
console.log(`Nosso vetor tem ${num}`);
num.push(1);
//sort() coloca os valores em ordem crescente
console.log(
  `Nosso vetor tem valores novos ${num.sort()} e tem ${num.length} posições`
);

let pos = num.indexOf(8);
if (pos == -1) {
  console.log("Valor não encontrado!");
} else {
  console.log(`O valor está na posição ${pos}`);
}
