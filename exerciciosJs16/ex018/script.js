let num = document.querySelector("input#txtnum");
let lista = document.querySelector("select#flista");
let resultado = document.querySelector("div#res");
let valores = [];

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (!isNumero(num.value)) {
    window.alert("[ERRO] Valor inválido");
  } else if (inLista(num.value, valores)) {
    window.alert("[ERRO] Valor ja existe na lista!");
  } else {
    let valor = Number(num.value);
    valores.push(valor); // Adicionar o valor à lista
    let item = document.createElement("option");
    item.text = `Valor ${valor} adicionado`;
    lista.appendChild(item);
    resultado.innerHTML = "";
  }
  num.value = "";
  num.focus();
}

function finalizar() {
  if (valores.length == 0) {
    window.alert("Adicione valores antes de finalizar!");
  } else {
    let totalNum = valores.length;
    let maiorNum = valores[0];
    let menorNum = valores[0];
    let somaNum = 0;
    let mediaNum = 0;
    for (let pos in valores) {
      somaNum += valores[pos];
      if (valores[pos] > maiorNum) maiorNum = valores[pos];
      if (valores[pos] < menorNum) menorNum = valores[pos];
    }
    mediaNum = somaNum / totalNum;

    resultado.innerHTML = "";
    resultado.innerHTML += `<p>Ao todo, temos ${totalNum} números cadastrados.</p>`;
    resultado.innerHTML += `<p>O maior valor da lista é ${maiorNum}.</p>`;
    resultado.innerHTML += `<p>O menor valor da lista é ${menorNum}.</p>`;
    resultado.innerHTML += `<p>A soma dos valores, é igual a ${somaNum}.</p>`;
    resultado.innerHTML += `<p>A média dos valores, é igual a ${mediaNum}.</p>`;
  }
}
