import React from 'react'
import Card from './Card'

function About() {
  return (
    <>
      <div id='about' className='
        flex 
        justify-center 
        items-center 
        bg-neutral-800 
        min-h-screen
      '>
        <div className='
          bg-neutral-100 
          p-5 w-full md:w-3/4 
          md:rounded-xl 
          shadow-lg 
          shadow-black
        '>
          <Card />
        </div>
      </div>
    </>
  )
}

export default About