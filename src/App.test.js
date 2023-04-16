import React from './React';
import { render, screen } from '@testing-library/react';
import App from './App';


describe('Login', () => {

  //when is empty
  test('given email, when empty, then show required error message', async () => {
    //lib to render component app
    render(<App />);

    //getting id from app.js and checking if the input is blank
    const email = screen.getByTestId('email');

    await userEvent.type(email, "anyValue");
    await userEvent.clear(email);

    const requiredError = screen.queryByTestId('email-required');
    expect(requiredError).not.toBeNull();
  })

  //when is not blank and hide the error message
  test('given email, when has value, then hide required error message', async () => {
    //lib to render component app
    render(<App />);

    //getting id from app.js and checking if the input is blank
    const email = screen.getByTestId('email');

    await userEvent.type(email, "anyValue");

    const requiredError = screen.queryByTestId('email-required');
    expect(requiredError).toBeNull();
  })

  //when the page is refreshed
  test('given email, when field not changed, then hide required error message', async () => {
    //lib to render component app
    render(<App />);

    const requiredError = screen.queryByTestId('email-required');
    expect(requiredError).toBeNull();
  })

})
