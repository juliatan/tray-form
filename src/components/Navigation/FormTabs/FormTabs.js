import React from 'react';
import FormTab from './FormTab/FormTab';
import classes from './FormTabs.module.scss';

const formTabs = () => (
  <ol className={classes.FormTabs}>
    <FormTab>User</FormTab>
    <FormTab middle>Privacy</FormTab>
    <FormTab>Done</FormTab>
  </ol>
);

export default formTabs;
