function contar() {
  var inicio = document.getElementById("txtinicio");
  var fim = document.getElementById("txtfim");
  var passo = document.getElementById("txtpasso");
  var resultado = document.getElementById("res");

  if (
    inicio.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    window.alert("[ERRO] Faltam dados!");
  } else {
    resultado.innerHTML = "Contando: ";
    let i = Number(inicio.value);
    let f = Number(fim.value);
    let p = Number(passo.value);
    if (p <= 0) {
      window.alert("Passo inválido! Considerando Passo = 1");
      p = 1;
    }
    if (i < f) {
      //Contagem crescente
      for (let c = i; c <= f; c += p) {
        resultado.innerHTML += ` ${c} \u{1F449}`;
      }
    } else {
      //Contagem decrescente
      for (let c = i; c >= f; c -= p) {
        resultado.innerHTML += ` ${c} \u{1F449}`;
      }
    }
    resultado.innerHTML += `\u{1F3C1}`;
  }
}
