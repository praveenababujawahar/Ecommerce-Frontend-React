import React from 'react'
import './HomeCover.css'
import logo from '../assets/logo.png';

const HomeCover = () => {
  return (
    <section className="hero container-fluid">
      <div className="overlay">
        <div className="name-n-slogan-container">
            <img src={logo} alt="Logo" className="logo" />
          <p className="slogan text-center">Best fashion collection of all time</p>
        </div>

      </div>
    </section>
  )
}

export default HomeCover