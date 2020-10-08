import React from 'react';
import classes from './FormTab.module.scss';

const formTab = (props) => (
  <li
    className={[classes.FormTab, props.middle ? classes.middle : ''].join(' ')}
  >
    {props.children}
  </li>
);

export default formTab;
