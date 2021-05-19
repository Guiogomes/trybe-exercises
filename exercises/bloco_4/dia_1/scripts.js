const name = "Guilherme";
const birthCity = "Belo Horizonte";
const birthYear = 1990;


console.log (name);
console.log (birthCity);
console.log (birthYear);

let patientId = '50';
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log (typeof patientAge);
console.log (typeof patientId);

let base = 5;
let altura = 8;
let area = base * altura;
let perimetro = 2 * (base + altura);

console.log (area);
console.log (perimetro);

let nota = 50;

if (nota >= 80) {
    console.log ('Parabéns, você foi aprovado!')
}else if (nota >= 60 && nota <= 80){
    console.log ('Infelizmente você não foi aprovado, mas está na nossa lista de espera.')
}else {
    console.log ('Infelizmente você foi reprovado.')
}


let nota = 50;
let situacaoCandidato = 'aprovado reprovado lista';
situacaoCandidato = 'lista'

switch (situacaoCandidato) {
    case 'aprovado':
        console.log ('aprovada');
        break;

    case 'lista':
        console.log ('lista de espera');
        break;

    case 'reprovado':
        console.log ('reprovada');
        break;
    
    default:
        console.log ('caso não encontrado, confirme uma opção válida');
}