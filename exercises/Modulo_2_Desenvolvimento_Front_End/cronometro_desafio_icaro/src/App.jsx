import React from 'react';
import './App.css';
import Cronometer from './components/Cronometer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCronometer: true,
    }
    this.switchCronometer = this.switchCronometer.bind(this);
  }

  switchCronometer() {
    this.setState(({ showCronometer }) => ({
      showCronometer: !showCronometer
    }))
  }

  render() {
    const { showCronometer } = this.state;
    return(
      <main>
      {showCronometer && <Cronometer />}
      <button
        type="button"
        onClick={this.switchCronometer}>
          { showCronometer ?  'Cabou o recreio' : 'Intervalin'}
        </button>
      </main>
    )
  }
}
export default App;
