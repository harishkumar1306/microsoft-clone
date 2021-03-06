import React, { useState } from 'react';
import data from '../data/section1';

const DisplayContent = () => {
  const [cards] = useState(data);
  return (
    <section className='md:grid md:grid-cols-2 xl:grid-cols-6 my-8 md:mx-14'>
      {cards.map((card) => {
        const { id, image, text } = card;
        return (
          <article key={id} className='flex items-center px-6 py-2'>
            <img src={image} alt='card' />
            <p className='mx-3 font-semibold cursor-pointer hover:underline'>
              {text}
            </p>
          </article>
        );
      })}
    </section>
  );
};

export default DisplayContent;
