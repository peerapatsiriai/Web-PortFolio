import React from 'react'
import './about.css'
import ME from '../../assets/totoro-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
      <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About Image" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about__icon'/> 
                <h4>Experience</h4>
                <small>3+ Year Working</small>
              </article>

              <article className='about__card'>
                <FiUser className='about__icon'/> 
                <h4>Clients</h4>
                <small>200+ Worldwide</small>
              </article>

              <article className='about__card'>
                <VscFolderLibrary className='about__icon'/> 
                <h4>Projects</h4>
                <small>80+ Completed</small>
              </article>
            </div>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, cum. Quod numquam 
              laboriosam reiciendis molestiae quae ullam officia impedit. Labore dicta laboriosam 
              architecto facilis veniam assumenda error voluptatum officiis necessitatibus!
            </p>

            <a href="#contact" className='btn btn-primary'>Let't Talk</a>
          </div>
        </div>
      </section>
  )
}

export default about