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

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
function createDaysOfMounth () {

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

function fridayButton(SEXTOU) {
  //selecionar
  let buttonsContainer = document.querySelector ('.buttons-container');
  //criar
  const fridayButton = document.createElement ('button');
  //adicionar (appendChild) - pai adiciona filho
  buttonsContainer.appendChild(fridayButton);
  //recebe o valor Sexta-feira
  fridayButton.innerText = SEXTOU;
  //dar um identificador
  fridayButton.id = 'btn-friday';
}
fridayButton ('Sexta-feira');

function fridayButtonClick() {
  //pegar a classe das sextas
  let fridays = document.querySelectorAll ('.friday');
  //pegar o botão
  let fridayBotao = document.querySelector ('#btn-friday');
  //criar um escutador de click para o botão
  fridayBotao.addEventListener ('click', () => {
    for (let index = 0; index < fridays.length; index += 1) {
      let sexta = fridays[index];
      if (sexta.innerText !== 'Sextou!') {
        sexta.innerText = 'Sextou!';
      } else {
        //Código desenvolvido em ajuda na sala de estudos.
        //Lopes, Thiago Souza, Pedro Henrique.
        sexta.innerText = parseInt(sexta.nextSibling.innerText) - 1;
      }
      
    }
  })
}

fridayButtonClick ();

function zoomIn() {
  //aumentar o texto
  // mouseover aumenta objeto
  let daysList = document.querySelector('#days')
  daysList.addEventListener ('mouseover', (event) => {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  });
}
zoomIn ();

function zoomOut() {
  //diminuir o texto
  //mouseout diminui o texto
  let daysList = document.querySelector('#days')
  daysList.addEventListener ('mouseout', (event) => {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  });
}

zoomOut ();

function personaliseTask(tarefa) {
  //selecionar elemento pai
  let myTasks = document.querySelector ('.my-tasks');
  //criar elemento
  let task = document.createElement ('span');
  //adicionar o filho no pai (appendChild)
  myTasks.appendChild (task);
  task.innerText = tarefa;
  //adicionar classe
  task.className = 'my-tasks';

}

personaliseTask ('cozinhar');
// Implemente uma função que adiciona uma tarefa personalizada ao calendário. 
// A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") 
// e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> 
// que possui a classe "" .

// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do 
// mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, 
// quando o ponteiro do 
// mouse sair do dia, o texto deve retornar ao tamanho original.

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


  
