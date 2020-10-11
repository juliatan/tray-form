import React from 'react';
import { render } from '@testing-library/react';
import VerificationReminder from './VerificationReminder';

describe('VerificationReminder component', () => {
  it('should render', () => {
    const { asFragment } = render(<VerificationReminder />);
    expect(asFragment(<VerificationReminder />)).toMatchSnapshot();
  });
});
