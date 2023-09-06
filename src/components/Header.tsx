import React from 'react'

import { AiFillLinkedin, AiFillGithub, AiFillFile } from 'react-icons/ai'

function Header() {
  return (
    <div className='flex gap-4 p-4 justify-center md:justify-end items-center w-full bg-wall'>
      <a 
        className='text-words hover:text-secondary transition duration-300 hover:bg-primary p-2 rounded-lg' 
        target='_blank' href="https://github.com/Guorvo"><AiFillGithub size={35} title='Github'/></a>
      <a 
        className='text-words hover:text-secondary transition duration-300 hover:bg-primary p-2 rounded-lg' 
        target='_blank' href="https://www.linkedin.com/in/guorvo/"><AiFillLinkedin size={35} title='LinkedIn'/></a>
      <a 
        className='text-words hover:text-secondary transition duration-300 hover:bg-primary p-2 rounded-lg' 
        target='_blank' href="https://github.com/Guorvo"><AiFillFile size={35} title='Curriculum Vitae'/></a>
    </div>
  )
}

export default Header