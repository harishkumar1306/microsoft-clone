import React from 'react';
import Image from '../images/game_pass_539.png';

const GamePass = () => {
  return (
    <section className='hero gamepass-hero md:mx-20'>
      <div>
        <img className='hero-img' src={Image} alt='Xbox gamepass' />
      </div>
      <div className='overlay bg-gray-800 text-white px-10 py-20 text-center inline-block sm:bg-transparent sm:text-left'>
        <h2 className='font-semibold text-xl mb-2'>Xbox Game Pass ultimate</h2>
        <p className='mb-4 text'>
          Get your first 3 months of Xbox game pass ultimate membership fppr $1.
          New Subscribers only!{' '}
        </p>
        <button className='mr-4 bg-white text-black py-2 px-5 hover:underline hover:bg-opacity-70'>
          Join Now
        </button>
        <button>Compare all plans</button>
      </div>
    </section>
  );
};

export default GamePass;
