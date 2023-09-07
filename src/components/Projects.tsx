import React from 'react'

function Projects() {
  return (
    <div id='projects' className='bg-wall min-h-screen flex justify-center'>
      <div className='flex flex-col md:my-8 w-full md:w-4/5 bg-secondary md:rounded-xl shadow-inner'>
        <div className='w-4/5 grow m-6 bg-primary md:rounded-xl text-secondary'>

        </div>
        <div className='w-4/5 grow m-6 bg-primary md:rounded-xl text-secondary self-end'>

        </div>
        <div className='flex flex-col md:flex-row md:w-4/5 justify-center items-center grow md:m-6 bg-words md:rounded-xl text-secondary'>
          <div className='pb-[56.25%] w-1/2'>
            <iframe
              className='p-6'
              width="100%"
              height="100%"
              src="https://www.youtube-nocookie.com/embed/jGGmt1unIHY?si=WZljaEpPMpHTSZeL"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen>
            </iframe>
          </div>
          <div className='flex flex-col md:py-12 h-full text-xl font-mono text-center md:text-left pb-6 pr-6'>
            <p className='bg-accent text-secondary self-center md:self-start rounded-lg text-2xl w-fit py-2 px-4 mb-4'>PokéAPI</p>
            <p className='bg-secondary text-words rounded-lg text-justify w-fit p-6'>A database of pokemon with CRUD for custom pokémons, filters and with calls from a database connected with the PokéAPI API, made with React-Redux and Node-Express</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects