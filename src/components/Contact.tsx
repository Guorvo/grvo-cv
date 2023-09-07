import React from 'react'
import {BiUpArrowAlt} from 'react-icons/bi'
import { scrollSmoothTo } from '../../hooks/helpers'

function Contact() {
  return (
    <div id='contact' className='bg-secondary flex items-center justify-center flex-col text-words min-h-screen p-6'>
      <div className='grow'>

      </div>
      <button 
        onClick={() => scrollSmoothTo('landing')}
        className='hover:bg-primary rounded-full p-3 hover:text-secondary transition'
      >
        <BiUpArrowAlt size={30} />
      </button>
    </div>
  )
}

export default Contact