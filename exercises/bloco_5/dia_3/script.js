function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
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
    feriadosButton.setAttribute ('id', 'btn-holiday');
       
    buttonsContainer.appendChild(feriadosButton);
}

holidayButtons ();


// Implemente uma função que receba como parâmetro a string "Feriados" e 
// crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

  
