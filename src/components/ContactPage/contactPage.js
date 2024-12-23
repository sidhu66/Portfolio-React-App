import React, { useRef } from 'react';
import './contactPage.css';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
    const form = useRef(); // Use a ref to reference the form

    const sendEmail = (e) => {
        e.preventDefault(); // Prevent page reload
    
        // Send the email
        emailjs
          .sendForm(
            'service_8aeu0hk',            // Replace with your service ID
            'template_hoo60yb',          // Replace with your template ID
            form.current,                // Use form reference
            'yKxnY59hXIcrzlpGAqbGJ'      // Public Key (valid position)
          )
          .then(
            () => {
              console.log('SUCCESS!');
              form.current.reset(); // Reset form here
              alert('Email Sent');  // Fixed typo
            },
            (error) => {
              console.log('FAILED...', error.text);
            }
          );
    };

    return (
        <section id='contactPage'>
            <h2 className='contactsTitle'>Contact Me</h2>
            <span className='contactsDesc'>
                Please fill out the form below to discuss any work opportunities.
            </span>

            <form className='contactsForm' ref={form} onSubmit={sendEmail}>
                {/* Added required attribute */}
                <input 
                    type='text' 
                    className='name' 
                    placeholder='Your Name' 
                    name='your_name' 
                    required
                />
                <input 
                    type='email' 
                    className='email' 
                    placeholder='Your Email' 
                    name='your_email' 
                    required
                />
                <textarea 
                    name="message" 
                    rows="5" 
                    className='msg' 
                    placeholder='Your Message' 
                    required
                ></textarea>
                
                
                <button type="submit" className='SubmitBtn'>Submit</button>
            </form>
        </section>
    );
};

export default ContactPage;
