/* Library Imports */
import React from 'react';

/* Component Imports */

/* Asset Imports */
import StyledHeader from './StyledHeader';
import logo from 'src/assets/images/logo.png'

const Header = () => {

  const showHideNav = (event) => {
    event.preventDefault();
    let nextSibling = event.target.nextElementSibling;

    if (nextSibling.classList.contains("hide")) {
      nextSibling.classList.remove("hide")
      nextSibling.classList.add("show")
    } else {
      nextSibling.classList.remove("show")
      nextSibling.classList.add("hide")
    }
  }
  return (
    <StyledHeader>
      <img src={logo} alt="logo" />
      <nav className="classic-nav">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Your profile</li>
        </ul>
      </nav>
      <nav className="mobile-nav">
        <button onClick={showHideNav}>Menu</button>
          <ul className="hide">
            <li>Home</li>
            <li>About</li>
            <li>Your profile</li>
          </ul>
      </nav>
    </StyledHeader>
  )
};

export default Header;