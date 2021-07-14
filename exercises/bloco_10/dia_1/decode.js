function decode(string) {
  let decodeString = '';
  //verificar se a letra é uma vogal
  for (let index = 0; index < string.length; index +=1){
    //se for vogal substituir por número 
    //ter atenção, aqui a igualdade tem que ser 
    //feita com dois (=) pois senão fica algo
    //estrito, um número em uma string não mudaria.
    if (string[index] == 1){
      decodeString += 'a';
    } else if (string[index] == 2){
      decodeString += 'e';
    } else if (string[index] == 3){
      decodeString += 'i';
    } else if (string[index] == 4){
      decodeString += 'o';
    } else if (string[index] == 5){
      decodeString += 'u';
    } else {
      decodeString += string[index];
    }
  }
  return decodeString;
}