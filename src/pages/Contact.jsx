import React from 'react'
import ContactImg from "../assets/contact.webp";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide'style={{backgroundImage: `url(${ContactImg})`}}>
        </div>
        <div className='rightSide'>
            <h1>Contact Us</h1>
            <form id="contact-form" method="POST">
                <label htmlfor="name">Full Name</label>
                <input name="name" type="text" placeholder="Your Full Name"/><br/>
                <label htmlfor="email">Email Address</label>
                <input name="email" type="email" placeholder="Your Email Address"/><br/>
                <label htmlFor='message'>Messages</label>
                <textarea name="message " rows="6" placeholder='Enter message..' required></textarea>
                <button type='submit'>Send Message</button>
            </form>

        </div>
      
    </div>
  )
}

export default Contact
