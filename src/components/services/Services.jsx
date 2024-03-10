import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What positions have I tried</h5>
      <h2>Positions</h2>
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Project Manager</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Get requirement</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Planning schedule</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Planning scrum</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Management developer in team</p>
            </li>

         

          </ul>
        </article>
        {/* END OF UX DESIGE */}
        <article className='service'>
          <div className="service__head">
            <h3>System Analyst</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design Database</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design UX</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Create system document </p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Analyst problem in process</p>
            </li>

          </ul>
        </article>
         {/* END OF WebDevelopment*/}
        <article className='service'>
          <div className="service__head">
            <h3>Back-end Developer</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Build Restful API</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Connect API with ERP system</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Write code pattern</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Create API documents</p>
            </li>

          </ul>
        </article>
         {/* END OF Content */}
      </div>
    </section>
  )
}

export default Services