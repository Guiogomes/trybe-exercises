const students = [
  { name: 'Maria', grade: 70, approved: '' },
  { name: 'José', grade: 56, approved: '' },
  { name: 'Roberto', grade: 90, approved: '' },
  { name: 'Ana', grade: 81, approved: '' },
];

function verifyGrades() {
  for (let i = 0; i < students.length; i += 1) {
    const student = students[i];
    if (student.grade >= 60) {
      student.approved = 'Aprovado';
    } else {
      student.approved = 'Recuperação';
    }
  }
}

verifyGrades();

console.log(students);
// [
//   { name: 'Maria', grade: 70, approved: 'Aprovado' },
//   { name: 'José', grade: 56, approved: 'Recuperação' },
//   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
//   { name: 'Ana', grade: 81, approved: 'Aprovado' }
// ]

function verifyGradesWithForEach() {
  students.forEach((student, index) => {
    if (student.grade >= 60) {
      students[index].approved = 'Aprovado';
    } else {
      students[index].approved = 'Recuperação';
    }
  });
}

verifyGradesWithForEach();

console.log(students);
// [
//   { name: 'Maria', grade: 70, approved: 'Aprovado' },
//   { name: 'José', grade: 56, approved: 'Recuperação' },
//   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
//   { name: 'Ana', grade: 81, approved: 'Aprovado' }
// ]

const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
let firstMultipleOf5;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 5 === 0) {
    firstMultipleOf5 = numbers[index];
    break;
  }
}

console.log(firstMultipleOf5);
// 50

const firstMultipleOf5WithFind = numbers.find((number) => number % 5 === 0);

console.log(firstMultipleOf5WithFind);

const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValues.forEach((element) => {
  console.log('Cada elemento do array:', element);
});

// Cada elemento do array: josé
// Cada elemento do array: 50
// Cada elemento do array: 0.25
// Cada elemento do array: { comida: 'Chocolate' }

arrayOfValues.forEach((element, indexOfTheArray, theEntireArray) => {
  console.log('Cada elemento do array:', element);
  console.log('Index, posição do elemento:', indexOfTheArray);
  console.log('Array percorrido:', theEntireArray);
});

// => ---------------
//   Cada elemento do array: josé
//   Index, posição do elemento: 0
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
//   ---------------
//   Cada elemento do array: 50
//   Index, posição do elemento: 1
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
//   ---------------
//   Cada elemento do array: 0.25
//   Index, posição do elemento: 2
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
//   ---------------
//   Cada elemento do array: { comida: 'Chocolate' }
//   Index, posição do elemento: 3
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]

const numbers2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

numbers2.forEach(multipliesFor2);

const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
};
names.forEach(convertToUpperCase);
console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

// Adicione seu código aqui
const showEmails = emailListInData.forEach((eachEmail) => {
	showEmailList(eachEmail);
})

console.log(showEmails);

const numbers3 = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers3.find(verifyEven);

console.log(isEven); // 30

console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers3.find((number) => number % 2 === 0);

console.log(isEven2); // 30

const numbers4 = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (number) => {
  if (number % 3 === 0 && number % 5 === 0) {
		return number;
	}
}

const divisibleBy3And5 = numbers4.find(findDivisibleBy3And5);

console.log(divisibleBy3And5);

const names2 = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (word) => {
  if(word.length === 5) {
		return word;
	}
}

const fiveLettersName = names2.find(findNameWithFiveLetters);

console.log(fiveLettersName);

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
	for (let index in musicas)
  if(musicas[index].id === id) {
		console.log (musicas[index].id);
	} else {
		return false;
	}
}

console.log(findMusic('31031685'))