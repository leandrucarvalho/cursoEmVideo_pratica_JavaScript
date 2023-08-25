let amigo = {
  nome: "Leandro",
  sexo: "M",
  peso: 110.0,
  emagreceu(p = 0) {
    console.log("Perdeu peso");
    this.peso -= p;
  },
};

amigo.emagreceu(2.3);
console.log(`${amigo.nome} esta pesando ${amigo.peso}`);
