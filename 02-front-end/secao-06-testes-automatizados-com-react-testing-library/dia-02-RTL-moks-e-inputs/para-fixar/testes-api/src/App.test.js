// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('Testa o comportamento da aplicação', () => {
  afterEach(() => jest.clearAllMocks());
  
  it('fetches a joke', async () => {
    
    const joke = {
      id: '7h3oGtrOfxc',
      joke: 'Whiteboards ... are remarkable.',
      status: 200,
    };
    
    // primeira forma
    
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(joke),
    });
    
    render(<App />);
    const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
    expect(renderedJoke).toBeInTheDocument();
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      'https://icanhazdadjoke.com/',
      { headers: { Accept: 'application/json' } },
    );
  
    // segunda forma
  
    // global.fetch = jest.fn(() => Promise.resolve({
    //   json: () => Promise.resolve(joke),
    // }));
  
    // render(<App />);
    // const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
    // expect(renderedJoke).toBeInTheDocument();
    // expect(global.fetch).toHaveBeenCalledTimes(1);
    // expect(global.fetch).toHaveBeenCalledWith(
    //   'https://icanhazdadjoke.com/',
    //     { headers: { Accept: 'application/json' } }
    // );
  
    // terceira forma
  
    // global.fetch = jest.fn(async () => ({
    //   json: async () => joke
    // }));
    //   render(<App />);
    // const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
    // expect(renderedJoke).toBeInTheDocument();
    // expect(global.fetch).toHaveBeenCalledTimes(1);
    // expect(global.fetch).toHaveBeenCalledWith(
    //   'https://icanhazdadjoke.com/',
    //     { headers: { Accept: 'application/json' } }
    // );
  });
  it('Testa se o botão "next joke" chama uma nova piada', async () => {
  const joke1 = {
      id: '7h3oGtrOfxc',
      joke: 'Whiteboards ... are remarkable.',
      status: 200,
    };

    const joke2 = {
      id: '8h3oftrObxa',
      joke: 'como não perder duas motos? ... pega elas yamaha.',
      status: 200,
    };

    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: async () => (joke1)
    });

    render(<App />);
    const btnNextJoke = screen.getByRole('button', { name: /next joke/i });
    const result1 = await screen.findByText(joke1.joke);
    const result2 = await screen.findByText(joke2.joke);

    expect(result1).toBeInTheDocument();
    expect(result2).not.toBeInTheDocument();
    expect(global.fetch).toHaveBeenCalledTimes(1);

    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: async () => (joke2)
    });
    userEvent.click(btnNextJoke);
  
    expect(result1).not.toBeInTheDocument();
    expect(result2).toBeInTheDocument();
    expect(global.fetch).toHaveBeenCalledTimes(2);
  });
});