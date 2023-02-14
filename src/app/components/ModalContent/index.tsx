import React from 'react';
import CopyButton from '../CopyButton';
import styles from './styles.module.scss';

interface IModalContent {
  closeModal(e: any): void;
  link: string | undefined;
}

const ModalContent = (props: IModalContent) => {
  return (
    <>
      <div className={styles.header}>
        <span onClick={props.closeModal}>X</span>
      </div>
      <div className={styles.body}>
        <div className={styles.link}>
          {props.link}
        </div>
        <CopyButton textToCopy={props.link ? props.link : ''} />
      </div>
      <div className={styles.footer}>kudocardgenerator.com</div>
    </>
  );
};

export default ModalContent;
