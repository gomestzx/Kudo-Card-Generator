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
      <button className=' bg-blue-600 rounded-8 text-white p-3 mt-1 text-16 flex justify-center cursor-pointer w-full rounded-md' onClick={props.onClick}>
        {props.value}
        {props.loading && (
          <ReactLoading
            type={'spin'}
            color={'#fff'}
            height={'20px'}
            width={'20px'}
            className='py-[2px] ml-2'
          />
        )}
      </button>
    </>
  );
};

export default Button;
