import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'

const Contact = () => {
  return (
    <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
      <h1 className='text-5xl md:text-6xl mb-1 md:mb-3 font-bold'>Contact</h1>
      <p className='text-base md:text-xl mb-3 font-medium'>Front ~ End Developer</p>
      <p className='text-sm max-w-xl mb-6 font-bold'>
        <p>Mis Redes de Contacto / My Contact Networks</p>
      </p>

      <div className='flex items-center justify-center cursor-pointer'>
        <div className='mr-10'><a href='https://www.linkedin.com/in/javier-jimenez-carral-68ba5423b/' target='_blank' rel='noopener noreferrer'><BsLinkedin size={38}/></a></div>
        <div><a href='https://github.com/JavierLRA-Jimenez' target='_blank' rel='noopener noreferrer'><AiFillGithub size={50} /></a></div>
      </div>
      <br/>
      <p className='text-sm max-w-xl mb-6 font-bold'>
        <p>Email: javierjimenezmk@gmail.com</p>
      </p>
    </div>
    
  )
}

export default Contact