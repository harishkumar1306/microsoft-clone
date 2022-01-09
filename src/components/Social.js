import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Social = () => {
  return (
    <div className='flex items-center px-8 py-5 md:mx-20'>
      <div>
        <h2 className='mr-5'>Follow Microsoft</h2>
      </div>
      <div className='flex'>
        <FaFacebook className='mr-2 text-blue-900 text-2xl' />
        <FaTwitter className='mr-2 text-blue-700 text-2xl' />
        <FaLinkedin className='mr-2 text-blue-900 text-2xl' />
      </div>
    </div>
  );
};

export default Social;
