'use client';
import Button from './components/Button';
import Controls from './components/Controls';
import Navbar from './components/Navbar';
import Preview from './components/Preview';
import useControls from './hooks/useControls';
import api from './services/api';
import 'tailwindcss/tailwind.css';

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
    <>
      <div className='flex flex-wrap justify-center'>
        <div className='w-full p-4 md:px-8 md:py-8 lg:w-4/6 rounded flex flex-wrap items-center flex-col'>
          <Navbar />
          <div className='flex flex-wrap-reverse gap-2 lg:mt-12 w-full justify-center'>
            <Controls />
            <Preview />
          </div>
        </div>
      </div>
    </>
  );
}
