import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/shared/logo.svg';
import close from '../assets/shared/icon-close.svg';
import hamburger from '../assets/shared/icon-hamburger.svg';
import './navbar.css';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const showSidebar = () => {
    setShow(!show);
  };
  const closeNav = () => {
    setShow(false);
  };

  return (
    <section id="navbar" className="d-flex ai-center">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="line"></div>
      <div className={`nav-menu ${show && 'show'}`}>
        <ul className="d-flex">
          <li onClick={closeNav}>
            <NavLink exact="ture" to="/" activeclassname="active">
              <span>00</span> Home
            </NavLink>
          </li>
          <li onClick={closeNav}>
            <NavLink to="/destination">
              <span>01</span> Destination
            </NavLink>
          </li>
          <li onClick={closeNav}>
            <NavLink to="crew">
              <span>02</span> Crew
            </NavLink>
          </li>
          <li onClick={closeNav}>
            <NavLink to="technology">
              <span>03</span> Technology
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="hamburger d-none" onClick={showSidebar}>
        <img src={show ? close : hamburger} alt="hamburger-icon" />
      </div>
    </section>
  );
};
export default Navbar;
