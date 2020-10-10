import React from 'react';
import FormTab from './FormTab/FormTab';
import classes from './FormTabs.module.scss';

const formTabs = (props) => (
  <ol className={classes.FormTabs}>
    <FormTab isActive={props.currentTab === 'user'}>User</FormTab>
    <FormTab middle isActive={props.currentTab === 'privacy'}>
      Privacy
    </FormTab>
    <FormTab isActive={props.currentTab === 'verification'}>Done</FormTab>
  </ol>
);

export default formTabs;
