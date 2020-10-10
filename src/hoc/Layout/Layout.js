import React, { Component } from 'react';
import FormTabs from '../../components/Navigation/FormTabs/FormTabs';
import UserDetails from '../../components/UserDetails/UserDetails';
import PrivacyDetails from '../../components/PrivacyDetails/PrivacyDetails';
import VerificationReminder from '../../components/VerificationReminder/VerificationReminder';
import classes from './Layout.module.scss';

class Layout extends Component {
  submitUserDetailsHandler = (data) => {
    console.log(data);
  };

  submitPrivacyDetailsHandler = (data) => {
    console.log(data);
  };

  render() {
    return (
      <div className={classes.Layout}>
        {this.props.children}
        <nav>
          <FormTabs />
        </nav>
        <div className={classes.Page}>
          <UserDetails saveDetails={this.submitUserDetailsHandler} />
          <PrivacyDetails saveDetails={this.submitPrivacyDetailsHandler} />
          <VerificationReminder />
        </div>
      </div>
    );
  }
}

export default Layout;
