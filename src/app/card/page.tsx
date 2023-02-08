'use client';

import Preview from '../components/Preview';

export default function Card() {
  const queryString = location.search;
  const urlParams = new URLSearchParams(queryString);
  const color = urlParams.get('color');
  const title = urlParams.get('title');
  const text = urlParams.get('text');
  return (
    <div>
      <Preview text={text} color={color} title={title} />
    </div>
  );
}
