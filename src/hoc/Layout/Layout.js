import React, { Component } from 'react';
import FormTabs from '../../components/Navigation/FormTabs/FormTabs';
import UserDetails from '../../components/UserDetails/UserDetails';
import PrivacyDetails from '../../components/PrivacyDetails/PrivacyDetails';
import VerificationReminder from '../../components/VerificationReminder/VerificationReminder';
import classes from './Layout.module.scss';

class Layout extends Component {
  state = {
    tab: 'user',
    userDetails: null,
    privacyDetails: null,
  };

  submitUserDetailsHandler = (userDetails) => {
    this.setState({ tab: 'privacy', userDetails });
  };

  submitPrivacyDetailsHandler = (privacyDetails) => {
    const result = { ...this.state.userDetails, ...privacyDetails };
    this.setState({ tab: 'verification', privacyDetails });
    console.log(result);
  };

  render() {
    return (
      <div className={classes.Layout}>
        {this.props.children}
        <nav>
          <FormTabs currentTab={this.state.tab} />
        </nav>
        <div className={classes.Page}>
          {this.state.tab === 'user' && (
            <UserDetails saveDetails={this.submitUserDetailsHandler} />
          )}
          {this.state.tab === 'privacy' && (
            <PrivacyDetails saveDetails={this.submitPrivacyDetailsHandler} />
          )}
          {this.state.tab === 'verification' && <VerificationReminder />}
        </div>
      </div>
    );
  }
}

export default Layout;
