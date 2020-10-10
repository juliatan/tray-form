/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Formik, Field, Form } from 'formik';
import Button from '../UI/Button/Button';
import classes from './PrivacyDetails.module.scss';

const privacyDetails = (props) => {
  return (
    <div className={classes.PrivacyDetails} data-testid="privacyDetails">
      <Formik
        initialValues={{ newsletters: [] }}
        onSubmit={(values) => {
          props.saveDetails(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label>
              <Field type="checkbox" name="newsletters" value="trayProduct" />
              Receive updates about Tray.io product by email
            </label>
            <label>
              <Field type="checkbox" name="newsletters" value="otherProducts" />
              Receive communication by email for other products created by the
              Tray.io team
            </label>
            <Button
              type="submit"
              disabled={isSubmitting}
              data-testid="privacyDetailsSubmit"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default privacyDetails;
