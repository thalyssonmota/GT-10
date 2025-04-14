const car = {
  model: "Civic",
  year: 2021,
  color: "blue",
  km: 800
}

function checkCar(car) {
  if (car.year > 2020 || car.km < 1000) {
    console.log("Carro Novo");
  } else {
    console.log("Carro Usado");
  }
}

checkCar(car);