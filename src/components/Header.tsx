import React from 'react'

function Header() {
  return (
    <div className='bg-black w-full text-white'>
      <ul className='flex gap-2 p-2 justify-center md:justify-end md:pr-4'>
        <li className='hover:bg-neutral-700 p-2 rounded-sm'><a href="#">About Me</a></li>
        <li className='hover:bg-neutral-700 p-2 rounded-sm'><a href="#">Projects</a></li>
        <li className='hover:bg-neutral-700 p-2 rounded-sm'><a href="#">Technologies</a></li>
        <li className='hover:bg-neutral-700 p-2 rounded-sm'><a href="#">Contact</a></li>
      </ul>
    </div>
  )
}

export default Header