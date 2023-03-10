import React, { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import styles from './styles.module.scss';

interface ICopyButton {
  textToCopy: string;
}

const CopyButton = (props: ICopyButton) => {
  const [text, setText] = useState<string>('COPY');
  const Copy = () => {
    setText('Copied 🎉');
    setTimeout(() => {
      setText('COPY');
    }, 1000);
  };
  return (
    <>
      <CopyToClipboard text={props.textToCopy}>
        <button onClick={() => Copy()} className={styles.copyButton}>
          {text}
        </button>
      </CopyToClipboard>
    </>
  );
};

export default CopyButton;