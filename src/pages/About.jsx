import React from 'react';
import About2 from "../assets/about2.jpg";
import About1 from "../assets/about1.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className='about'>
      <div className='aboutTop' style={{backgroundImage: `url(${About2})`}}></div>
      <div className='aboutBottom'>
        <h1>ABOUT US</h1>
        <div className='bottom'>
           <div className='leftside' style={{backgroundImage: `url(${About1})`}}></div>
        
           <p>It’s a simple equation that keeps our customers coming back for more.  Always fresh toppings and great service plus low, low prices equals great pizza. 
            Here at Florida's Pizzeria, we strive to give our customers the best.  We’re one of the few family-owned companies left that still truly care about our customers. 
            <br></br>Our customers can count on prompt and quality service, high-quality food made from high-quality products with the freshest ingredients available and great prices. Whether you’re looking to feed your family or cater a gathering or lunch meeting, feeding a large group is both easy and affordable at Florida's Pizzeria.</p>
        </div>
        
      </div>
    </div>
  );
}

export default About;
