import React from 'react';
import Age from './Age';
import Name from './Name';
import Checkbox from './Checkbox';
import Habilities from './Habilities';
import SelectCourse from './SelectCourse';

class Form extends React.Component {
  constructor() {
    super()

    this.state = {
      curso: '',
      nome: '',
      idade: '',
      habilidades: '',
      comparecimento: false,
      formularioPreenchido: false,
    }
  }

  handleErrors = () => {
    const { curso, nome, idade, habilidades, comparecimento } = this.state;
    const errorCases = [
      !curso.length,
      !nome.length,
      !idade.length,
      !habilidades.length,
      comparecimento !== true,
    ]
    const noErrors = errorCases.every((error) => error === false);
    this.setState({
      formularioPreenchido: noErrors,
    });
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.handleErrors);
  };

  render() {
    const { curso, nome, idade, habilidades, comparecimento, formularioPreenchido } = this.state;

    return (
      <section className="section">
        <form className="forms">
          <h1>FORM REACT</h1>

          <SelectCourse value={curso} handleChange={this.handleChange} />
          <Name value={nome} handleChange={this.handleChange} />
          <Age value={idade} handleChange={this.handleChange} />
          <Habilities value={habilidades} handleChange={this.handleChange} />
          <Checkbox value={comparecimento} handleChange={this.handleChange} />
          {formularioPreenchido ? <span>Todos os campos foram preenchidos</span> : <span>Preencha todos os campos</span>}
          <button>Submit</button>
        </form>
      </section>
    )
  }
}

export default Form;
