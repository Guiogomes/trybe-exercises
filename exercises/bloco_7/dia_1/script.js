function userInfo() {
  const userEmail = 'maria@email.com';

  console.log(userEmail);
  // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
}
userInfo();

// Com o template literals
console.log(`Primeira linha;
Segunda linha;
Terceira linha;`
)

// Sem o template literals:
console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n')

const printName = () => "Lucas";
console.log(printName());

// não preciso do parenteses para uma função que
// depende de UM único paramêtro, mas vou continuar usando
// fica mais claro pra mim.
const multiplyByTwo = number => number * 2;
console.log(multiplyByTwo(10));


// Em funções que recebem mais de um parâmetro, os parênteses não são omitidos:

const multiplication = (number, multi) => number * multi;
console.log(multiplication(8, 2));