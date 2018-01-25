import React from 'react';

import styles from './Input.css'

const input = (props) => {
  let inputElement = null;
  let validationErrorMessage = null;
  const inputClasses = [styles.InputElement]

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(styles.Invalid);
    validationErrorMessage = <p className={styles.ValidationErrorMessage}>{props.errorMessage}</p>
  }

  switch (props.elementType) {
    case ('input'):
      inputElement = <input 
        className={inputClasses.join(' ')} 
        onChange={props.changed}
        {...props.elementConfig} 
        value={props.vaue} />;
      break;
    case ('textarea'):
      inputElement = <textarea 
        className={inputClasses.join(' ')} 
        onChange={props.changed}
        {...props.elementConfig} 
        value={props.vaue} />;
      break;
    case ('select'):
      inputElement = (
        <select 
          className={inputClasses.join(' ')} 
          onChange={props.changed}
          value={props.value}>
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
        );
        break;
    default:
      inputElement = <input 
        className={inputClasses.join(' ')} 
        {...props.elementConfig} 
        value={props.vaue} />;
  }
  
  return (
    <div className={styles.Input}>
      <label className={styles.Label}>{props.label}</label>
      {inputElement}
      {validationErrorMessage}
    </div>
  );
};

export default input;