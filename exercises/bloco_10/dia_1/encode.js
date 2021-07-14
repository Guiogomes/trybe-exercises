function encode(string) {
	if (!string || typeof(string) !== 'string') {
		throw new Error('Parâmetro deve ser uma string');
	}
  //Percorrer a string letra a letra
  let encodeString = '';
  //verificar se a letra é uma vogal
  for (let index = 0; index < string.length; index +=1){
    //se for vogal substituir por número 
    if (string[index] === 'a'){
      encodeString += 1;
    } else if (string[index] === 'e'){
      encodeString += 2;
    } else if (string[index] === 'i'){
      encodeString += 3;
    } else if (string[index] === 'o'){
      encodeString += 4;
    } else if (string[index] === 'u'){
      encodeString += 5;
    } else {
      encodeString += string[index];
    }
  }
  return encodeString
  // a -> 1
  // e -> 2
  // i -> 3
  // o -> 4
  // u -> 5
  //tem preocupação com vogal minuscula. 
  //(preciso do toLowerCase?)

}

module.exports = {
	encode,
};