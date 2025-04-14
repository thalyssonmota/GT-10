function rentCar(days, km) {
  const daily = 250 * days;
  if (km > 1000) {
    const valueTotal = daily + (km * 0.25);
    console.log(`O valor do aluguel é de R$ ${valueTotal}`);
  }
  else {
    const valueTotal = daily + (km * 0.50);
    console.log(`O valor do aluguel é de R$ ${valueTotal}`);
  }
}

rentCar(5, 1200); 
rentCar(3, 800);
rentCar(10, 2000);

