import React from 'react';

import styles from './Input.css'

const input = (props) => {
  let inputElement = null;

  switch (props.elementType) {
    case ('input'):
      inputElement = <input 
        className={styles.InputElement} 
        {...props.elementConfig} 
        value={props.vaue} />;
      break;
    case ('textarea'):
      inputElement = <textarea 
        className={styles.InputElement} 
        {...props.elementConfig} 
        value={props.vaue} />;
      break;
    case ('select'):
      inputElement = (
        <select 
          className={styles.InputElement} 
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
        className={styles.InputElement} 
        {...props.elementConfig} 
        value={props.vaue} />;
  }
  
  return (
    <div className={styles.Input}>
      <label className={styles.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;