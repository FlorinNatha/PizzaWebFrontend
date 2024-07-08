import React from 'react'
import {Link} from "react-router-dom";
import BannerImage from "../assets/homeimage.png";
import '../styles/Home.css';

function Home() {
    
  return (
    <div className='home' style={{backgroundImage: `url(${BannerImage})` }}>
      <div className='headerContainer' >
        <h1>Florida's Pizzeria</h1>
        <p>WE HAVE THE BEST PIZZA</p>
        <Link to="/menu">
           <button>ORDER NOW</button>
        </Link>
        
      </div>
    </div>
  )
}

export default Home
