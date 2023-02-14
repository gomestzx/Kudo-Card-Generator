import React from 'react';
import Image from 'next/image';

export function Icon(param: string) {
  switch (param) {
    case 'Totally awesome':
      return <Image src='/images/1.png' width={200} height={200} alt='icon' />;
    case 'Thank you':
      return <Image src='/images/2.png' width={200} height={200} alt='icon' />;
    case 'Very happy':
      return <Image src='/images/3.png' width={200} height={200} alt='icon' />;
    case 'Well done':
      return <Image src='/images/4.png' width={200} height={200} alt='icon' />;
    case 'Great job':
      return <Image src='/images/5.png' width={200} height={200} alt='icon' />;
    case 'Congratulations':
      return <Image src='/images/6.png' width={200} height={200} alt='icon' />;
  }
}

export default Icon;
