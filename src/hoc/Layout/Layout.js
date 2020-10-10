import React, { Component } from 'react';
import FormTabs from '../../components/Navigation/FormTabs/FormTabs';
import UserDetails from '../../components/UserDetails/UserDetails';
import classes from './Layout.module.scss';

class Layout extends Component {
  submitHandler = (data) => {
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
          <UserDetails saveUserDetails={this.submitHandler} />
        </div>
      </div>
    );
  }
}

export default Layout;
