const n1 = 10;
const n2 = 8;
const media = (n1 + n2) / 2;
console.log(`A média é ${media}`);
const resultado = media >= 7 ? 'Aprovado' : 'Reprovado';
console.log(`O aluno está ${resultado}`);

const altura = 5;
const base = 10;
const area = (base * altura) - 3;
console.log(`A área da parede é ${area}m²`);

function mediaDois(n1,n2) { //Declara a função mediaDois
  const media = (n1 + n2) / 2; // calcula a média
  console.log(`A média é ${media}`); // imprime a média
}

mediaDois(10,20); // 15
mediaDois(30,20); // 25