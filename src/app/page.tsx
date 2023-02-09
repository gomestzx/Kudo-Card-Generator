'use client';
import Button from './components/Button';
import Controls from './components/Controls';
import Navbar from './components/Navbar';
import Preview from './components/Preview';
import useControls from './hooks/useControls';
import api from './services/api';
import { useRouter } from 'next/router';

export default function Home() {
  const { link } = useControls();

  const short = async () => {
    try {
      const response = await api.post('/shorten', {
        long_url: `https://kudo-card-generator${link}`,
      });
      console.log(response.data);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <Navbar />
      <div className='flex'>
        <Controls />
        <Preview />
      </div>
      <Button value='Create kudo' onClick={() => short()} />
      {`https://kudo-card-generator${link}`}
    </>
  );
}
