import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  afterEach(cleanup);

  it('should render', () => {
    const { asFragment } = render(<Button>Submit</Button>);
    expect(asFragment(<Button>Submit</Button>)).toMatchSnapshot();
  });
});
