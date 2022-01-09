import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import HeroImage from '../images/hero_539.png';

const Hero = () => {
  return (
    <section className='hero md:mx-20'>
      <div>
        <img className='hero-img' src={HeroImage} alt='hero' />
      </div>
      <div className='overlay bg-gray-200 text-center p-10 sm:bg-transparent sm:text-left'>
        <p className='bg-white inline-block py-1 px-5 mb-3 text-red-700 font-bold'>
          Countdown Sale
        </p>
        <h1 className='font-bold text-2xl mb-3'>Bundle and save upto $430</h1>
        <p className='text'>
          Complete your surface pro 7 with choice of select type cover and free
          sleeve
        </p>
        <button className='bg-red-600 text-white py-2 px-4 mt-3 items-center hover:bg-red-800'>
          Shop Now
          <i className='inline-block ml-1 mt-1'>
            <FaChevronRight />
          </i>
        </button>
      </div>
    </section>
  );
};

export default Hero;
