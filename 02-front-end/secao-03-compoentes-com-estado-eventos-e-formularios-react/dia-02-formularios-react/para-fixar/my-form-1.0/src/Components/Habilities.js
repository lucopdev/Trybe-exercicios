import React from 'react';

class Habilities extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    let error = undefined;
    if (value.length > 30) error = 'Texto muito grande.';

    return (
      <>
        <fieldset className="divs">
          <label>Descreva suas habilidades</label>
          <textarea value={value} name="habilidades" className="textarea" onChange={handleChange}
          />
        </fieldset>
        <span>{error ? error : ''}</span>
      </>
    );
  }
}

export default Habilities;
