import React from 'react'
import Profile from '../navbar/profile2.jpeg';
import HireMe from '../navbar/bag.png';
import './Intro.css';
import { Link } from 'react-scroll'
const Intro = () => {
    return (
        <section id='intro'>
            <div className="intro-content">
                <span className='hello'>Hello,</span>
                <span className='introtext'>I'm
                    <span className='introname'>Tilahun</span> <br />
                    Website Designer
                    <p className="introprag">I am a skilled desinger exprience in creating <br /> visual appealing and user friendly websites</p>
                    <Link> <button className="btn"><img src={HireMe} alt="Hire Me" className='btn-img' />Hire Me</button></Link>
                </span>
            </div>
            <img src={Profile} alt="Profile" className='bg' />
        </section>
    )
}

export default Intro
