/* Library Imports */
import React from 'react';

/* Component Imports */

/* Asset Imports */
import StyledHeader from './StyledHeader';
import logo from 'src/assets/images/logo.png'

const Header = () => {
  return (
    <StyledHeader>
      <img src={logo} alt="logo" />
    </StyledHeader>
  )
};

export default Header;