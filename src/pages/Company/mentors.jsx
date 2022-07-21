import React from 'react';
import random from "../../assets/1.jpeg";
import './mentors.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
// import NewsHeaderCard from 'react-ui-cards';
import Navbar from '../../components/header/Navbar'


const mentors = () => {
  return (
    <div>
      <Navbar />
      <h1>Salaaah is gooood</h1>
      <div className='card-main-div'>
        <img className='card-image' src={random} alt="random" />
        <div className='card-text'>
        <h1 className='card-heading'>Rohit</h1>
        <h4 className='card-desig'>SDE Intern</h4>
        <div>
          <LinkedInIcon />
          <AlternateEmailIcon />
        </div>
        </div>
      </div>

    </div>
  )
}

export default mentors;



