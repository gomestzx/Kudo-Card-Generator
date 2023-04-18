import React, { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import PropTypes from 'prop-types';
import Preview from '../components/Preview';

const Card = () => {
  const searchParams = useSearchParams();
  const color = useMemo(() => searchParams.get('color'), [searchParams]);
  const title = useMemo(() => searchParams.get('title'), [searchParams]);
  const text = useMemo(() => searchParams.get('text'), [searchParams]);

  return (
    <div className='app'>
      <Preview text={text} color={color} title={title} />
    </div>
  );
};

Card.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string
};

export default Card;
