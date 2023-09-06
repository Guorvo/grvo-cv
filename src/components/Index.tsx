import React from 'react'

import { scrollSmoothTo } from '../../hooks/helpers'

function Index() {

  return (
    <div className='mt-4'>
      <ul className='flex p-2 justify-center md:pr-4 hover:scale-110 transition cursor-pointer'>
        <li 
          onClick={() => scrollSmoothTo('projects')} 
          className='bg-secondary text-words hover:bg-primary hover:text-secondary p-2 pl-4 w-32 text-center font-semibold rounded-l-xl transition'
        >
          Projects
        </li>
        <li 
          onClick={() => scrollSmoothTo('stack')}
          className='bg-secondary text-words hover:bg-primary hover:text-secondary p-2 w-20 text-center font-semibold transition'>
          Stack
        </li>
        <li 
          onClick={() => scrollSmoothTo('about')}
          className='bg-secondary text-words hover:bg-primary hover:text-secondary p-2 w-20 text-center font-semibold transition'>
          About
        </li>
        <li 
          onClick={() => scrollSmoothTo('contact')}
          className='bg-secondary text-words hover:bg-primary hover:text-secondary p-2 pr-4 w-32 text-center font-semibold rounded-r-xl transition'>
          Contact
        </li>
      </ul>
    </div>
  )
}

export default Index;