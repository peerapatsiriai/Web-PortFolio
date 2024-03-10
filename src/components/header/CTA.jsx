import React from 'react'
import CV from '../../assets/CV.pdf'


const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Downlode CV</a>
        <a href="#contact" className='btn btn-primary'>Let't Talk</a>
    </div>
  )
}

export default CTA