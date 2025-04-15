const user = {
  name: "Thalysson",
  altura: 1.67,
  peso: 110,
}

function calcularImc(user) {
  const imc = user.peso / (user.altura * user.altura);
  console.log(`Seu IMC é ${imc.toFixed(2)}`);
  if (imc < 16){
    console.log("Magreza grave");
  } else if (imc >= 16 && imc < 16.9) {
    console.log("Magreza moderada");
  } else if (imc >= 17 && imc < 18.4) {
    console.log("Magreza leve");
  } else if (imc >= 18.5 && imc < 24.9) {
    console.log("Saudável");
  } else if (imc >= 25 && imc < 29.9) {
    console.log("Sobrepeso");
  } else if (imc >= 30 && imc < 34.9) {
    console.log("Obesidade grau I");
  } else if (imc >= 35 && imc < 39.9) {
    console.log("Obesidade grau II");
  } else {
    console.log("Obesidade grau III ou mórbida");
  }
}

calcularImc(user);
