'use client';

import Preview from '../components/Preview';
import { useSearchParams } from 'next/navigation';

export default function Card() {
  const searchParams = useSearchParams();
  const color = searchParams.get('color');
  const title = searchParams.get('title');
  const text = searchParams.get('text');

  return (
    <div className='app'>
      <Preview text={text} color={color} title={title} />
    </div>
  );
}
