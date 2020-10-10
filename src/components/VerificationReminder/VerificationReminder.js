import React from 'react';
import Icon from './Icon/Icon';
import classes from './VerificationReminder.module.scss';

const verificationReminder = () => (
  <div
    className={classes.VerificationReminder}
    data-testid="verificationReminder"
  >
    <Icon />
    <p>
      Please verify your email address. You should have received an email from
      us already!
    </p>
  </div>
);

export default verificationReminder;
