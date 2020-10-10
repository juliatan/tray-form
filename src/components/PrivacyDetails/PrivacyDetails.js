/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Formik, Field, Form } from 'formik';
import classes from './PrivacyDetails.module.scss';

const privacyDetails = (props) => {
  return (
    <div className={classes.PrivacyDetails}>
      <Formik
        initialValues={{ newsletters: [] }}
        onSubmit={(values) => {
          props.saveDetails(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            {/* <div role="group" aria-labelledby="checkbox-group"> */}
            <label>
              <Field type="checkbox" name="newsletters" value="trayProduct" />
              Receive updates about Tray.io product by email
            </label>
            <label>
              <Field type="checkbox" name="newsletters" value="otherProducts" />
              Receive communication by email for other products created by the
              Tray.io team
            </label>
            {/* </div> */}

            <button
              type="submit"
              disabled={isSubmitting}
              className={classes.SubmitButton}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default privacyDetails;
