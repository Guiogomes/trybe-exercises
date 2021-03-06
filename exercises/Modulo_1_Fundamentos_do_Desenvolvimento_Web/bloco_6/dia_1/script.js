function createStateOptions(params) {
  const statesOfBrazil = ['Acre', 'Alagoas', 'Amapá', 'Amazonas','Bahia', 'Ceará', 'Distrito Federal', 'Espirito Santo', 'Goiás','Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro','Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
  // percorrer a lista de estados
  for (let index = 0; index < statesOfBrazil.length; index += 1) {
    // capturar a posição da lista que estou
    let statePosition = statesOfBrazil[index];
    // dentro de cada posição criar uma opção
    const createOptionOfState = document.createElement('option');
    createOptionOfState.innerText = statePosition;
    createOptionOfState.id = statePosition;
    document.getElementById('state-select').appendChild(createOptionOfState);
  }

}
createStateOptions();

function getInputsData() {
  const inputItems = document.getElementsByTagName('input');
  const inputValuesSave = [];
  for (let index = 0; index < inputItems.length; index += 1) {
    const inputItemsObjectForm = {
      name: inputItems[index].name,
      id: inputItems[index].id,
      content: inputItems[index].value,
    };
    inputValuesSave.push(inputItemsObjectForm);
  }
  return inputValuesSave;
getInputsData();

// function validateInfoInputs() {
//   const getDateInput = document.getElementById('beginning-input').value;
//   let dayOfGetDateInput = getDateInput[0]+getDateInput[1];
//   let monthOfGetDateInput = getDateInput[3]+getDateInput[4];
//   let yearOfGetDateInput = getDateInput[6]+getDateInput[7]+getDateInput[8]+getDateInput[9];
//   let ocurrancyOfNumbers = /0123456789/g;
//  if(dayOfGetDateInput !== ocurrancyOfNumbers) {
//   alert('entre com um formato válido de dia');
//   return;
//  } else if (parseInt(dayOfGetDateInput) < 0) {
//    alert('entre com um formato válido de dia');
//    return;
//  } else if (parseInt(dayOfGetDateInput > 31)) {
//   alert('entre com um formato válido de dia');
//   return;
//  } else if(monthOfGetDateInput !== ocurrancyOfNumbers){
//   alert('entre com um formato válido de mês');
//   return;
//  } else if (parseInt(monthOfGetDateInput) < 1) {
//   alert('entre com um formato válido de mês');
//   return;
//  } else if (parseInt(monthOfGetDateInput) > 12) {
//    alert('entre com um formato válido de mês');
//   return;
//  } else if (yearOfGetDateInput !== ocurrancyOfNumbers) {
//   alert('entre com um formato válido de ano');
//   return;
//  } else if (parseInt(yearOfGetDateInput) < 1900) {
//   alert('entre com um formato válido de ano');
//   return;
//  } else if (parseInt(yearOfGetDateInput) > 2005) {
//    alert('entre com um formato válido de ano');
//   return;
//  }
// }
// validateInfoInputs();

function validateDateEntry() {
  // capturar como elemento ajuda a melhorar o tratamento da informação 
  // em outros pontos (retorno do alerta).
  const dateString = document.querySelector('#beginning-input');
  // split separa apagando pelo elemento que eu dei como ponto de interrupção.
  let stringDateArray = dateString.value.split('/');
  if (dateString.value.length !== 10) {
    alert('Entrada de data incorreta');
    dateString.value = 'dd/mm/aaaa'; 
  } else if (stringDateArray[0] < 1 || stringDateArray[0] > 31) {
    alert('Entrada de dia incorreta');
    dateString.value = 'dd/mm/aaaa';
    return;
  } else if (stringDateArray[1] < 1 || stringDateArray[0] > 12) {
    alert('Entrada de mês incorreta');
    dateString.value = 'dd/mm/aaaa';
    return;
  } else if (stringDateArray[2] < 1900 || stringDateArray[2] > 2003) {
    alert('Entrada de ano incorreta');
    dateString.value = 'dd/mm/aaaa';
    return;
  } else {
    alert('bom garoto!');
  }
}

const submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', validateDateEntry)

