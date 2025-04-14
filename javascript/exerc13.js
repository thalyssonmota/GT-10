const user = {
  nome: "Thalysson",
  idade: 30,  
  genero: "Masculino",
  cidade: "Fortaleza"
}

function checkEnlistment(user) {
  if (user.idade >= 18 && user.genero == "Masculino") {
    console.log(`${user.nome} precisa se alistar!`);    
  }
  else{
    console.log(`${user.nome} não precisa se alistar!`);    
  }
}

checkEnlistment(user);
