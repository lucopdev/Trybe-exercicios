import React, { useState } from 'react';

function Form() {
  const [inputForm, setInputform] = useState({
    inputName: '',
    age: '',
    city: '',
    module: '',
  });

  const handleInput = ({ target }) => {
    const { name, value } = target;
    
    setInputform((prevState) => ({
      ...prevState,
      [name]: value 
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-container">
      <h1>Formulário</h1>
      <form>
        <fieldset>
          <label>Nome:{' '}
            <input
              name="inputName"
              value={inputForm.inputName}
              type="text"
              onChange={handleInput}
            />
          </label>
          <label>Idade:{' '}
            <input
              name="age"
              value={inputForm.age}
              type="number"
              onChange={handleInput}
            />
          </label>
          <label>Cidade:{' '}
            <input
              name="city"
              value={inputForm.city}
              type="text"
              onChange={handleInput}
            />
          </label>
        </fieldset>
        <fieldset>
          <label>Fundamentos:{' '}
            <input
              name="module"
              type="radio"
              value="Fundamentos"
              onChange={handleInput}
            />
          </label>
          <label>Frontend:{' '}
            <input
              name="module"
              type="radio"
              value="Frontend"
              onChange={handleInput}
            />
          </label>
          <label>Backend:{' '}
            <input
              name="module"
              type="radio"
              value="Backend"
              onChange={handleInput}
            />
          </label>
          <label>CS:{' '}
            <input
              name="module"
              type="radio"
              value="Ciência da computação"
              onChange={handleInput}
            />
          </label>
        </fieldset>
        <button
          onClick={handleSubmit}
        >Enviar</button>
      </form>
    </div>
  );
}

export default Form;