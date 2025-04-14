// lista de modelos de carros
const modelos = ["Fusca", "Civic", "Corolla", "Gol"];
console.log(modelos);
//adiconando um novo modelo no final da lista
modelos.push("Ranger");
console.log(modelos);
console.log(modelos.length);
modelos.push("City");
console.log(modelos.length);

//remover o último modelo da lista
modelos.pop(); // City
console.log(modelos.length);

//remover um modelo específico da lista
modelos.splice(1, 1); // remove o modelo na posição 1 (Civic)
console.log(modelos);




