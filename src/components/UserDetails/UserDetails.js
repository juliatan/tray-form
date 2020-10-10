import React from 'react';
// import Input from '../UI/Input/Input';
import { Formik } from 'formik';
import * as Yup from 'yup';
import classes from './UserDetails.module.scss';

const userDetails = (props) => {
  const UserDetailsSchema = Yup.object().shape({
    name: Yup.string().max(50, 'Too Long!').required('Required'),
    password: Yup.string()
      .min(10, 'Too Short!')
      .max(50, 'Too Long!')
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{10,})/, 'Invalid')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });

  return (
    <div className={classes.UserDetails}>
      <Formik
        initialValues={{ email: '', password: '', name: '', role: '' }}
        validationSchema={UserDetailsSchema}
        onSubmit={(values, { setSubmitting }) => {
          props.saveUserDetails(values);
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
};

export default userDetails;
