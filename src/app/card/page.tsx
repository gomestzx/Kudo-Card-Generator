'use client';

import Preview from '../components/Preview';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

export default function Card() {
  const searchParams = useSearchParams();
  const color = useMemo(() => searchParams.get('color'), [searchParams]);
  const title = useMemo(() => searchParams.get('title'), [searchParams]);
  const text = useMemo(() => searchParams.get('text'), [searchParams]);

  return (
    <div className='app w-full h-screen flex justify-center items-center'>
      <Preview text={text} color={color} title={title} />
    </div>
  );
}
