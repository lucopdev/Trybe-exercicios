import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApi } from './redux/action';
import DisplayResult from './components/DisplayResult';

class App extends React.Component {
  state = {
    inputName: '',
  };

  handleInputChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { inputName } = this.state;
    const { dispatch } = this.props;
    return (
      <div className="App">
        <span>Digite o nome do personagem de GOT</span>
        <input
          onChange={ this.handleInputChange }
          name="inputName"
          value={ inputName }
          type="text"
        />
        <button
          onClick={ () => dispatch(fetchApi(inputName)) }
        >
          Procurar
        </button>
        <DisplayResult />
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(App);
