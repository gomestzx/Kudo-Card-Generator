import React from 'react';
import Image from 'next/image';

const Icon: { [key: string]: JSX.Element } = {
  'Totally awesome': <Image src='/images/1.svg' width={170} height={170} alt='icon' />,
  'Thank you': <Image src='/images/2.svg' width={170} height={170} alt='icon' />,
  'Very happy': <Image src='/images/3.svg' width={170} height={170} alt='icon' />,
  'Well done': <Image src='/images/4.svg' width={170} height={170} alt='icon' />,
  'Great job': <Image src='/images/5.svg' width={170} height={170} alt='icon' />,
  'Congratulations': <Image src='/images/6.svg' width={170} height={170} alt='icon' />,
};

export default Icon;
