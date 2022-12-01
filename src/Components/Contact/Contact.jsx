import React,{useRef} from 'react'
import "./Contact.css"
import emailjs from "@emailjs/browser" 
import { useState } from 'react';
const Contact = () => {

  const form = useRef();

  const [done,SetDone]=useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y2dzz7y', 'template_nr7v739', form.current, '5Kvv1ts9ADZtVXYZi')
      .then((result) => {
          console.log(result.text);
          SetDone(true)
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div className="contact-form">
        <div className="w-left">
            <div className="awesome">

           
            <span>Get in Touch</span>
            <span>WIth us</span>
            <div className='blur s-blur1' style={{background:"#ABF1FF94"}}></div>


            </div>
           
        </div>

    <div className="c-right">
        <form action="" ref={form} onSubmit={sendEmail}>
            <input type="text" name='user_name' className='user' placeholder='Name' />
            <input type="email" name="user_email" className='user' placeholder='Email' />
            <textarea name="message" className='user' id="" cols="30" rows="10" placeholder='Message'></textarea>
            <input type="submit" value="send" className='button' />
            <span>{done && "thanks for contacting me !"}</span>
        </form>
    </div>

    </div>
  )
}

export default Contact