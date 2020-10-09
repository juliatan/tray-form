import React, { Component } from 'react';
import Input from '../UI/Input/Input';
import classes from './UserDetails.module.scss';

class UserDetails extends Component {
  state = {
    userDetailsElements: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Full name',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      role: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Role',
        },
        value: '',
        validation: {
          required: false,
        },
        valid: true,
        touched: false,
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Email',
        },
        value: '',
        validation: {
          required: true,
          // need to insert email check
        },
        valid: false,
        touched: false,
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Password',
        },
        value: '',
        validation: {
          required: true,
          minLength: 10,
        },
        valid: false,
        touched: false,
      },
    },
  };

  inputChangedHandler = () => {
    // to write
  };

  render() {
    const inputs = Object.keys(this.state.userDetailsElements).map((key) => {
      const element = this.state.userDetailsElements[key];
      return (
        <Input
          key={key}
          elementType={element.elementType}
          elementConfig={element.elementConfig}
          value={element.value}
          changed={(event) => this.inputChangedHandler(event, key)}
          invalid={!element.valid}
          shouldValidate={element.validation}
          touched={element.touched}
        />
      );
    });

    return (
      <div className={classes.UserDetails}>
        <p>* indicates a required field</p>
        <form>{inputs}</form>
      </div>
    );
  }
}

export default UserDetails;
