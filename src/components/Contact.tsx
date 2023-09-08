import React from 'react'
import { BiUpArrowAlt } from 'react-icons/bi'
import { scrollSmoothTo } from '../../hooks/helpers'
import ContactForm from './ContactForm'

function Contact() {
  return (
    <div id='contact' className='bg-secondary flex items-center justify-evenly flex-col text-words min-h-screen gap-y-6'>
      <p className='font-semibold text-xl'>Contact Me!</p>
      <div className='w-full md:w-4/5 flex flex-col md:flex-row justify-between items-center gap-3 bg-gradient-to-l from-primary to-accent p-6 md:rounded-xl'>
        <ContactForm />
        <div className="bg-[url('/jevil-deltarune.webp')] hover:bg-[url('/jevil-deltarune.gif')] bg-contain bg-center bg-no-repeat w-48 h-48 md:w-96 md:h-96 m-3"></div>
      </div>
      <button
        onClick={() => scrollSmoothTo('landing')}
        className='hover:bg-primary rounded-full p-3 mb-6 hover:text-secondary transition'
      >
        <BiUpArrowAlt size={30}/>
      </button>
    </div>
  )
}

export default Contact