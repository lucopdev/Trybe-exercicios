// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';


test('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
});

test('Testa se o componente possui um texto verde para email válido', () => {
  const EMAIL_USER = 'email@email.com';

  render(<ValidEmail email={EMAIL_USER} />);
  const isValid = screen.getByTestId('is-valid');
  expect(isValid).toHaveAttribute('class', 'valid');
});

test('Testa se o componente possui um texto vermelho para um email inválido', () => {
  const EMAIL_USER = 'emailerrado';

  render(<ValidEmail email={EMAIL_USER} />);
  const isValid = screen.getByTestId('is-valid');
  expect(isValid).toHaveAttribute('class', 'invalid');
});