import React from 'react'
import './Navbar.css';
import logo from '../../assets/intract-logo.svg'
import broadcast from '../../assets/broadcast-icon.svg';
import { IoSearch } from "react-icons/io5";
import "bootstrap-icons/font/bootstrap-icons.css";
import { NavLink } from 'react-router-dom';

const Navbar = () => {


  return (
    <div className="navbar">
        <div className="nav-main">
            <div className="logo">
                <img src={logo} alt="My icon" />
            </div>
            <div className="nav-items">
                <p className=''>Compass</p>
                <NavLink to='/explore' className= { ({ isActive }) => isActive ? `link active` : `link normal`} ><p className=''>Explore</p> </NavLink>
                <NavLink to='/' className= { ({ isActive }) => isActive ? `link active` : `link normal`}><p className=''>Acadamy <span>New</span></p></NavLink>
                <NavLink to='/nft' className= { ({ isActive }) => isActive ? `link active` : `link normal`}><p className=''>NFTs</p></NavLink>
                <p className=''>For Projects</p>
                
            </div>
            <div className="navsearch">
                {/* <IoSearch /> */}
                <i class="bi bi-search search-icon"></i>
                <input type='text' placeholder='Search for ecosystems, trending quests etc..'></input>
            </div>
            <div className="nav-signin">
                <img src={broadcast} alt="broadcast icon" />
            </div>
                <button>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar