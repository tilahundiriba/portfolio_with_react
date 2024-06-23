import React from 'react';
import Appdesign from '../navbar/Appdesing.jpeg'
import UIdesign from '../navbar/UIdesign.png'
import Webdesign from '../navbar/wendesing.png'
import './About.css';

const About = () => {
    return (
        <section id='about'>
            <span className="skillTitle">
              what I do
            </span>
            <span className="skillDesc">
                I am a skilled and passionate web desinger with exprience in creating <br /> visual appealing and user friendly websites
            . I have a strong understanding of design and a kenn eye for detail. I am proficient in HTML , CSS and javaScript, as well as 
                design software such as Adobe Photoshop and Illustrator.
            </span>
            <div className="skillBars">
               
                    <div className="skillBar">
                        <img src={UIdesign} alt="UIdesign" className="skillBarImg" />
                        <div className="skillBarText">
                            <h2>UI/UX Design</h2>
                            <p>this is a demo text , you can write here.</p>
                        </div>
                    </div>
                
                <div className="skillBar">
                    <img src={Webdesign} alt="Webdesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Web Design</h2>
                        <p>this is a demo text , you can write here.</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src={Appdesign} alt="App design" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>App Design</h2>
                        <p>this is a demo text , you can write here.</p>
                    </div>
                </div>
            </div>
      
           
           
      
        </section>
    )
}

export default About;
