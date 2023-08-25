function verificar() {
  const data = new Date();
  const ano = data.getFullYear();
  var formano = document.getElementById("txtano");
  var res = document.querySelector("div#res");
  if (formano.value.length == 0 || formano.value > ano) {
    window.alert("[ERRO] Verifique os dados e teste novamente!");
  } else {
    var formsex = document.getElementsByName("radsex");
    var idade = ano - Number(formano.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (formsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        // criança
        img.setAttribute("src", "assets/images/foto-bebe-m.png");
      } else if (idade < 21) {
        // Jovem
        img.setAttribute("src", "assets/images/foto-jovem-m.png");
      } else if (idade < 60) {
        // Adulto
        img.setAttribute("src", "assets/images/foto-adulto-m.png");
      } else {
        //idoso
        img.setAttribute("src", "assets/images/foto-idoso-m.png");
      }
    } else if (formsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        // criança
        img.setAttribute("src", "assets/images/foto-bebe-f.png");
      } else if (idade < 21) {
        // Jovem
        img.setAttribute("src", "assets/images/foto-jovem-f.png");
      } else if (idade < 60) {
        // Adulto
        img.setAttribute("src", "assets/images/foto-adulto-f.png");
      } else {
        //idoso
        img.setAttribute("src", "assets/images/foto-idoso-f.png");
      }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img);
  }
}
