import React from 'react'
import './contact.css'
import {MdOutlineEmail} from'react-icons/md'
import {RiMessengerLine} from'react-icons/ri'
import {BsWhatsapp} from'react-icons/bs'

const contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>Peerapatsiriai43@gmail.com</h5>
            <a href="mailto:peerapatsiriai43@gmail.com">Send Message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messager</h4>
            <h5>Peerapat siriai</h5>
            
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>We Chat</h4>
            <h5>091-421-1183</h5>
            
          </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form action=''>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Full Email' required />
          <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Msg</button>
        </form>
      </div>
    </section>
  )
}

export default contact