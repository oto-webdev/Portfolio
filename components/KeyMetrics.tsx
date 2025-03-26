"use client";

import React from 'react'
import { motion, useInView } from 'framer-motion';

const metrics = [
  {
    id: 1,
    value: "2+",
    label: "Learning Programming",
    description: "Dedicated to learning and mastering a wide range of programming languages, including JavaScript, Python and TypeScript"
  },
  {
    id: 2,
    value: "1+",
    label: "Projects Completed",
    description: "Completed a website for a small business for IT services"
  },
  {
    id: 3,
    value: "150+",
    label: "Commits on GitHub",
    description: "Actively involved in contributing to open-source projects on GitHub"
  },
]

const KeyMetrics = () => {
  const ref = React.useRef<HTMLElement>(null);

  const isInView = useInView(ref, {
    once: false,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className='max-w-[1200px] mx-auto px-4 py-24 text-white'
    >
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className='sm:text-6xl text-5xl font-bold mb-12'
      >
        Key Metrics
      </motion.h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
            className='flex flex-col bg-gray-800 p-6 rounded-lg shadow-lg hover:translate-[-10px] duration-500 ease-in-out' 
          >
            <motion.h3 
              initial={{ scale: 0.5 }}
              animate={isInView ? { scale: 1 } : { scale: 0.5 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.4, type: "spring" }}
              className="text-5xl font-bold text-purple-300 mb-2"
            >
              {metric.value}
            </motion.h3>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
              className='text-xl font-semibold mb-2'  
            >
              {metric.label}
            </motion.p>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
              className='text-gray-400'
            >
              {metric.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default KeyMetrics;