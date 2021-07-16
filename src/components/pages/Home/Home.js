/* Library Imports */
import React from 'react';


/* Component Imports */

/* Asset Imports */
import StyledHome from './StyledHome';

const Home = ({ data }) => {
  return (
    <StyledHome>
      <h1>{data[0].author}</h1>
    </StyledHome>
  )
};

export default Home;