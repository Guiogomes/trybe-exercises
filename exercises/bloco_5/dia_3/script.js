function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    }
  }
  
  createDaysOfTheWeek();

function createDaysOfMounth () {

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
  const monthDaysList = document.querySelector ('#days');
  

  for (let index = 0; index < dezDaysList.length; index += 1) {
      const monthDays = dezDaysList [index];
      const monthDaysListItem = document.createElement ('li');
      monthDaysListItem.className = 'day';
      monthDaysListItem.innerHTML = monthDays;
      monthDaysList.appendChild (monthDaysListItem);
      if (monthDaysListItem.innerText === '24' || monthDaysListItem.innerText === '31'){
          monthDaysListItem.className = 'day holiday';
      } else if (monthDaysListItem.innerText === '4' || monthDaysListItem.innerText === '11' || monthDaysListItem.innerText === '18') {
          monthDaysListItem.className = 'day friday';
      } else if (monthDaysListItem.innerText === '25') {
          monthDaysListItem.className = 'day friday holiday';
      }
  }
}

  createDaysOfMounth ();

function holidayButtons(feriados) {
    let buttonsContainer = document.querySelector ('.buttons-container');
    let feriadosButton = document.createElement ('button');
    buttonsContainer.appendChild (feriadosButton);
    feriadosButton.setAttribute ('id', 'btn-holiday');
    feriadosButton.innerText = feriados;
  //selecionar elemento;
  //criar elemento;
  //adicionarNoPai.appendChild(filho);
  
}

  holidayButtons ('feriado');

function holidayListener () {
  console.log ('ahu');
  let holidayDays = document.querySelectorAll('.holiday');
  const botao = document.querySelector('#btn-holiday');
  botao.addEventListener('click', () => {
    for (let index = 0; index < holidayDays.length; index += 1 ) {
      let color = holidayDays[index];
      if (color.style.backgroundColor === 'red'){
        color.style.backgroundColor = '#eee';
      } else {
        color.style.backgroundColor = 'red';
      }
    }
    
  })
}
holidayListener ();

// let holidayButtonEvent = document.querySelector('#btn-holiday');
// console.log (holidayButtonEvent);
// createDaysOfMounth ();
// // holidayButtonsEvent.addEventListener ('click', createDaysOfMounth)
// //    for (let index = 0; index < monthDaysList.length; index += 1) {
// //      let storage = monthDaysList [index];
// //      if (monthDaysList[index] == document.querySelector ('.holiday')){
// //         monthDaysListItem[index].style.backgroundColor = 'red'
// //      }
// //    }
  // Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda
  //  a cor de fundo dos dias que possuem a classe "holiday" .
  // É interessante que este botão possua também a lógica inversa. 
  // Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .


  
