let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    }
}

console.log ('A jogadora ' + player.name + ' possui ' + player.medals.golden + ' medalhas de ouro' + ' e outras ' + player.medals.silver + ' medalhas de prata.');

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

console.table (player);

let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}

let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};

for (let index in car) {
  console.log(index, car[index]);
}

let food = ['hamburguer', 'bife', 'acarajé'];

for (let position in food) {
  console.log(position);
};
//resultado: 0, 1, 2;

let food = ['hamburguer', 'bife', 'acarajé'];
for (let value of food) {
  console.log(value);
};
//resultado: hamburguer, bife, acarajé;

// Usando o objeto abaixo, utilize For/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, 
// substituindo o xxxxx pelo nome em questão.

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge' 
};

for (let print in names){
    console.log ('Olá ' + names[print]);
}
// Usando o objeto abaixo, utilize For/in e 
// imprima um console.log com as chaves e valores desse objeto.

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let key in car){
    console.log (key, car[key])
}


