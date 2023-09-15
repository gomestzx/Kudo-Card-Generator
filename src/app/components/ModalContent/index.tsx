import React from 'react';
import CopyButton from '../CopyButton';

interface IModalContent {
  closeModal(e: any): void;
  link: string | undefined;
}

const ModalContent = (props: IModalContent) => {
  return (
    <>
      <div className=' mb-4 flex justify-end'>
        <span className=' text-white font-bold cursor-pointer' onClick={props.closeModal}>X</span>
      </div>
      <div className='flex justify-center items-center bg-slate-800 text-white rounded-md'>
        <div className='p-2'>
          {props.link}
        </div>
        <CopyButton textToCopy={props.link ? props.link : ''} />
      </div>
      <div className='p-4 text-neutral-500 text-center'>kudocardgenerator</div>
    </>
  );
};

export default ModalContent;
