'use client';
import useControls from '@/app/hooks/useControls';
import api from '@/app/services/api';
import React, { useState } from 'react';
import Button from '../Button';
import ColorInput from '../ColorInput';
import RadioInput from '../RadioInput';
import styles from './styles.module.scss';
import Modal from 'react-modal';
import ModalContent from '../ModalContent';

const Controls = () => {
  const { setTitle, setColor, link, shortUrl, setShortUrl, loading, setLoading } =
    useControls();
  const [modalIsOpen, setIsOpen] = useState<boolean>(true);

  const short = async () => {
    setLoading(true);
    try {
      const response = await api.post('/shorten', {
        long_url: `https://kudo-card-generator.vercel.app${link}`,
      });
      console.log(response.data);
      setShortUrl(response.data.link);
      setLoading(false);
      setIsOpen(true);
    } catch (err) {
      alert(err);
    }
  };

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '30px',
      backgroundColor: '#181818',
      borderRadius: '8px',
      border: '0px',
    },
  };

  return (
    <div>
      <div className={styles.controls}>
        <h1>Set the title</h1>
        <div className={styles.inputs}>
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
            value='Very happy'
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.inputs}>
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
        <div className={styles.inputs}>
          <ColorInput
            value='5047eb'
            onChange={(e) => setColor(e.target.value)}
            defaultChecked
          />
          <ColorInput
            value='EB455F'
            onChange={(e) => setColor(e.target.value)}
          />
          <ColorInput
            value='00ADB5'
            onChange={(e) => setColor(e.target.value)}
          />
          <ColorInput
            value='FF6E31'
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
      </div>
      <Button
        value='Create Kudo'
        onClick={() => {
          setLoading(true);
          short();
        }}
        loading={loading}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
        overlayClassName={styles.overlayModal}
      >
        <ModalContent link={shortUrl} closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default Controls;
