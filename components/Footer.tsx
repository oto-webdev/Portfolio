import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1200px] mx-auto py-4 sm:flex sm:items-center sm:justify-between flex-col px-2'>
      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-8'>
        <div className='flex flex-col sm:flex-row items-center gap-6 sm:gap-8 sm:order-2 w-full sm:w-auto'>
          <a target='_blank' href="https://github.com/oto-webdev">
            <FaGithub size={36} />
          </a>
          <a target='_blank' href="https://www.linkedin.com/in/otar-ramishvili-a773a3334">
            <FaLinkedin size={36} />
          </a>
        </div>

        <p className='text-center sm:text-left sm:order-1 w-full sm:w-auto'>&copy; 2025. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer;
