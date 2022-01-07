import React from 'react';

export default class Input extends React.Component {
	render() {
		const { name, onChange } = this.props
		return(
			<div>
				<input type="text" name={ name } placeholder={ `digite os ${ name }` } onChange={onChange}/>
			</div>
		)
	}
}