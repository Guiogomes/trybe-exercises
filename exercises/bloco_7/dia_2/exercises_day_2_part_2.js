const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addEntryAnObject = (object, key, value) => {
	let newKey = key;
	const keyValue = value;
	object[newKey] = keyValue;
	return object;
}

console.log(addEntryAnObject (lesson2,'turno','manhã'));

const objectKeys = (object) => {
	return Object.keys(object);	
}

console.log(objectKeys(lesson1));

const lengthOfAObject = (object) => {
	return Object.entries(object).length;
}

console.log(lengthOfAObject(lesson3));

const objectValues = (object) => {
	return Object.values(object);
}

console.log(objectValues(lesson2));

const getAllLessons = (object1, object2,object3) => {
	const allLessons = {object1, object2, object3};	
	return allLessons;
}

console.log(getAllLessons(lesson1, lesson2, lesson3));

const allStudents = () => {
	const sumStudents = `${lesson1.numeroEstudantes + lesson2.numeroEstudantes + lesson3.numeroEstudantes}`;
	return sumStudents;
}

console.log(allStudents());

const getValueByKey = (object,index) => {
	const getIndexKey = Object.keys(object);
	return (object[getIndexKey[index]])
}
console.log(getValueByKey(lesson1,3));

const  verifyPairOfKeyAndValue = (object, key, value) => {
	const entrysOfObject = Object.entries(object);
	console.log (entrysOfObject);
	for (let index = 0; index < entrysOfObject.length; index += 1) {
		let entry = entrysOfObject[index];
		if (entry[0] === key && entry[1] === value) {
			return `O objeto possui o conjunto ${key} e ${value}`;
		} 
	}
	return `O objeto não possui o conjunto ${key} e ${value}`;
}
console.log(verifyPairOfKeyAndValue(lesson3, 'turno', 'noite'));