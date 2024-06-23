import React from 'react';
import walmart from '../navbar/wallmart2.png'
import facebook from '../navbar/facebook2.png'
import microsoft from '../navbar/microsoft2.png'
import adobe from '../navbar/adobe2.png'
import tele from '../navbar/ticon.jpeg'
import inst from '../navbar/inicon.jpeg'
import face from '../navbar/ficon.png'
import youtube from '../navbar/yicon.png'
import './Contact.css';
const Contact = () => {
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
                <form className='contactForm'>
                    <input type="text" className='name' placeholder='You Name' />
                    <input type="email" className='email' placeholder='You Email' />
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
