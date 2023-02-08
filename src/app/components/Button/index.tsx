'use client';
import React from 'react';
import styles from './styles.module.scss';

interface IButton {
  value: string;
  onClick?(e: any): void;
}

const Button = (props: IButton) => {
  return (
    <>
      <button className={styles.button} onClick={props.onClick}>
        {props.value}
      </button>
    </>
  );
};

export default Button;
