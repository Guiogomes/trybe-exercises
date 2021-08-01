import React, { Component } from 'react';

class Cronometer extends Component {
	constructor(props){
		super(props);
		this.state = {
			seconds: 0,
			minutes: 0,
		}
	}

	componentDidMount() {
		const ONE_SECOND = 1000;
		this.tikTak = setInterval(() => {
			this.setState(({ seconds }) => ({seconds: seconds + 1}))
		}, ONE_SECOND);
	}

	componentDidUpdate(_previousProps, previoulyState) {
		const ONE_MINUTE_IN_SECONDS = 6000;
		if (previoulyState.seconds === ONE_MINUTE_IN_SECONDS) {
			this.state({ 
			seconds: 0,
			minutes: previoulyState.minutes + 1,	
		})
		}
	}

	componentWillUnmount() {
    clearInterval(this.tikTak);
  }

  render() {
		const { seconds, minutes } = this.state;
		return(
			<h1>{`${ minutes } : ${ seconds }`}</h1>
		)
}
}
export default Cronometer;
