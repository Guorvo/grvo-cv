import React from 'react'

import { scrollSmoothTo } from '../../hooks/helpers'

function Index() {

  return (
    <div className='mt-4'>
      <ul className='columns-2 md:columns-4 gap-0 hover:scale-110 transition cursor-pointer'>
        <li 
          onClick={() => scrollSmoothTo('projects')} 
          className='bg-secondary text-words hover:bg-primary hover:text-secondary p-2 w-32 text-center font-semibold transition rounded-tl-md md:rounded-none'
        >
          Projects
        </li>
        <li 
          onClick={() => scrollSmoothTo('stack')}
          className='bg-secondary text-words hover:bg-primary hover:text-secondary p-2 w-32 text-center font-semibold transition rounded-bl-md md:rounded-none'>
          Stack
        </li>
        <li 
          onClick={() => scrollSmoothTo('about')}
          className='bg-secondary text-words hover:bg-primary hover:text-secondary p-2 w-32 text-center font-semibold transition rounded-tr-md md:rounded-none'>
          About
        </li>
        <li 
          onClick={() => scrollSmoothTo('contact')}
          className='bg-secondary text-words hover:bg-primary hover:text-secondary p-2 w-32 text-center font-semibold transition rounded-br-md md:rounded-none'>
          Contact
        </li>
      </ul>
    </div>
  )
}

export default Index;