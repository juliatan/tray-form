import React from 'react';
import { render, cleanup, fireEvent, waitFor } from '@testing-library/react';
import Layout from './Layout';

afterEach(cleanup);
describe('Layout component', () => {
  it('should render', () => {
    const { asFragment } = render(<Layout>Hello World</Layout>);
    expect(asFragment(<Layout>Hello World</Layout>)).toMatchSnapshot();
  });

  it('should display PrivacyDetails page upon submission of validated user details', async () => {
    const { container, getByTestId } = render(<Layout>Hello World</Layout>);
    const name = container.querySelector('input[name="name"]');
    const email = container.querySelector('input[name="email"]');
    const password = container.querySelector('input[name="password"]');

    fireEvent.change(name, {
      target: {
        value: 'mockname',
      },
    });

    fireEvent.change(email, {
      target: {
        value: 'test@email.com',
      },
    });

    fireEvent.change(password, {
      target: {
        value: '123456789Aa',
      },
    });

    fireEvent.click(getByTestId('userDetailsSubmit'));
    await waitFor(() => getByTestId('privacyDetails'));
  });

  it('should display VerificationReminder page upon submission of privacy details', async () => {
    const { container, getByTestId } = render(<Layout>Hello World</Layout>);
    const name = container.querySelector('input[name="name"]');
    const email = container.querySelector('input[name="email"]');
    const password = container.querySelector('input[name="password"]');

    fireEvent.change(name, {
      target: {
        value: 'mockname',
      },
    });

    fireEvent.change(email, {
      target: {
        value: 'test@email.com',
      },
    });

    fireEvent.change(password, {
      target: {
        value: '123456789Aa',
      },
    });

    fireEvent.click(getByTestId('userDetailsSubmit'));
    await waitFor(() => fireEvent.click(getByTestId('privacyDetailsSubmit')));
    await waitFor(() => getByTestId('verificationReminder'));
  });
});
