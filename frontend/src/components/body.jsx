import React from 'react';
import homeleft from '../assets/homeleft.png';  // Import the image
import "./../styles/style.css";

function Body() {
  return (
    <div className="bodysec">
      <div className="leftbox">
        <img src={homeleft} alt="image" className="homelefti" />
        <p id='ml'>Your Health, Our Priority</p>
        <p id='sl'>"Your health is our mission, your well-being our promise. Let our AI-powered care remind you, so your loved ones never have to." </p>
      </div>

      <div className="rightbox">
        HEALTH IS WEALTH..!
      </div>
    </div>
  );
}

export default Body;
