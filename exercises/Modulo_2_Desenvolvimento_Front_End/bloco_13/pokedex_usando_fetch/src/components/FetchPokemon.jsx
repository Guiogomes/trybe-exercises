import React from 'react';

export default class FetchPokemon extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pokemonArray: [],
		}
		this.fetchRequest = this.fetchRequest.bind(this);
	}
	
	componentDidMount() {
		this.fetchRequest();
	}
	getUrl = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`

	generetePokemonPromises = ()

	// async fetchRequest() {
	// 	const requestApi = await fetch('')
	// 	const response = await requestApi.json();
	// 	console.log(response)
	// 	this.setState({
	// 		pokemonArray: [response],
	// 	});
	// }

	render() {
		const { pokemonArray } = this.state;
		return (
			<div>
				{pokemonArray.map(pokemon => <li key={pokemon.url}>{pokemon.name}</li>)}
			</div>
		);
	}
} 
