import React from 'react';
import useControls from '@/app/hooks/useControls';
import Icon from '../Icon'; // 
import styles from './styles.module.scss';

interface IPreview {
  title?: string | null;
  color?: string | null;
  text?: any;
}

const Preview = (props: IPreview) => {
  const { title, color, setText } = useControls();

  return (
    <div className='flex gap-0 justify-center items-center flex-col'>
      <div
        className='w-96 p-4 rounded-se-lg rounded-ss-lg'
        style={{ backgroundColor: `#${props.color ? props.color : color}` }}
      >
        <h1 className='text-center font-semibold text-4xl text-white'>{props.title ? props.title : title}</h1>
      </div>
      <div className=' bg-white rounded-es-lg rounded-ee-lg'>
        <div className='flex items-end'>
          <textarea
            spellCheck='false'
            name=''
            id=''
            className={`${styles.textarea} h-72 w-64 p-2 border-0 text-20 outline-none resize-none font-dekko text-black font-light`}
            placeholder='Type here...'
            value={props.text}
            readOnly={props.text}
            onChange={(e) => setText(e.target.value)}
          />
          {Icon[props.title ? props.title : title]}
        </div>
        <p className='text-center'>kudocardgenerator.com</p>
      </div>
    </div>
  );
};

export default Preview;
