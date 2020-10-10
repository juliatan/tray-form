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
        'Password needs to contain at least one uppercase, one lowercase and one number',
      )
      .required('Your password is required'),
    email: Yup.string()
      .email("This doesn't look like a valid email address")
      .required('Your email is required'),
  });

  return (
    <div className={classes.UserDetails}>
      <Formik
        initialValues={{ email: '', password: '', name: '', role: '' }}
        validationSchema={UserDetailsSchema}
        onSubmit={(values, { setSubmitting }) => {
          props.saveUserDetails(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, isValid, dirty }) => (
          <Form>
            <label htmlFor="name">Name:</label>
            <Field name="name" type="text" placeholder="Full name" />
            <ErrorMessage name="name" />

            <label htmlFor="role">Role:</label>
            <Field name="role" type="text" placeholder="Role" />
            <ErrorMessage name="role" />

            <label htmlFor="email">Email:</label>
            <Field name="email" type="email" placeholder="Email address" />
            <ErrorMessage name="email" />

            <label htmlFor="password">Password:</label>
            <Field
              name="password"
              type="password"
              placeholder="Password (minimum of 10 characters)"
            />
            <ErrorMessage name="password" />

            <button
              type="submit"
              disabled={!(isValid && dirty) || isSubmitting}
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
