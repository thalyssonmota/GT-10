function aluguelCarro(diarias, kmRodados) {
  const valorDiaria = 250.0;
  const valorKm = 0.60;

  const valorTotal = (diarias * valorDiaria) + (kmRodados * valorKm);
  console.log(`Valor total do aluguel: R$ ${valorTotal}`);
}

aluguelCarro(5, 100); 
aluguelCarro(10, 200);