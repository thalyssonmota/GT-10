const user = {
  name: "Thalysson",
  altura: 1.67,
  peso: 110,
}

function calcularImc(user) {
  const imc = user.peso / (user.altura * user.altura);
  console.log(`Seu IMC é ${imc.toFixed(2)}`);
  if (imc < 16) {
    return console.log("Magreza grave");
  } if (imc >= 16 && imc < 16.9) {
    return console.log("Magreza moderada");
  } if (imc >= 17 && imc < 18.5) {
    return console.log("Magreza leve");
  } if (imc >= 18.5 && imc < 25) {
    return console.log("Peso normal");
  } if (imc >= 25 && imc < 30) {
    return console.log("Sobrepeso");
  } if (imc >= 30 && imc < 35) {
    return console.log("Obesidade grau 1");
  } if (imc >= 35 && imc < 40) {
    return console.log("Obesidade grau 2");
  } if (imc >= 40) {
    return console.log("Obesidade grau 3");
  }
}
calcularImc(user);