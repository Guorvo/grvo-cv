import React from 'react'

function About() {
  const achievements = [
    {
      name: 'deletthis',
      desc: `know all the lyrics to cold weather.`
    },
    {
      name: 'caveost',
      desc: `over a thousand hours on Terraria.`
    },
    {
      name: 'wawa',
      desc: `100% achievements on Rain World.`
    },
    {
      name: 'speedkore4kids',
      desc: `an unhealthy addiction to speedcore.`
    },
    {
      name: 'pokemon',
      desc: `a bulbasur plushie.`
    },
    {
      name: 'notworth',
      desc: `an issac character randomizer on what appears to be a malware.`
    },

  ]
  return (
    <>
      <div id='about' className='
        flex 
        flex-col
        justify-center 
        items-center 
        bg-gradient-to-b
        from-wall
        to-secondary
        min-h-screen
      '>
        <div className='bg-accent w-full grow flex flex-col justify-center items-center'>
          <div className='flex flex-col justify-center text-center w-fit p-6 text-xl md:text-3xl'>
            <span className='font-semibold'>Hello I'm Guorvo, <br />
              a web developer from Argentina with a passion for anything tech, <br />
              my current hobbies revolve around Video games, Art, Books and Coding. <br />
              Some accomplishments  i think are neat:
            </span>
            <ol className='list-disc pl-6 self-center text-left py-3'>
              {achievements.map((a) => <li className='hover:scale-105 transition hover:drop-shadow-lg' key={a.name}>{a.desc}</li>)}
            </ol>
            <span className='font-semibold'>And much more!</span>
          </div>

        </div>
      </div>
    </>
  )
}

export default About