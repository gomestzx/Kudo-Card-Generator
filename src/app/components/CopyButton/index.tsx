import React, { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ICopyButton {
  textToCopy: string;
}

library.add(faCopy, faCheck);

const CopyButton = (props: ICopyButton) => {
  const [text, setText] = useState<string>('COPY');
  const [copied, setCopied] = useState<boolean>(false);
  const Copy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  return (
    <>
      <CopyToClipboard text={props.textToCopy}>
        <button onClick={() => Copy()} className=' p-3  bg-blue-700 rounded-se-lg rounded-ee-lg cursor-pointer'>
          {copied ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faCopy} />}
        </button>
      </CopyToClipboard>
    </>
  );
};

export default CopyButton;