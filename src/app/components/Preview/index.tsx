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
    <div className={styles.preview}>
      <div
        className={styles.head}
        style={{ backgroundColor: `#${props.color ? props.color : color}` }}
      >
        <h1>{props.title ? props.title : title}</h1>
      </div>
      <div className={styles.body}>
        <textarea
          spellCheck='false'
          name=''
          id=''
          className={styles.textarea}
          placeholder='Type here...'
          value={props.text}
          readOnly={props.text}
          onChange={(e) => setText(e.target.value)}
        />
        {Icon[props.title ? props.title : title]}
        <p>kudocardgenerator.com</p>
      </div>
    </div>
  );
};

export default Preview;
