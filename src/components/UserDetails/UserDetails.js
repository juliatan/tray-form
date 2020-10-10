import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import classes from './UserDetails.module.scss';

const userDetails = (props) => {
  const UserDetailsSchema = Yup.object().shape({
    name: Yup.string()
      .max(50, 'Please use less than 50 characters')
      .required('Your name is required'),
    password: Yup.string()
      .min(10, 'Password needs to be a minimum of 10 characters')
      .max(50, 'Please use less than 50 characters')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{10,})/,
        'Must contain at least one uppercase, lowercase and number character',
      )
      .required('Your password is required'),
    email: Yup.string()
      .email("This doesn't look like a valid email address")
      .required('Your email is required'),
  });

  return (
    <div className={classes.UserDetails}>
      <p className={classes.Legend}>* is a required field</p>
      <Formik
        initialValues={{ email: '', password: '', name: '', role: '' }}
        validationSchema={UserDetailsSchema}
        onSubmit={(values) => {
          props.saveDetails(values);
        }}
      >
        {({ isSubmitting, isValid, dirty }) => (
          <Form>
            <div className={classes.LabelContainer}>
              <label htmlFor="name">
                Name: <span className={classes.Required}>*</span>
              </label>
              <ErrorMessage name="name" />
            </div>
            <Field name="name" type="text" placeholder="Full name" />

            <div className={classes.LabelContainer}>
              <label htmlFor="role">Role:</label>
              <ErrorMessage name="role" />
            </div>
            <Field name="role" type="text" placeholder="Role" />

            <div className={classes.LabelContainer}>
              <label htmlFor="email">
                Email: <span className={classes.Required}>*</span>
              </label>
              <ErrorMessage name="email" />
            </div>
            <Field name="email" type="email" placeholder="name@company.com" />

            <div className={classes.LabelContainer}>
              <label htmlFor="password">
                Password: <span className={classes.Required}>*</span>
              </label>
              <ErrorMessage name="password" />
            </div>
            <Field
              name="password"
              type="password"
              placeholder="Password (minimum of 10 characters)"
            />

            <button
              type="submit"
              disabled={!(isValid && dirty) || isSubmitting}
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

export default userDetails;
