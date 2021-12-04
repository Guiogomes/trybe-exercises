import React from 'react'
import { Provider } from 'react-redux'
import { render, cleanup, screen } from '@testing-library/react';
import userEvent  from '@testing-library/user-event';
import App from './App';

import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';

// código do course:

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}
// testes 1 e 2 são os testes do course:

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();
  });

  test('a click in a button should increment the value of clicks', () => {
    const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});

    expect(queryByText('5')).toBeInTheDocument();
  });

  test('click on button change text value', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 0 }}});
    const buttonAdd = screen.getByRole('button');
    userEvent.click(buttonAdd);
    const textContent = screen.getByText('1');
    expect(textContent).toBeInTheDocument();
  });

  test('change the store from ten and clicking on button incremente the value of clicks', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 } } });
    console.log()
    const buttonAdd = screen.getByRole('button');
    userEvent.click(buttonAdd);
    const textContent = screen.getByText('11');
    expect(textContent).toBeInTheDocument();
  });
});