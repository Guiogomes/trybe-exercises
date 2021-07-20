let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length);
// 3
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);
// Tomar café

let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);
// Brincar com o cachorro

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma elemento no final do array
tasksList.unshift('Levantar'); // adiciona mais um elemento no inicio do array
console.log(tasksList);

// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.pop();  // retira o ultimo elemento do array
tasksList.shift(); // retira o primeiro elemento do array
console.log(tasksList);

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let indexOfTask = tasksList.indexOf('Reunião'); // retorna a posiçao do elemento dentro do array, 
// no caso retornará 1.
console.log(indexOfTask);

// 1

// Exercício 1
// Obtenha o valor "Serviços" do array menu :

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

// Exercício 2
// Procure o índice do valor "Portfólio" do array menu :

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf ('Portfólio');

console.log(indexOfPortfolio);

// Exercício 3
// Adicione o valor "Contato" no final do array menu :

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

menu.push('Contato');

console.log(menu);

let cars = ['Saab', 'Volvo', 'BMW'];

for (let index = 0; index < cars.length; index += 1){
    console.log (cars.sort()[index]);
}

// Exercício 1
// Utilize o for para imprimir os elementos da lista groceryList com o console.log() :

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for (let index = 0; index < groceryList.length; index += 1) {
    console.log (groceryList.sort()[index]);
}


let numeros = [1,2,3,4,5];
for(let numero of numeros) {
  console.log(numero);
}

// resultado: 
//1
//2
//3
//4
//5


let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}
// resultado:
// "H"
// "e"
// "l"
// "l"
// "o"


let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}
// resultado:
// "H"
// "e"
// "l"
// "l"
// "o"


let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}
// 11
// 21
// 31

// Exercício 1
// Utilize o for/of para imprimir os elementos da lista names com o console.log() :

let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let name of names.sort()){
    console.log (name);
}