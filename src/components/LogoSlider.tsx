import React from 'react'

function LogoSlider(props) {
  return (
        <div className="flex overflow-hidden my-8 md:m-0">
            <ul className={`whitespace-nowrap flex gap-16 py-4 px-8 animate-scroll transition`}>
              {props.logos.map(
                (logo) => <li className='hover:scale-125 transition' key={logo.key}>{logo}</li>
                )}
            </ul>
            <ul className="whitespace-nowrap flex gap-16 py-4 px-8 animate-scroll transition">
              {props.logos.map(
                (logo) => <li className='hover:scale-125 transition' key={logo.key}>{logo}</li>
              )}
            </ul>
        </div>
  )
}

export default LogoSlider