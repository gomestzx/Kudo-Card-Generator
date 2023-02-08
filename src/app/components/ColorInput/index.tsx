import React from 'react';
import styles from './styles.module.scss';

interface IRadioInput {
  value: string;
  onChange(e: any): void;
  defaultChecked?: boolean;
}

const ColorInput = (props: IRadioInput) => {
  return (
    <div className={styles.colorInput}>
      <input
        type='radio'
        value={props.value}
        name='colorInput'
        onChange={props.onChange}
        defaultChecked={props.defaultChecked ? true : false}
      />
      <span style={{ backgroundColor: `#${props.value}` }}></span>
    </div>
  );
};

export default ColorInput;
