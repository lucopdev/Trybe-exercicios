import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreator, clickCounter } from './redux/actions';

class App extends Component {
  render() {
    const { dispatch, clicksState, countState } = this.props;
    const dispatchAll = (increment = 1) => {
      dispatch(actionCreator(increment));
      dispatch(clickCounter());
    };
    return (
      <div className="App">
        <h1>Contador</h1>
        <h2>{countState}</h2>
        <button
          onClick={() => dispatchAll()}
        >
          Incrementar 1
        </button>
        <button
          onClick={() => dispatchAll(5)}
        >
          Incrementar 5
        </button>
        <h2>{clicksState}</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  countState: state.count,
  clicksState: state.clicks,
});

export default connect(mapStateToProps)(App);
