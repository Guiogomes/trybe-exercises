let containerHeader = document.getElementsByTagName ('header')[0];
console.log (containerHeader);
containerHeader.style.backgroundColor = 'green';

let bodyContainer = document.getElementsByTagName ('body')[0];
console.log (bodyContainer);
bodyContainer.style.backgroundColor = 'white';

let emergencyTasks = document.querySelector ('section');
console.log (emergencyTasks);
emergencyTasks.style.backgroundColor = 'pink';

let titleContainer = document.getElementsByTagName('h3');
for (let index = 0; index < titleContainer.length; container +=1){
    if (titleContainer == titleContainer [0] || titleContainer == titleContainer [1]){
        titleContainer.style.backgroundColor = 'purple';
    } else if (titleContainer == titleContainer [2] || titleContainer == titleContainer [3]){
        titleContainer.style.backgroundColor = 'black';
    }
}








