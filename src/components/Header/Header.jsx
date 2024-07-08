import React from 'react'
import './Header.css'
import gif from '../../assets/header.gif';
import right_arrow from '../../assets/right-arrow.svg';

const Header = () => {
  return (
    <div className="header">
      <div className="header-main">
        <div className="gif">
          <img src={gif} alt="gif" />
        </div>
        <div className="header-content">
          <p><span>Intract users </span>have together made more than <span>$100 million</span> in web3.
            Join them and <span>learn how to earn crypto!</span></p>
          <div className="btn">
            <h4>Get Started <img src={right_arrow} alt="arrow" /> </h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header