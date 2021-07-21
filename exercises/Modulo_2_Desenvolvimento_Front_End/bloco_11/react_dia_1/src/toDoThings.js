import React  from 'react';

const toDoThings = ['meu primeiro html com react', 'estudar classes', 'estudar a sintaxe do react',
'me tornar um ótimo front-end dev', 'dominar o react like a master yoda'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

class ToDoThings extends React.Component {
	render() {
		return toDoThings.map((thing) => Task(thing))
	}
}

export default ToDoThings;