'use client';
import Button from './components/Button';
import Controls from './components/Controls';
import Navbar from './components/Navbar';
import Preview from './components/Preview';
import useControls from './hooks/useControls';
import api from './services/api';
import short from './services/shorten';

export default function Home() {
  const { link } = useControls();
  const hostname = location.hostname;
  const port = location.port;

  const short = async () => {
    try {
      const response = await api.post('/shorten', {
        long_url: 'https://google.com',
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
      {`https://${
        hostname == 'localhost' ? hostname + ':' + port : hostname
      }${link}`}
    </>
  );
}
