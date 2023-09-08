import React from 'react'
import LogoSlider from './LogoSlider'
import {
  BiLogoJavascript,
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoReact,
  BiLogoRedux,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoPostgresql,
  BiLogoNodejs,
  BiLogoStripe,
  BiLogoTux,
  BiLogoMongodb,
  BiLogoGit,
  BiLogoVisualStudio
} from 'react-icons/bi'
import {
  TbBrandNextjs, TbSql
} from 'react-icons/tb'
import {
  SiBabel,
  SiExpress,
  SiPython,
  SiSupabase,
  SiVercel,
  SiVite,
  SiWebpack,
  SiWindows
} from 'react-icons/si'

function Stack() {

  const front = [
    <BiLogoJavascript key='js' size='50' name='js' />,
    <BiLogoTypescript key='ts' size='50' name='ts' />,
    <BiLogoHtml5 key='html5' size='50' name='html5' />,
    <BiLogoCss3 key='css3' size='50' name='css3' />,
    <BiLogoReact key='react' size='50' name='react' />,
    <TbBrandNextjs key='nextjs' size='50' name='nextjs' />,
    <BiLogoRedux key='redux' size='50' name='redux' />,
    <BiLogoTailwindCss key='tailwindcss' size='50' name='tailwindcss' />,
  ]
  const back = [
    <BiLogoNodejs key='nodejs' size='50' name='nodejs' />,
    <SiPython key='python' size='50' name='python' />,
    <TbSql key='sql' size='50' name='sql' />,
    <SiExpress key='express' size='50' name='express' />,
    <BiLogoPostgresql key='postgresql' size='50' name='postgresql' />,
    <SiSupabase key='supabase' size='50' name='supabase' />,
    <BiLogoMongodb key='mongodb' size='50' name='mongodb' />,
  ]
  const utils = [
    <BiLogoGit key='git' size='50' name='git' />,
    <BiLogoVisualStudio key='vscode' size='50' name='vscode' />,
    <SiVercel key='vercel' size='50' name='vercel' />,
    <SiVite key='vite' size='50' name='vite' />,
    <BiLogoStripe key='stripe' size='50' name='stripe' />,
    <SiWebpack key='webpack' size='50' name='webpack' />,
    <SiBabel key='babel' size='50' name='babel' />,
    <BiLogoTux key='linux' size='50' name='linux' />,
    <SiWindows key='windows' size='50' name='windows' />,
  ]

  return (
    <div id='stack' className='bg-wall min-h-screen flex justify-center'>
      <div className='flex flex-col justify-start md:justify-evenly md:my-12 w-full md:w-3/5 bg-gradient-to-b from-primary to-accent text-secondary md:rounded-xl shadow-xl'>
        <p className='font-semibold text-center text-2xl text-words bg-secondary p-4'>Some of the tech stack i've worked with</p>
        <LogoSlider logos={front} />
        <LogoSlider logos={back} />
        <LogoSlider logos={utils} />
      </div>
    </div>
  )
}

export default Stack