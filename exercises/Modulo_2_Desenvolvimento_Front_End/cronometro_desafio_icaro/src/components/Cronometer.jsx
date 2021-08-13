import React, { Component } from 'react';

class Cronometer extends Component {
	render() {
		const {minutes, seconds } = this.props;
		return(
			<div>		
				<h1>{`${ minutes } : ${ seconds }`}</h1>
			</div>	
		)
	}
}
export default Cronometer;
