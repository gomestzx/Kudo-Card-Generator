import React from 'react';

interface IRadioInput {
  value: string;
  onChange(e: any): void;
  defaultChecked?: boolean;
}

const RadioInput = (props: IRadioInput) => {
  return (
    <div className='radioButton text-white flex justify-center items-center m-0 py-2'>
      <input
        type='radio'
        className='mr-2 cursor-pointe'
        value={props.value}
        name="radioInput"
        id={props.value}
        onChange={props.onChange}
        defaultChecked={props.defaultChecked ? true : false}
      />
      <label className='w-32 cursor-pointer' htmlFor={props.value}>{props.value}</label>
    </div>
  );
};

export default RadioInput;
