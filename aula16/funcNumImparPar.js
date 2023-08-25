function numImparPar(num) {
  if (num % 2 == 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}

let resultado = numImparPar(11);
console.log(resultado);
