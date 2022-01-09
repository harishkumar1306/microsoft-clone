import React from 'react';
import HolidayImg from '../images/this_holiday_539.png';

const DisplayContent3 = () => {
  return (
    <section className='hero this-holiday md:mx-20'>
      <div>
        <img className='hero-img' src={HolidayImg} alt='Holiday Pass' />
      </div>
      <div className='overlay bg-gray-800 text-white px-10 py-20 text-center inline-block sm:bg-transparent sm:text-left'>
        <h2 className='font-semibold text-xl mb-2'>
          This holiday, find your joy!
        </h2>
        <p className='mb-2 text'>
          Follow a story of Rufus, whose dream take him into Microsoft worlds
          like Minecraft, Teams and Halo!{' '}
        </p>
        <button className='mr-4 bg-white text-black py-2 px-5 hover:underline hover:bg-opacity-70'>
          Watch Now
        </button>
      </div>
    </section>
  );
};

export default DisplayContent3;
