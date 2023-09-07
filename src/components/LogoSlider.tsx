import React from 'react'

function LogoSlider(props) {
  return (
        <div className="flex overflow-hidden">
            <ul className="whitespace-nowrap flex gap-4 py-4 animate-scroll">
              {props.logos.map((logo) => <li key={logo.key}>{logo}</li>)}
            </ul>
            <ul className="whitespace-nowrap flex gap-4 py-4 pl-4 animate-scroll">
              {props.logos.map((logo) => <li key={logo.key}>{logo}</li>)}
            </ul>
        </div>
  )
}

export default LogoSlider