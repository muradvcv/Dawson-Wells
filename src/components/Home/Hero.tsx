import React from 'react';
import Banner from '@/app/assets/hero-section-image.png';
import Image from 'next/image';
const Hero = () => {
  return (
    <div className=''>
      <Image src={Banner} alt="Hero"/>
    </div>
  );
};

export default Hero;