import React from 'react';
import PropTypes from 'prop-types';
import './pokemon.css';

class Pokemon extends React.Component {
	render() {
		const { name, type, averageWeight, image} = this.props.poke
		return (
			<div className='pokemon'>
				<img src={image} alt={name}></img>
				<p>{name}</p>
				<p>{type}</p>
				<p>{`averageWeight: ${averageWeight.value}${averageWeight.measurementUnit}`}</p>
			</div>			
		)
	}
}

Pokemon.propTypes = {
	poke: PropTypes.shape({
		name: PropTypes.string,
		type: PropTypes.string,
		averageWeight: PropTypes.shape({
			value: PropTypes.number,
			measurementUnit: PropTypes.string
		}),
		image: PropTypes.string
	}).isRequired
}

export default Pokemon;