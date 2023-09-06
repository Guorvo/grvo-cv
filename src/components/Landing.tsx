import React from 'react'
import Header from './Header'
import Index from './Index'


function Landing() {
  return (

    <div id='landing' className="flex flex-col align- bg-wall min-h-screen">
      <Header />
      <div className='
        flex
        flex-col
        grow
        justify-center
        items-center
      '>
        <p className='text-7xl md:text-9xl text-primary font-bold'>Guorvo</p>
        <p className='text-md md:text-xl italic text-words'>(Lucas Martin Cuchero)</p>
        <p className='text-xl md:text-3xl text-words font-bold'>Web Developer</p>
        <Index />
      </div>
    </div>
  )
}

export default Landing