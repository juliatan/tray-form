import React from 'react';
import { render, cleanup, fireEvent, waitFor } from '@testing-library/react';
import UserDetails from './UserDetails';

describe('UserDetails component', () => {
  let saveDetails;
  let component;

  beforeEach(() => {
    saveDetails = jest.fn();
    component = <UserDetails saveDetails={saveDetails} />;
  });

  afterEach(cleanup);

  it('should render', () => {
    const { asFragment } = render(component);
    expect(asFragment(component)).toMatchSnapshot();
  });

  it('should submit form with validated user details', async () => {
    const { container, getByTestId } = render(component);
    const nameInput = container.querySelector('input[name="name"]');
    const roleInput = container.querySelector('input[name="role"]');
    const emailInput = container.querySelector('input[name="email"]');
    const passwordInput = container.querySelector('input[name="password"]');

    const name = 'mockname';
    const role = 'mockrole';
    const email = 'test@email.com';
    const password = '1234asdfASDF';

    fireEvent.change(nameInput, {
      target: {
        value: name,
      },
    });

    fireEvent.change(roleInput, {
      target: {
        value: role,
      },
    });

    fireEvent.change(emailInput, {
      target: {
        value: email,
      },
    });

    fireEvent.change(passwordInput, {
      target: {
        value: password,
      },
    });

    fireEvent.click(getByTestId('userDetailsSubmit'));
    await waitFor(() =>
      expect(saveDetails).toHaveBeenCalledWith({
        name,
        role,
        email,
        password,
      }),
    );
  });

  it('should not submit form if no name', async () => {
    const { container, getByTestId } = render(component);
    const emailInput = container.querySelector('input[name="email"]');
    const passwordInput = container.querySelector('input[name="password"]');

    const email = 'test@email.com';
    const password = '1234asdfASDF';

    fireEvent.change(emailInput, {
      target: {
        value: email,
      },
    });

    fireEvent.change(passwordInput, {
      target: {
        value: password,
      },
    });

    fireEvent.click(getByTestId('userDetailsSubmit'));
    await waitFor(() => expect(saveDetails).not.toHaveBeenCalled());
  });

  it('should not submit form if invalid email', async () => {
    const { container, getByTestId } = render(component);
    const nameInput = container.querySelector('input[name="name"]');
    const emailInput = container.querySelector('input[name="email"]');
    const passwordInput = container.querySelector('input[name="password"]');

    const name = 'mockname';
    const email = 'notanemail';
    const password = '1234asdfASDF';

    fireEvent.change(nameInput, {
      target: {
        value: name,
      },
    });

    fireEvent.change(emailInput, {
      target: {
        value: email,
      },
    });

    fireEvent.change(passwordInput, {
      target: {
        value: password,
      },
    });

    fireEvent.click(getByTestId('userDetailsSubmit'));
    await waitFor(() => expect(saveDetails).not.toHaveBeenCalled());
  });

  it('should not submit form if invalid password', async () => {
    const { container, getByTestId } = render(component);
    const nameInput = container.querySelector('input[name="name"]');
    const emailInput = container.querySelector('input[name="email"]');
    const passwordInput = container.querySelector('input[name="password"]');

    const name = 'mockname';
    const email = 'test@email.com';
    const password = 'poorpassword';

    fireEvent.change(nameInput, {
      target: {
        value: name,
      },
    });

    fireEvent.change(emailInput, {
      target: {
        value: email,
      },
    });

    fireEvent.change(passwordInput, {
      target: {
        value: password,
      },
    });

    fireEvent.click(getByTestId('userDetailsSubmit'));
    await waitFor(() => expect(saveDetails).not.toHaveBeenCalled());
  });
});
