import React from 'react';

class SelectCourse extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <fieldset className="divs">
        <label>Selecione o curso</label>
        <select value={value} name="curso" className="select" onChange={handleChange}>
          <option></option>
          <option>React</option>
          <option>Python</option>
          <option>SQL</option>
          <option>Rust</option>
        </select>
      </fieldset>
    );
  }
}

export default SelectCourse;