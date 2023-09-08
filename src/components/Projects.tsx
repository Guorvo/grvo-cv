import React from 'react'

function Projects() {
  return (
    <div id='projects' className='bg-wall min-h-screen flex justify-center'>
      <div className='flex flex-col md:my-8 w-full md:w-4/5 bg-secondary md:rounded-xl shadow-inner'>
        <div className='w-4/5 grow m-6 bg-primary md:rounded-xl text-secondary'>

        </div>
        <div className='w-4/5 grow m-6 bg-primary md:rounded-xl text-secondary self-end'>

        </div>
        <div className='bg-words'>
          <div className=''>
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
          <div className=''>
            <p className=''>PokéAPI</p>
            <p className=''>A database of pokemon with CRUD for custom pokémons, filters and with calls from a database connected with the PokéAPI API, made with React-Redux and Node-Express</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects