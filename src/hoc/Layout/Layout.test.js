import React from 'react';
import { render, cleanup, fireEvent, waitFor } from '@testing-library/react';
import Layout from './Layout';

describe('Layout component', () => {
  let component;

  beforeEach(() => {
    component = <Layout>Hello World</Layout>;
  });

  afterEach(cleanup);

  it('should render', () => {
    const { asFragment } = render(component);
    expect(asFragment(component)).toMatchSnapshot();
  });

  it('should display PrivacyDetails page upon submission of validated user details', async () => {
    const { container, getByTestId } = render(component);
    const nameInput = container.querySelector('input[name="name"]');
    const emailInput = container.querySelector('input[name="email"]');
    const passwordInput = container.querySelector('input[name="password"]');

    fireEvent.change(nameInput, {
      target: {
        value: 'mockname',
      },
    });

    fireEvent.change(emailInput, {
      target: {
        value: 'test@email.com',
      },
    });

    fireEvent.change(passwordInput, {
      target: {
        value: '123456789Aa',
      },
    });

    fireEvent.click(getByTestId('userDetailsSubmit'));
    await waitFor(() => getByTestId('privacyDetails'));
  });

  it('should display VerificationReminder page upon submission of privacy details', async () => {
    const { container, getByTestId } = render(component);
    const nameInput = container.querySelector('input[name="name"]');
    const emailInput = container.querySelector('input[name="email"]');
    const passwordInput = container.querySelector('input[name="password"]');

    fireEvent.change(nameInput, {
      target: {
        value: 'mockname',
      },
    });

    fireEvent.change(emailInput, {
      target: {
        value: 'test@email.com',
      },
    });

    fireEvent.change(passwordInput, {
      target: {
        value: '123456789Aa',
      },
    });

    fireEvent.click(getByTestId('userDetailsSubmit'));
    await waitFor(() => fireEvent.click(getByTestId('privacyDetailsSubmit')));
    await waitFor(() => getByTestId('verificationReminder'));
  });
});
