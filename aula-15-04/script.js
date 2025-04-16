// armazerando o valor dos inputs 
var altura = document.getElementById("altura")
var peso = document.getElementById("peso")

// armazerando o valor do resultado do botão por ID
var btn = document.getElementById("btn")
// armazer o valor da div fim onde vai aparecer o resultado
var end = document.getElementById("end")

function calcularImc() {
  // pegando o valor do peso e altura
  const valorPeso = peso.value
  const valorAltura = altura.value

  // calculando o imc
  const imc = valorPeso / (valorAltura * valorAltura)
  return imc.toFixed(2)
}

// função de clikck do botão
function calcular() {
  // chama a função calcularImc e armazena o valor
  const imc = calcularImc()
  var mensagem = ""
  // verificando o resultado do imc e armazenando na variável mensagem
  if (imc < 16) {
    mensagem = "Você está com Magreza grave"
  } if (imc >= 16 && imc < 16.9) {
    mensagem = "Você está com Magreza moderada"
  } if (imc >= 17 && imc < 18.5) {
    mensagem = "Você está com Magreza leve"
  } if (imc >= 18.5 && imc < 25) {
    mensagem = "Você está Saudável"
  } if (imc >= 25 && imc < 30) {
    mensagem = "Você está com Sobrepeso"
  } if (imc >= 30 && imc < 35) {
    mensagem = "Você está com Obesidade grau 1"
  } if (imc >= 35 && imc < 40) {
    mensagem = "Você está com Obesidade grau 2"
  } if (imc >= 40) {
    mensagem = " Você está com Obesidade grau 3"
  }

  // renderizar o resultado na tela
  end.innerHTML = `
  <div class="linha"></div>
        <div class="resultado">
            <div class="esquerda">
                <h2>${imc}</h2>
                <p>Seu IMC</p>
            </div>
            <div class="direita">
            <p>${mensagem}</p>
            </div>
        </div>
  <div class="linha"></div>
 `
}
// adicionando o evento de click no botão
btn.addEventListener("click", calcular)