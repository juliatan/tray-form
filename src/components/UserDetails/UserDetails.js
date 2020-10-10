import React from 'react';
// import Input from '../UI/Input/Input';
import { Formik } from 'formik';
import classes from './UserDetails.module.scss';

const userDetails = (props) => (
  <div className={classes.UserDetails}>
    <Formik
      initialValues={{ email: '', password: '', name: '', role: '' }}
      validate={(values) => {
        const errors = {};

        if (!values.name) {
          errors.name = 'Required';
        }

        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }

        if (!values.password) {
          errors.password = 'Required';
        } else if (values.password.length < 10) {
          errors.password =
            'Must be > 9 characters and include a number, uppercase and lowercase character';
        } // include regex check

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        {
          props.saveUserDetails(JSON.stringify(values, null, 2));
        }
        // setTimeout(() => {
        //   alert(JSON.stringify(values, null, 2));
        //   setSubmitting(false);
        // }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Full name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          {errors.name && touched.name && errors.name}

          <label htmlFor="role">Role:</label>
          <input
            type="text"
            name="role"
            placeholder="Role"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.role}
          />
          {errors.role && touched.role && errors.role}

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Password (more than 9 chars)"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default userDetails;
