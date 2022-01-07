window.onload = function() {

	const ESTADO_INICIAL = {
		colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
		index: 0,
	};
	const NEXT_COLOR = 'NEXT_COLOR';
	const PREVIOUS_COLOR = 'PREVIOUS_COLOR';
	
	
	const colorControler = (state = ESTADO_INICIAL, actions) => {
		switch(actions.type) {
			case NEXT_COLOR:
				return {...state, index: state.index === state.colors.length - 1 ? 0 : state.index + 1 }
			case PREVIOUS_COLOR:
				return {...state, index: state.index === 0 ? state.colors.length - 1 : state.index - 1 }
			default:
				return state;
		};
	}
	const store = Redux.createStore(colorControler);
	
	document.querySelector('#next').addEventListener('click', () => {
		console.log(store.getState().index)
		store.dispatch({
			type: NEXT_COLOR,		
		})		
	});

	document.querySelector('#previous').addEventListener('click', () => {
		store.dispatch({
			type: PREVIOUS_COLOR,
		})
	});

	store.subscribe(() => {
		document.querySelector('#value').innerHTML = store.getState().colors[store.getState().index];
		document.querySelector('#container').style.backgroundColor = store.getState().colors[store.getState().index];
	});
}

