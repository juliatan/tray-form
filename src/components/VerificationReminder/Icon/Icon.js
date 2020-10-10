import React from 'react';
import { ReactComponent as EnvelopeIcon } from '../../../assets/images/envelope.svg';
import classes from './Icon.module.scss';

const icon = () => (
  <div className={classes.Icon}>
    <EnvelopeIcon />
  </div>
);

export default icon;
