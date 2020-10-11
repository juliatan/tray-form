import React from 'react';
import { render, cleanup, fireEvent, waitFor } from '@testing-library/react';
import PrivacyDetails from './PrivacyDetails';

describe('PrivacyDetails component', () => {
  let saveDetails;
  let component;

  beforeEach(() => {
    saveDetails = jest.fn();
    component = <PrivacyDetails saveDetails={saveDetails} />;
  });

  afterEach(cleanup);

  it('should render', () => {
    const { asFragment } = render(component);
    expect(asFragment(component)).toMatchSnapshot();
  });

  it('should submit form when both options checked', async () => {
    const { getByTestId } = render(component);

    fireEvent.click(getByTestId('trayProduct'));
    fireEvent.click(getByTestId('otherProducts'));
    fireEvent.click(getByTestId('privacyDetailsSubmit'));

    await waitFor(() =>
      expect(saveDetails).toHaveBeenCalledWith({
        newsletters: ['trayProduct', 'otherProducts'],
      }),
    );
  });

  it('should submit form when trayProduct is checked', async () => {
    const { getByTestId } = render(component);

    fireEvent.click(getByTestId('trayProduct'));
    fireEvent.click(getByTestId('privacyDetailsSubmit'));

    await waitFor(() =>
      expect(saveDetails).toHaveBeenCalledWith({
        newsletters: ['trayProduct'],
      }),
    );
  });

  it('should submit form when otherProducts is checked', async () => {
    const { getByTestId } = render(component);

    fireEvent.click(getByTestId('otherProducts'));
    fireEvent.click(getByTestId('privacyDetailsSubmit'));

    await waitFor(() =>
      expect(saveDetails).toHaveBeenCalledWith({
        newsletters: ['otherProducts'],
      }),
    );
  });

  it('should submit form when no options are checked', async () => {
    const { getByTestId } = render(component);

    fireEvent.click(getByTestId('privacyDetailsSubmit'));

    await waitFor(() =>
      expect(saveDetails).toHaveBeenCalledWith({
        newsletters: [],
      }),
    );
  });
});
