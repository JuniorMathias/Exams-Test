import React from './React';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Login', () => {
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

})
