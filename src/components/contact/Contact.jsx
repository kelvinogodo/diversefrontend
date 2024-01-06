import React from 'react'
import './contact.css'
import {BsFillWalletFill} from 'react-icons/bs'
import {FaPhone,FaTelegramPlane} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import {FiMail} from 'react-icons/fi'
import { useState ,useRef} from 'react'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
const Contact = () => {
    
    // sweet alert function 
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2ljiy8n', 'template_hr6ase7', form.current, 'u__c9CcKEVKgaRN5U')
        .then((result) => {
            console.log(result.text);
            Toast.fire({
                icon: 'success',
                title: 'Email sent successfully'
              })
        }, (error) => {
            console.log(error.text);
            Toast.fire({
                icon: 'error',
                title: 'something went wrong'
              })
        });
    };


  return (
    <div className='contact-section' id='contact'>
        {/* <div className="about-wrapper">
        <div className="why-choose-us-text-container about-text contact-p" >
            <div className="header" data-aos="fade-up">
                <span className="header-line"></span>
                <h3>contact us</h3>
            </div>
            <h1 data-aos="fade-up">get in touch</h1>
            <p data-aos="fade-up">
                Any question? Reach out to us and we’ll get back to you shortly.
            </p>
            <div className="contact-card" data-aos="fade-up">
                <div className="ball contact-ball">
                    <FaPhone />
                </div>
                <div className="contact-card-text">
                    <p>+14172216175</p>
                </div>
            </div>
            <div className="contact-card" data-aos="fade-up">
                <div className="ball contact-ball">
                    <FiMail />
                </div>
                <div className="contact-card-text">
                    <p>passiveincominvest@gmail.com</p>
                </div>
            </div>
            <div className="contact-card" data-aos="fade-up">
                <div className="ball contact-ball">
                    <FaTelegramPlane />
                </div>
                <div className="contact-card-text">
                    <p>chat us on whatsapp</p>
                </div>
            </div>
        </div>
        <div className="contact-form-container">
            <form className="contact-form"  ref={form} onSubmit={sendEmail}>
                <div class="input-group" data-aos="fade-up">
                    <input required="" type="text" name="name" autocomplete="off" className="input" />
                    <label className="user-label">name</label>
                </div>
                <div class="input-group" data-aos="fade-up">
                    <input required="" type="text" name="email" autocomplete="off" className="input" />
                    <label className="user-label">email</label>
                </div>
                <div class="input-group" data-aos="fade-up">
                    <input required="" type="text" name="message" autocomplete="off" className="input" />
                    <label className="user-label">message</label>
                </div>
                <input type="text" style={{display:'none'
                }} name='subject' value={'contact message from your site'}/>   
                <input type="text" style={{display:'none'
                }} name='reply_to' value={'passiveincominvest@gmail.com'}/>   
                <button className='launch-btn sub-btn' data-aos="fade-up" type='submit'> submit
                </button>
            </form>
        </div>
        </div> */}
    </div>
  )
}

export default Contact