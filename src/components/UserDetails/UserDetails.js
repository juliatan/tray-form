import React from 'react';
import classes from './UserDetails.module.scss';

const userDetails = () => {
  return (
    <div className={classes.UserDetails}>
      <p>* indicates a required field</p>
      <form>
        <input placeholder="name" />
        <input placeholder="role" />
        <input placeholder="email" />
        <input placeholder="password" />
      </form>
    </div>
  );
};

export default userDetails;
