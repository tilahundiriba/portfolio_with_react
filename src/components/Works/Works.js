import React from 'react';
import './Works.css';
import Portfolio from '../navbar/portfolioImg.jpeg';
const Works = () => {
    return (
        <section id='works'>
            <h2 className='worktitle'>My Portfolio</h2>
            <span className="workDesc">I take pride in playing attention to the details and </span>
            <div className="workImgs">
                <img src={Portfolio} alt="" className="workImg" />
                <img src={Portfolio} alt="" className="workImg" />
                <img src={Portfolio} alt="" className="workImg" />
                <img src={Portfolio} alt="" className="workImg" />
                <img src={Portfolio} alt="" className="workImg" />
                <img src={Portfolio} alt="" className="workImg" />
            </div>
            <button className='workbtn'>See More</button>
        </section>
    );
}

export default Works;
