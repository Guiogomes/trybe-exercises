const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  const studentObject = students.map((student) => {
	return {name: student};
	});
	const averageGrades = grades.map((grade) => {
		return {average: grade}
	});
	studentObject.forEach((student,index) => {
		Object.assign(student,averageGrades[index])
	})
	const studentAvarege = studentObject.map((student) => {		
		const avarege = student.average.reduce((accumulator, currentValue, _, array) => 
			// to fixed serve para fixar as casas decimais
			// formata o número usando um ponto de fixação.
			// usando casas decimais.
			accumulator + currentValue / array.length, 0).toFixed(1)
		return parseFloat(avarege);
	})
	studentObject.forEach((student,index) => student.average = studentAvarege[index])
	return studentObject;
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);