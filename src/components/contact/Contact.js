import React, { useRef } from 'react';
import walmart from '../navbar/wallmart2.png'
import facebook from '../navbar/facebook2.png'
import microsoft from '../navbar/microsoft2.png'
import adobe from '../navbar/adobe2.png'
import tele from '../navbar/ticon.jpeg'
import inst from '../navbar/inicon.jpeg'
import face from '../navbar/ficon.png'
import youtube from '../navbar/yicon.png'
import emailjs from '@emailjs/browser';
import './Contact.css';
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_vdb94ij', 'template_t0kofad', form.current, {
            publicKey: 'kwFeBh6zHQRSBm9fg',
            })
            .then(
                (result) => {
                    console.log(result.text);
                    e.target.reset()
                    alert('Email sent!')
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <section id="contactPage">
            <div id="clients">
                <h1 className="contactPageTitle">My Clients</h1>
                <p className="clientDesc">
                    I have had the opportunity to work with a diverse group of companies.
                    Some of the notable companies I have worked with includes.
                </p>
                <div className="clientImgs">

                    <img src={walmart} alt="Walmart" className='clientImg' />
                    <img src={facebook} alt="Facebook" className='clientImg' />
                    <img src={microsoft} alt="Microsoft" className='clientImg' />
                    <img src={adobe} alt="Adobe" className='clientImg' />
                </div>

            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">
                    Please fill out form bellow to discuss any work opportunities
                </span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type="text" className='name' placeholder='You Name' name='your_name' />
                    <input type="email" className='email' placeholder='You Email' name='your_email' />
                    <textarea name="message" className='msg' rows='5' placeholder='Your Message'></textarea>
                    <button className='submitBtn' type='submit' >Submit</button>
                    <div className="links">
                        <img src={tele} alt="Telegram" className="link" />
                        <img src={face} alt="Facebook" className="link" />
                        <img src={inst} alt="Instagram" className="link" />
                        <img src={youtube} alt="Youtube" className="link" />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;
