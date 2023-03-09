import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.action1 = this.action1.bind(this);
    this.action2 = this.action2.bind(this);
  };

  state = {
    numeroDeCliques: 0,
    par: 'green',
    impar: 'red',
  };

  greenForEven = (num, even, odd) => {
    return num % 2 === 0 ? even : odd;
  }

  action1() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques = 0,
    }))
  };

  action2() {
  };

  action3 = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1,
    }))
  };

  render() {
    const { numeroDeCliques, par, impar } = this.state;
    return (
      <div className="App" >
        <section className="App-section">
          <button onClick={this.action1} className="btn-action">Reset</button>
          <button onClick={this.action2} className="btn-action">Nada</button>
          <button onClick={this.action3} className="btn-action">Adiciona 1</button>
          <p className="result" style={{ backgroundColor: this.greenForEven(numeroDeCliques,par, impar ) }}>{numeroDeCliques}</p>
        </section>
      </div >
    );
  }
}

export default App;
