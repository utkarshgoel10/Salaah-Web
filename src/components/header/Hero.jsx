import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <div className="hero-container">
        <div className="hero-head">
          <h1 className="Ultrabold hello">Design the Future</h1>
          {/* <h1 className="Ultrabold hello">Cooking up your <br/>career</h1> */}
        </div>
        <div className="Regular container hero-content">
          <p className="hero-content-text">Connecting our current students with the alumni to recieve career guidance.</p>
          <a href="/">
            <Link to="/company" className="btn">Enter Now!</Link>
          </a>
        </div>
    </div>
  )
}

export default Hero





