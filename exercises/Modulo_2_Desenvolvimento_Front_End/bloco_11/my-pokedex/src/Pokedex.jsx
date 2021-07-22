import React from 'react';
import Pokemon from './Pokemon';
import pokemons from './data';

class Pokedex extends React.Component {
	render () {
		return (
			<div className = 'pokedex'>
				{pokemons.map(
					pokemon => <Pokemon poke ={pokemon}/>
				)}
			</div>
		)
	}
}

export default Pokedex;