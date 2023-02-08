'use client';
import useControls from '@/app/hooks/useControls';
import React from 'react';
import ColorInput from '../ColorInput';
import RadioInput from '../RadioInput';
import styles from './styles.module.scss';

const Controls = () => {
  const { setTitle, title, setColor, color } = useControls();
  return (
    <div className={styles.controls}>
      <h1>Set the title</h1>
      <div className='flex'>
        <RadioInput
          value='Totally awesome'
          onChange={(e) => setTitle(e.target.value)}
          defaultChecked
        />
        <RadioInput
          value='Thank you'
          onChange={(e) => setTitle(e.target.value)}
        />
        <RadioInput
          value='Very Happy'
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className='flex'>
        <RadioInput
          value='Well done'
          onChange={(e) => setTitle(e.target.value)}
        />
        <RadioInput
          value='Great job'
          onChange={(e) => setTitle(e.target.value)}
        />
        <RadioInput
          value='Congratulations'
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <h1>Set the color</h1>
      <div className='flex'>
        <ColorInput
          value='5047eb'
          onChange={(e) => setColor(e.target.value)}
          defaultChecked
        />
        <ColorInput value='EB455F' onChange={(e) => setColor(e.target.value)} />
        <ColorInput value='00ADB5' onChange={(e) => setColor(e.target.value)} />
        <ColorInput value='FF6E31' onChange={(e) => setColor(e.target.value)} />
      </div>
    </div>
  );
};

export default Controls;
