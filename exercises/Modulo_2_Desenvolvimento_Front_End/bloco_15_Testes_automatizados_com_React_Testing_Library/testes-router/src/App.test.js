import React from 'react';
import renderWithRouter from './renderWithRouter.js';
import App from './App';

it('deve renderizar o componente App', () => {
  const { getByText } = renderWithRouter(<App />);
  const home = getByText(/Você está na página Início/);
  expect(home).toBeInTheDocument();
});