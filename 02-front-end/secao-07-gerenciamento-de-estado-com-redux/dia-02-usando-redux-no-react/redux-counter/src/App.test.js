import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';
import renderWithRedux from './helper/renderWithRedux';
// import { act } from 'react-dom/test-utils';

describe('Testar o comportamento da aplicação', () => {
  it('testa se o botão de incrementar 1 incrementa de um em um', () => {
    const initialState = {
      count: 0,
    };
    renderWithRedux(<App />,
      {
        initialState,
      });
    const buttons = screen.getAllByRole('button');

    userEvent.click(buttons[0]);
    const display = screen.getAllByRole('heading', { level: 2 });
    expect(display[0].innerHTML).toBe('1');


    userEvent.click(buttons[1]);
    expect(display[0].innerHTML).toBe('6');
    expect(display[1].innerHTML).toBe('2');
  });

  it('testa se ao iniciar com um estado inicial de 5 o contador conta apartir deste número inicial.', () => {
    const initialState = {
      counterReducer: {
        count: 5,
        clicks: 0,
      }
    }
    renderWithRedux(<App />, {
      initialState,
    });

    const buttons = screen.getAllByRole('button');
    const display = screen.getAllByRole('heading', { level: 2 });


    userEvent.click(buttons[0]);

    expect(display[0].innerHTML).toBe('6');

    userEvent.click(buttons[1]);

    expect(display[0].innerHTML).toBe('11');
  });

  test('Incrementa o valor da store ao clicar no botão', () => {
    const { store } = renderWithRedux(<App />);
    // expect(screen.getByText('0')).toBeInTheDocument();
    expect(store.getState().counterReducer.count).toBe(0);
    const button = screen.getByRole('button', { name: /incrementar 1/i });
    const display = screen.getAllByRole('heading', { level: 2 });


    userEvent.click(button);
    expect(display[0].innerHTML).toBe('1');
    expect(store.getState().counterReducer.count).toBe(1);
  });
});
