function carregar() {
  var msg = document.getElementById("msg");
  var img = document.getElementById("imagem");
  var data = new Date();
  const hora = data.getHours();
  var minutos = data.getMinutes();
  msg.innerHTML = `Agora são ${hora}:${minutos} horas!`;

  if (hora >= 0 && hora < 12) {
    img.src = "/exerciciosJs/horaDoDia/assets/images/manha.png";
    document.body.style.background = "rgb(246, 212, 185)";
  } else if (hora >= 12 && hora <= 18) {
    img.src = "/exerciciosJs/horaDoDia/assets/images/tarde.png";
    document.body.style.background = "rgb(170, 68, 3)";
  } else {
    img.src = "/exerciciosJs/horaDoDia/assets/images/noite.png";
    document.body.style.background = "rgb(0, 38, 46)";
  }
}
