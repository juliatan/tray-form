import React from 'react';
import classes from './Input.module.scss';

const input = (props) => {
  let inputElement;
  let validationError;

  const classesArray = [classes.InputElement];
  if (props.invalid && props.shouldValidate && props.touched) {
    classesArray.push(classes.Invalid);
    validationError = (
      <p className={classes.ValidationError}>Please enter a valid value!</p>
    );
  }

  switch (props.elementType) {
    case 'input':
      inputElement = (
        <input
          className={classesArray.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    // insert new form input elements here e.g. textarea, select etc.
    default:
      inputElement = (
        <input
          className={classesArray.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }

  return (
    <div>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
      {validationError}
    </div>
  );
};

export default input;
