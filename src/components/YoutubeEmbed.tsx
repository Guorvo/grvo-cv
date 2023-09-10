import React from 'react'

const YoutubeEmbed = ({ embedId }) => {
  return (
    <div
      className='overflow-hidden pb-[56.25%] relative h-0'
    >
      <iframe 
        className='top-0 left-0 h-full w-full absolute'
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  )
}

export default YoutubeEmbed;