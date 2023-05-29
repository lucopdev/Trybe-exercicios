// ValidEmail.js
import React from 'react';
import PropTypes from 'prop-types';
import './validemail.css';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const ValidEmail = (props) => {
  const { email } = props;
  return (
    <div>
      <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2>
      {email && (
        <h2 data-testid="is-valid" className={ verifyEmail(email) ? 'valid' : 'invalid'}>
          {(verifyEmail(email) ? 'Email Válido': 'Email Inválido')}
        </h2>
      )}
    </div>
  );
};

ValidEmail.propTypes = {
  email: PropTypes.string.isRequired,
};

export default ValidEmail;
