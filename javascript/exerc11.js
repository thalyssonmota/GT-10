function rentCAR(days) {
  if (days > 15) {
    const valueDay = 200;
    const calculo = days * valueDay;
    console.log(`O valor do aluguel é de R$ ${calculo}`);
  }
  else {
    const valueDay = 250;
    const calculo = days * valueDay;
    console.log(`O valor do aluguel é de R$ ${calculo}`);
  }
}

rentCAR(20); // 200 * 20 = 4000
rentCAR(15); // 250 * 15 = 3750