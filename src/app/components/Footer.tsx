import React from 'react';
import Inspiration from '../resource/image/inspiration.svg';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-100 p-4 w-72 h-20 flex pb-10 pt-1">
      <Image className='ml-4 mr-10' src={Inspiration} alt=''/>
      <Image className='mr-10' src={Inspiration} alt=''/>
      <Image className='mr-10' src={Inspiration} alt=''/>
      <Image className='mr-10' src={Inspiration} alt=''/>
    </footer>
  );
};

export default Footer;


