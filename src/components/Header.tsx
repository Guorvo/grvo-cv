import React from 'react'

import { AiFillLinkedin, AiFillGithub, AiFillFile } from 'react-icons/ai'

function Header() {
  return (
    <div className='flex gap-4 p-4 justify-end items-center w-full'>
      <a 
        className='hover:text-cyan-100 transition duration-300 hover:bg-black p-2 rounded-lg' 
        target='_blank' href="https://github.com/Guorvo"><AiFillGithub size={35}/></a>
      <a 
        className='hover:text-cyan-100 transition duration-300 hover:bg-black p-2 rounded-lg' 
        target='_blank' href="https://www.linkedin.com/in/guorvo/"><AiFillLinkedin size={35}/></a>
      <a 
        className='hover:text-cyan-100 transition duration-300 hover:bg-black p-2 rounded-lg' 
        target='_blank' href="https://github.com/Guorvo"><AiFillFile size={35}/></a>
    </div>
  )
}

export default Header