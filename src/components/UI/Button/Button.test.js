import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  it('should render', () => {
    const { asFragment } = render(<Button>Submit</Button>);
    expect(asFragment(<Button>Submit</Button>)).toMatchSnapshot();
  });
});
