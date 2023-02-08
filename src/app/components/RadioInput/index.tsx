import React from 'react';
import styles from './styles.module.scss';

interface IRadioInput {
  value: string;
  onChange(e: any): void;
  defaultChecked?: boolean;
}

const RadioInput = (props: IRadioInput) => {
  return (
    <div className={styles.radioButton}>
      <input
        type='radio'
        value={props.value}
        name='radioInput'
        onChange={props.onChange}
        defaultChecked={props.defaultChecked ? true : false}
      />
      <label>{props.value}</label>
    </div>
  );
};

export default RadioInput;
