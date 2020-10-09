import React from 'react';
import FormTabs from '../../components/Navigation/FormTabs/FormTabs';
import UserDetails from '../../components/UserDetails/UserDetails';
import classes from './Layout.module.scss';

const layout = (props) => (
  <div className={classes.Layout}>
    {props.children}
    <nav>
      <FormTabs />
    </nav>
    <div className={classes.Page}>
      <UserDetails />
    </div>
  </div>
);

export default layout;
