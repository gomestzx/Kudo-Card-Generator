'use client';
import Button from './components/Button';
import Controls from './components/Controls';
import Navbar from './components/Navbar';
import Preview from './components/Preview';
import useControls from './hooks/useControls';
import api from './services/api';

export default function Home() {
  const { link, setShortUrl, shortUrl } = useControls();

  const short = async () => {
    try {
      const response = await api.post('/shorten', {
        long_url: `https://kudo-card-generator.vercel.app${link}`,
      });
      console.log(response.data);
      setShortUrl(response.data.link);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      <Navbar />
      <div className='flex'>
        <Controls />
        <Preview />
      </div>
    </div>
  );
}
