/* Library Imports */
import React from 'react';

/* Component Imports */

/* Asset Imports */
import StyledHeader from './StyledHeader';
import logo from 'https://icon2.cleanpng.com/20180425/xrw/kisspng-logo-brand-communication-design-ornamentation-5ae0e069496334.8998592215246869533006.jpg'

const Header = () => {
  return (
    <StyledHeader>
      <img src={logo} alt="logo" />
    </StyledHeader>
  )
};

export default Header;