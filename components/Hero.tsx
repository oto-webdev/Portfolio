"use client";

import { motion } from 'framer-motion';
import React from 'react';

const greenColor = "#13FFAA";

const Hero = () => {
  const backgroundImage = `radial-gradient(125% 125% at 50% 0%, #000 50%, ${greenColor})`;
  const border = `1px solid ${greenColor}`;
  const section = `0px 4px 24px ${greenColor}`;

  return (
    <motion.section 
      style={{ backgroundImage }} 
      className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200"
    >
      <div className='z-10 flex flex-col items-center text-center'>

        <span className='mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm'>
          Open for work
        </span>

        <h1 className='text-white/40 sm:text-7xl text-5xl font-black'>Hi, I am</h1>
        <h1 className='max-w-3xl bg-gradient-to-br bg-clip-text from-white to-gray-400 font-black leading-tight text-transparent md:text-7xl text-3xl'>
          Oto Ramishvili
        </h1>

        <div className='flex bg-white/10 shadow-xl p-3 rounded-3xl justify-center items-center space-x-2 mb-4'>
          <p>2+ Happy clients</p>
        </div>

        <p className='my-6 max-w-xl text-balance'>Full-stack developer based in Tbilisi, Georgia.</p>

        <motion.button 
          style={{
            border,
            boxShadow: section,
          }}
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.985 }} 
          className='flex w-fit items-center gap-2 rounded-full px-4 py-2'
        >
          DOWNLOAD CV
        </motion.button>
      </div>
    </motion.section>
  );
}

export default Hero;
