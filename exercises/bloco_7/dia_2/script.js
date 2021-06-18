const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};
customer.lastName = 'Souza';
console.log(customer.lastName);
console.log(customer['firstName']);
console.log(customer.firstName);
console.log(`${customer.lastName}, ${customer.firstName}`);

const customer1 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

console.log(customer1);

customer1.lastName = 'Faria';
console.log(customer1);

const customer2 = {
  firstName: 'Maria',
  age: 23,
  job: 'Medic',
};

console.log(customer2);
customer2['lastName'] = 'Silva';
console.log(customer2);

const customer4 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';
customer4[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer4.firstName} ${customer4.lastName}`;
customer4[newKey] = fullName;
console.log(customer4);

// const makeObject = (object, key, value) => {
// 	let doObject = {};
// 	doObject = object;
// 	let newKey = key;	
// 	doObject[newKey] = value;	
// }

// console.log(makeObject('professor', 'nome', 'Roberto'));

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

console.log(Object.keys(student1));

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const takeObjectKeys = (object) => {
	let takeObjectKeysOfObject = Object.keys(object);
  for (let index in takeObjectKeysOfObject) {
    let key = takeObjectKeysOfObject[index];
    takeObjectKeysOfObject[index] = `${key} : ${object[key]}`;
  }
  return takeObjectKeysOfObject;
}

console.log(takeObjectKeys(student2));

const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};

const listSkillsValuesWithFor = (student) => {
  const skills = [];
  for(skill in student) {
    skills.push(student[skill]);
  }

  return skills;
};

const listSkillsValuesWithValues = (student) => Object.values(student);

// Sem Object.values
console.log(listSkillsValuesWithFor(student));

// Com Object.values
console.log(listSkillsValuesWithValues(student));