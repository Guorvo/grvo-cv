import React from 'react'
import LogoSlider from './LogoSlider'
import { BiLogoJavascript, BiLogoCss3, BiLogoHtml5, BiLogoReact, BiLogoRedux, BiLogoTailwindCss } from 'react-icons/bi'

function Stack() {

  const front = [
    <BiLogoJavascript key='js' size='50' name='js' />,
    <BiLogoHtml5 key='html5' size='50' name='html5' />,
    <BiLogoCss3 key='css3' size='50' name='css3' />,
    <BiLogoReact key='react' size='50' name='react' />,
    <BiLogoRedux key='redux' size='50' name='redux' />,
    <BiLogoTailwindCss key='tailwindcss' size='50' name='tailwindcss' />,
  ]
  const back = [
    <BiLogoJavascript key='nodejs' name='nodejs' />,
  ]
  const utils = [
    <BiLogoJavascript key='nodejs' name='nodejs' />,
  ]

  return (
    <div id='stack' className='bg-wall min-h-screen flex justify-center'>
      <div className='flex md:my-12 w-full md:w-3/5 bg-accent md:rounded-xl shadow-xl'>
        <LogoSlider logos={front} />
      </div>
    </div>
  )
}

export default Stack