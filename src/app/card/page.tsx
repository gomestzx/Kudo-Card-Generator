'use client'

import Preview from '../components/Preview';
import { useSearchParams } from 'next/navigation';

interface CardProps {
  color?: string;
  title?: string;
  text?: string;
}

export default function Card({ color = 'Default Color', title = 'Default Title', text = 'Texto não foi preenchido!' }: CardProps) {
  const searchParams = useSearchParams();
  const colorQueryParam = searchParams.get('color');
  const titleQueryParam = searchParams.get('title');
  const textQueryParam = searchParams.get('text');

  if (colorQueryParam) {
    color = colorQueryParam;
  }

  if (titleQueryParam) {
    title = titleQueryParam;
  }

  if (textQueryParam) {
    text = textQueryParam;
  }

  return (
    <div className='app'>
      <Preview text={text} color={color} title={title} />
    </div>
  );
}