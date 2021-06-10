function createStateOptions(params) {
  const statesOfBrazil = ['Acre', 'Alagoas', 'Amapá', 'Amazonas','Bahia', 'Ceará', 'Distrito Federal', 'Espirito Santo', 'Goiás','Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro','Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
  // percorrer a lista de estados
  for (let index = 0; index < statesOfBrazil.length; index += 1) {
    // capturar a posição da lista que estou
    let statePosition = statesOfBrazil[index];
    // dentro de cada posição criar uma opção
    const createOptionOfState = document.createElement('option');
    createOptionOfState.innerText = statePosition;
    document.getElementById('state-select').appendChild(createOptionOfState);
  }

}
createStateOptions();

