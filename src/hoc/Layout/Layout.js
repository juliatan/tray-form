import React from 'react';
import FormTabs from '../../components/Navigation/FormTabs/FormTabs';
import classes from './Layout.module.scss';

const layout = (props) => (
  <div className={classes.Layout}>
    {props.children}
    <nav>
      <FormTabs />
    </nav>
  </div>
);

export default layout;
