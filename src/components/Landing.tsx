import React from 'react'
import Header from './Header'
import Index from './Index'


function Landing() {
  return (

    <div id='landing' className="flex flex-col align- bg-cyan-100 min-h-screen">
      <Header />
      <div className='
        flex
        flex-col
        grow
        justify-center
        items-center
        
      '>
        <p className='text-9xl font-bold'>Guorvo</p>
        <p className='text-xl italic text-neutral-600'>(Lucas Martin Cuchero)</p>
        <p className='text-3xl font-semibold'>Web Developer</p>
        <Index />
      </div>
    </div>
  )
}

export default Landing