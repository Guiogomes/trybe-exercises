import * as Exercise from './exercises';

console.log(Exercise.greeter('Maria'));
console.log(Exercise.personAge('Maria', 40));
console.log(`A soma do array é igual a ${Exercise.sumArray([3, 6, 9])}`);

console.log(`Triângulo de base 10cm e altura 25cm: ${Exercise.triangle(10, 25)}cm²`);
console.log(`Triângulo de base 5cm e altura 30cm: ${Exercise.triangle(5, 30)}cm²`);
console.log(`Triângulo de base 100cm e altura 200cm: ${Exercise.triangle(10, 25)}cm²`);

console.log(`Quadrado de lado 10cm: ${Exercise.square(10)}cm²`);
console.log(`Quadrado de lado 5cm: ${Exercise.square(5)}cm²`);
console.log(`Quadrado de lado 100cm: ${Exercise.square(10)}cm²`);

console.log(`Retângulo de base 10cm e altura 25cm: ${Exercise.rectangle(10, 25)}cm²`);
console.log(`Retângulo de base 5cm e altura 30cm: ${Exercise.rectangle(5, 30)}cm²`);
console.log(`Retângulo de base 100cm e altura 200cm: ${Exercise.rectangle(10, 25)}cm²`);

console.log(`Losango de diagonal maior 32cm, diagonal menor 18cm. Tem área igual à:
${Exercise.diamond(32, 18)} cm²`);
console.log(`Losango de diagonal maior 200cm, diagonal menor 50cm. Tem área igual à:
${Exercise.diamond(200, 50)} cm²`);
console.log(`Losango de diagonal maior 75cm, diagonal menor 25cm. Tem área igual à:
${Exercise.diamond(75, 25)} cm²`);

console.log(`Trapézio de base maior 100cm, base menor 70cm e altura 50cm. Tem área igual à:
${Exercise.trapeze(100, 70, 50)} cm²`);
console.log(`Trapézio de base maior 75cm, base menor 50cm e altura 35cm. Tem área igual à:
${Exercise.trapeze(75, 50, 35)} cm²`);
console.log(`Trapézio de base maior 150cm, base menor 120cm e altura 80cm. Tem área igual à:
${Exercise.trapeze(150, 120, 80)} cm²`);

console.log(`Círculo de raio 25cm: ${Exercise.circle(25)}cm²`);
console.log(`Círculo de raio 100cm: ${Exercise.circle(100)}cm²`);
console.log(`Círculo de raio 12.5cm: ${Exercise.circle(12.5)}cm²`);