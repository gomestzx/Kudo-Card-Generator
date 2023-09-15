import React from 'react';

interface IRadioInput {
  value: string;
  onChange(e: any): void;
  defaultChecked?: boolean;
}

const ColorInput = (props: IRadioInput) => {
  return (
    <div>
      <input
        type='radio'
        className='w-15 h-15 rounded-15 relative bg-white inline-block visible cursor-pointer mr-4'
        value={props.value}
        name='colorInput'
        onChange={props.onChange}
        id={props.value}
        defaultChecked={props.defaultChecked ? true : false}
      />
      <label htmlFor={props.value} className='px-8 w-20 h-5 rounded-4 mr-4 rounded-md cursor-pointer' style={{ backgroundColor: `#${props.value}` }}></label>
    </div>
  );
};

export default ColorInput;
