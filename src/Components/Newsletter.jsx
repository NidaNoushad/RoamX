import React, { useRef } from 'react'
import './Newsletter.css'
import emailjs from '@emailjs/browser';


const Newsletter = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_26v9bvu', 'template_gz936ko', form.current, 'o1kI_v4RcN7Y5nzhD')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='mx-4'>
      <div className='row'>
        <div className='col-12 col-md-6 news'>
          <hr/>
          <span className='strokeText'>Signup</span>
          <span>
          <span>for our</span>
          <span className='strokeText mx-3'>newsletter</span></span>
        </div>
        <div className='col-12 col-md-6 newssignup'>
          <form className='signup' ref={form} onSubmit={sendEmail} >
            <input type='email' placeholder='enter your email' name='user_email'></input>
             <button>
        <div className='button1'>
        <span>Sign Up</span>
        </div>
        </button>  
   
          </form>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
