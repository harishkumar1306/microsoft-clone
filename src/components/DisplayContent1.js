import React, { useState } from 'react';
import data from '../data/section2';

const DisplayContent1 = () => {
  const [cards] = useState(data);

  return (
    <section className='section-2 md:grid md:grid-cols-2 xl:grid-cols-4 md:mx-20'>
      {cards.map((card) => {
        const { id, title, image, desc, link } = card;
        return (
          <article key={id} className='p-8'>
            <div>
              <img src={image} alt='card' />
              <h3 className='font-semibold text-xl mt-2 mb-1'>{title}</h3>
              <p>{desc}</p>
              <button className='text-red-700 cursor-pointer font-semibold'>
                {link}
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default DisplayContent1;
