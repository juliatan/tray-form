/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import classes from './FormTab.module.scss';

const formTab = (props) => {
  const isMiddleTab = props.middle ? classes.middle : '';
  const isActiveTab = props.isActive ? classes.active : '';

  return (
    <li className={[classes.FormTab, isMiddleTab, isActiveTab].join(' ')}>
      {/* should change to NavLink in the future */}
      <a href="#" className={classes.Link}>
        {props.children}
      </a>
    </li>
  );
};

export default formTab;
