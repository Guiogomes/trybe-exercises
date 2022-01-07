import React from 'react';
import './App.css';
import Cronometer from './components/Cronometer';
import Input from './components/Input';
import PlaySound from './components/PlaySound';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCronometer: true,
      minutes: '',
      seconds: ''

    }
    this.switchCronometer = this.switchCronometer.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  switchCronometer() {
    this.setState(({ showCronometer }) => ({
      showCronometer: !showCronometer, 
    }))
  } 
  handleChange({ target }) {
		this.setState({
			[target.name] : target.value
		})
	}

	componentDidMount() {
		const ONE_SECOND = 1000;
		this.tikTak = setInterval(() => {
			this.setState(({ seconds }) => ({seconds: seconds  - 1}))
		}, ONE_SECOND);
	}

	componentDidUpdate(_previousProps, previouslyState) {
		const RESET_SECONDS = 1;
		if (previouslyState.seconds === RESET_SECONDS) {
			this.setState({ 
			seconds: 60,
			minutes: previouslyState.minutes - 1,	
		})
		}
	}

	componentWillUnmount() {
    clearInterval(this.tikTak);
  }	

  render() {
    const { showCronometer, minutes, seconds } = this.state;
    return(
      <main>
      {showCronometer ? <div>
        <Input name="minutes" onChange={this.handleChange} />
        <Input name="seconds" onChange={this.handleChange} />
      </div> : <Cronometer minutes={minutes} seconds={seconds}/>}
      <button
        type="button"
        onClick={this.switchCronometer}>
          { showCronometer ?  'Intervalin' : 'Cabou o recreio'}
        </button>
        {/* <PlaySound /> */}
      </main>
    )
  }
}
export default App;
