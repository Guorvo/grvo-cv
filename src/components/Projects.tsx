import React from 'react'
import YoutubeEmbed from './YoutubeEmbed'


function Projects() {
  return (
    <>
      <div className='p2 bg-white h-20 bg-gradient-to-b from-wall to-primary md:hidden'></div>
      <div id='projects' className='bg-wall text-words min-h-screen flex justify-center'>
        <div className='flex flex-col md:my-8 w-full md:w-4/5 bg-secondary md:rounded-xl shadow-inner'>
          <div className='md:w-4/5 grow md:m-6 p-6 bg-primary md:rounded-xl'>
            <div className='bg-secondary p-4 rounded-xl'>
              <YoutubeEmbed embedId='qUzXUUTmKYc' />
              <div>
                <p className='text-center font-bold p-2'>Not-Spotify</p>
                <p className='text-center p-2'>A Spotify clone with an identical UI made with tailwind,
                  user/subscription validated song listening,
                  supabase database and Stripe implementation,
                  using Next.js/Typescript</p>
              </div>
              <div className='m-4 flex justify-evenly gap-6'>
                <a target='_blank' href='https://not-spotify-guorvo.vercel.app/' className=' w-1/3 rounded-full p-2 text-center bg-words text-secondary font-bold hover:bg-primary hover:scale-110 transition'>Live Demo</a>
                <a target='_blank' href='https://github.com/Guorvo/not-spotify' className=' w-1/3 rounded-full p-2 text-center bg-words text-secondary font-bold hover:bg-primary hover:scale-110 transition'>Source Code</a>
              </div>
            </div>
          </div>
          <div className='md:w-4/5 grow md:m-6 p-6 bg-primary md:rounded-xl self-end'>
            <div className='bg-secondary p-4 rounded-xl'>
              <div className='overflow-hidden pb-[56.25%] relative h-0'>
                <div className='top-0 left-0 h-full w-full absolute bg-[url("henryfoods.jpeg")]'></div>
              </div>
              <div>
                <p className='text-center font-bold p-2'>Henry Foods</p>
                <p className='text-center p-2'>A website for fast food delivery/local ordering, 
                  basically an e-commerce with extra steps, 
                  a login for concurrent users, 
                  an admin dashboard for data logging and much more!. used Redux, Express and MongoDB</p>
              </div>
              <div className='m-4 flex justify-evenly gap-6'>
                <a target='_blank' href='https://main-henry-client.vercel.app/' className=' w-1/3 rounded-full p-2 text-center bg-words text-secondary font-bold hover:bg-primary hover:scale-110 transition'>Live Demo</a>
                <a target='_blank' href='https://github.com/JuanArnau7/HenryClient' className=' w-1/3 rounded-full p-2 text-center bg-words text-secondary font-bold hover:bg-primary hover:scale-110 transition'>Source Code</a>
              </div>
            </div>
          </div>
          <div className='md:w-4/5 grow md:m-6 p-6 bg-primary md:rounded-xl'>
            <div className='bg-secondary p-4 rounded-xl'>
              <YoutubeEmbed embedId='jGGmt1unIHY?si=WZljaEpPMpHTSZeL' />
              <div>
                <p className='text-center font-bold p-2'>PokéAPI</p>
                <p className='text-center p-2'>A database of pokemon with the CRUD method for custom pokémons and a database connected with the PokéAPI API,
                  with filtering & sorting by, stats, name or typing
                  made with React-Redux and Node-Express</p>
              </div>
              <div className='m-4 flex justify-evenly gap-6'>
                <a target='_blank' className=' w-1/3 rounded-full p-2 text-center hidden bg-words text-secondary hover:bg-primary hover:scale-110 transition'>Live Demo</a>
                <a target='_blank' href='https://github.com/Guorvo/PI-Pokemon' className=' w-1/3 rounded-full p-2 text-center bg-words text-secondary font-bold hover:bg-primary hover:scale-110 transition'>Source Code</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects