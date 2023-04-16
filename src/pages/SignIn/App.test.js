import React from './React';
import { render, screen } from '@testing-library/react';
import SignIn from './SignIn';


describe('Login', () => {

  //when is empty
  test('given email, when empty, then show required error message', async () => {
    //lib to render component app
    render(<SignIn  />);

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
    render(<SignIn  />);

    //getting id from app.js and checking if the input is blank
    const email = screen.getByTestId('email');

    await userEvent.type(email, "anyValue");

    const requiredError = screen.queryByTestId('email-required');
    expect(requiredError).toBeNull();
  })

  //when the page is refreshed
  test('given email, when field not changed, then hide required error message', async () => {
    //lib to render component app
    render(<SignIn  />);

    const requiredError = screen.queryByTestId('email-required');
    expect(requiredError).toBeNull();
  })


  //when is invalid
  test('given email, when invalid, then show invalid error message', async () => {
    //lib to render component app
    render(<SignIn  />);

    //getting id from app.js and checking if the input is blank
    const email = screen.getByTestId('email');

    await userEvent.type(email, "anyValue");

    const requiredError = screen.queryByTestId('email-invalid');
    expect(requiredError).not.toBeNull();
  })

  //validating password
  test('given password, when empty, then show required error message', async () => {
    //lib to render component app
    render(<SignIn  />);


    // ------------------------------------------------ 

    //getting id from app.js and checking if the input is blank
    const password = screen.getByTestId('password');

    await userEvent.type(password, "anyValue");
    await userEvent.clear(password);

    const requiredError = screen.queryByTestId('password-required');
    expect(requiredError).not.toBeNull();
  })

  test('given password, when has value, then hide required error message', async () => {
    //lib to render component app
    render(<SignIn  />);


    // ------------------------------------------------ 
    
    //getting id from app.js and checking if the input is blank
    const password = screen.getByTestId('password');

    await userEvent.type(password, "anyValue");

    const requiredError = screen.queryByTestId('password-required');
    expect(requiredError).toBeNull();
  })

})
