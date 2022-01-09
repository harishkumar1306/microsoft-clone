import React, { useState } from 'react';
import { FaGlobe } from 'react-icons/fa';
import data from '../data/footer.js';

const Footer = () => {
  const [links] = useState(data);
  return (
    <>
      <footer className='bg-gray-200 py-4 px-8 md:grid md:grid-cols-2 xl:grid-cols-6 md:mx-20'>
        {links.map((link) => {
          const { id, title, hrefs } = link;
          return (
            <div key={id}>
              <div className='mb-10'>
                <h4 className='font-semibold'>{title}</h4>
                {hrefs.map((href) => {
                  return (
                    <li key={hrefs} className='text-sm my-2 text-gray-600'>
                      {href}
                    </li>
                  );
                })}
              </div>
            </div>
          );
        })}
      </footer>
      <div className='bg-gray-200 md:flex items-center justify-between mb-4 px-8 md:mx-20'>
        <div className='flex items-center text-gray-600'>
          <FaGlobe className='mr-3' />
          <p className='hover:underline text-sm'>English(United States)</p>
        </div>

        <div>
          <ul className='flex flex-wrap text-sm mt-4 text-gray-600'>
            <li className='mr-4'>Sitemap</li>
            <li className='mr-4'>Contact Microsoft</li>
            <li className='mr-4'>Privary</li>
            <li className='mr-4'>Terms of use</li>
            <li className='mr-4'>Trademarks</li>
            <li className='mr-4'>Safety &amp; Eco</li>
            <li className='mr-4'>About our ads</li>
            <li className='mr-4'>&copy; Microsoft 2022</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
