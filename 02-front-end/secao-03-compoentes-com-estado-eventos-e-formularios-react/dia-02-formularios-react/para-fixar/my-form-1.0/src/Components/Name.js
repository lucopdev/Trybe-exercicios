import React from 'react';

class Name extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <fieldset className="divs">
        <label>Qual seu nome?</label>
        <input value={value} name="nome" className="input-text" type="text" onChange={handleChange}></input>
      </fieldset>
    );
  }
}

export default Name;
