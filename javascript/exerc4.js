function calcularTinta(altura, largura) {
  const area = altura * largura; // calcula a área
  const litroPorMetro = 2; // quantidade de tinta necessária por metro quadrado
  const litros = area * litroPorMetro; // calcula a quantidade de tinta
  console.log(`A quantidade de tinta necessária é ${litros}L`); // imprime a quantidade de tinta
}
calcularTinta(4, 5); // 40L
calcularTinta(3, 20); // 120L