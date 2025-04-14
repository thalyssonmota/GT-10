const user = {
  name: "Thalysson",
  age: 30,
}

const product = [
  { nome: "Maçã", preco: 2.50 },
  { nome: "Iphone15", preco: 5500.00 }
]

const productMaiorDeIdade = [
  { nome: "51", preco: 50.00 },
  { nome: "JackDaniels", preco: 100.00 },
]

if (user.idade >= 18) {
  console.log(product, productMaiorDeIdade);
}
else {
  console.log(product);
}
