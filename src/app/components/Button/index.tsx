'use client';
import React from 'react';
import styles from './styles.module.scss';
import ReactLoading from 'react-loading';

interface IButton {
  value: string;
  onClick?(e: any): void;
  loading?: boolean
}

const Button = (props: IButton) => {
  return (
    <>
      <button className={styles.button} onClick={props.onClick}>
        {props.value}
        {props.loading && (
          <ReactLoading
            type={'spin'}
            color={'#fff'}
            height={'20px'}
            width={'20px'}
            className={styles.spin}
          />
        )}
      </button>
    </>
  );
};

export default Button;
