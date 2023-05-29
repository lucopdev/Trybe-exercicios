import React from 'react';

class Age extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <fieldset className="divs">
        <label>Qual sua idade?</label>
        <input value={value} name="idade" className="input-number" type="number" onChange={handleChange}></input>
      </fieldset>
    );
  }
}

export default Age;
