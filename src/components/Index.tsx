import React from 'react'

import { scrollSmoothTo } from '../../hooks/helpers'

function Index() {

  return (
    <div className='mt-4'>
      <ul className='flex p-2 justify-center md:pr-4'>
        <li 
          onClick={() => scrollSmoothTo('projects')} 
          className='cursor-pointer bg-black text-white hover:scale-110 p-2 pl-4 w-32 text-center font-semibold rounded-l-xl transition'
        >
          Projects
        </li>
        <li 
          onClick={() => scrollSmoothTo('stack')}
          className='bg-black text-white hover:scale-110 p-2 w-20 text-center font-semibold transition'>
          Stack
        </li>
        <li 
          onClick={() => scrollSmoothTo('about')}
          className='bg-black text-white hover:scale-110 p-2 w-20 text-center font-semibold transition'>
          About
        </li>
        <li 
          onClick={() => scrollSmoothTo('contact')}
          className='bg-black text-white hover:scale-110 p-2 pr-4 w-32 text-center font-semibold rounded-r-xl transition'>
          Contact
        </li>
      </ul>
    </div>
  )
}

export default Index;