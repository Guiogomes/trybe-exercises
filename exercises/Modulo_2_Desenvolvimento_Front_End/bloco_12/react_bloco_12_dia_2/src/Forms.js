import React from 'react';

class Forms extends React.Component {
  constructor() {
    super();
    this.state ={
      login: '',
      password: '',
      textareaValue: '',
      selectedState: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({
      [name]: value
    })
  }

	render() {
    return (
      <div>
        <form className="forms-container">
          <label> Login:
            <input type="text" name="login" value={this.state.login} onChange={this.handleChange}/>
          </label>
          <label> Senha:
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
          </label>
          <label> Mais informações: 
            <textarea name="textareaValue" value={this.state.textareaValue} onChange={this.handleChange}/>
          </label>
          <label> Selecione seu estado
            <select name="selectedState" value={this.state.selectedState} onChange={this.handleChange}>
              <option>Amapá</option>
              <option>Minas Gerais</option>
              <option>Paraná</option>
              <option>Sergipe</option>
            </select>
          </label>
        </form>
      </div>
    );    
  }
}

export default Forms;