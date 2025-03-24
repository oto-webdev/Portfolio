import Hero from '@/components/Hero';
import KeyMetrics from '@/components/KeyMetrics';
import Portfolio from '@/components/Portfolio';
import Stack from '@/components/Stack';
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero />   
      <Stack />
      <Portfolio />
      <KeyMetrics />
    </div>
  )
}

export default page;