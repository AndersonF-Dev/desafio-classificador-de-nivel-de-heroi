const herois = [
    { nome: "Naruto", xp: 1500 },
    { nome: "Sasuke", xp: 4500 },
    { nome: "Sakura", xp: 8500 },
    { nome: "Kakashi", xp: 10000 },
    { nome: "Hinata", xp: 12000 }
  ];
  
  for (let i = 0; i < herois.length; i++) {
    const nomeHeroi = herois[i].nome;
    const quantidadeXP = herois[i].xp;
  
    let nivel = "";
  
    if (quantidadeXP < 1000) {
      nivel = "Ferro";
    } else if (quantidadeXP >= 1001 && quantidadeXP <= 2000) {
      nivel = "Bronze";
    } else if (quantidadeXP >= 2001 && quantidadeXP <= 5000) {
      nivel = "Prata";
    } else if (quantidadeXP >= 5001 && quantidadeXP <= 7000) {
      nivel = "Ouro";
    } else if (quantidadeXP >= 7001 && quantidadeXP <= 8000) {
      nivel = "Platina";
    } else if (quantidadeXP >= 8001 && quantidadeXP <= 9000) {
      nivel = "Ascendente";
    } else if (quantidadeXP >= 9001 && quantidadeXP <= 10000) {
      nivel = "Imortal";
    } else if (quantidadeXP >= 10001) {
      nivel = "Radiante";
    }
  
    console.log(`O Herói de nome ${nomeHeroi} está no nível: ${nivel}`);
  }
  

