import React from 'react';
import './App.css';

/* Embora isso funcione, essa DEFINITIVAMENTE
não é a maneira correta de se criar eventos
em React! A função se refere ao componente,
então deve ser parte de sua classe! */

class App extends React.Component {
  constructor() {
    super()
    this.state = { 
      clickNumber: 0,
      clickNumberBtn2: 0,
      clickNumberBtn3: 0
    }
    
    this.handleClick = this.handleClick.bind(this);
    this.handleClickBtn2 = this.handleClickBtn2.bind(this);
    this.handleClickBtn3 = this.handleClickBtn3.bind(this);
  }

  handleClick () {
    this.setState((previousNumberOfClicks, _props) => ({
      clickNumber: previousNumberOfClicks.clickNumber + 1,
    }));
  };

  handleClickBtn2 () {
    this.setState((previousNumberOfClicksBtn2, _props) => ({
      clickNumberBtn2: previousNumberOfClicksBtn2.clickNumberBtn2 + 1,
    }));
  };

  handleClickBtn3 () {
    this.setState((previousNumberOfClicksBtn3, _props) => ({
      clickNumberBtn3: previousNumberOfClicksBtn3.clickNumberBtn3 + 1,
    }));
  };


  render() {
    return(
      <div>
        <button onClick={this.handleClick}>botão 1: {this.state.clickNumber}</button>   
        <button onClick={this.handleClickBtn2}>botão 2: {this.state.clickNumberBtn2}</button>   
        <button onClick={this.handleClickBtn3}>botão 3: {this.state.clickNumberBtn3}</button>   
      </div>
    )}
}

export default App;