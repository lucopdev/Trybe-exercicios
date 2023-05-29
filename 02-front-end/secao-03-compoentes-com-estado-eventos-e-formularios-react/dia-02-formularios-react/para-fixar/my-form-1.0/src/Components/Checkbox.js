import React from 'react';

class Checkbox extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <fieldset className="divs">
        <label>Vai comparecer?</label>
        <input value={value} name="comparecimento" className="input-number" type="checkbox" onChange={handleChange}></input>
      </fieldset>
    );
  }
}

export default Checkbox;
