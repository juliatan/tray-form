import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('should render', () => {
    const { asFragment } = render(<App />);
    expect(asFragment(<App />)).toMatchSnapshot();
  });

  it('should render header text', () => {
    const { getByText } = render(<App />);
    const h1Element = getByText(/Tray.io/i);
    expect(h1Element).toBeInTheDocument();
  });
});
