/* Library Imports */
import React from 'react';


/* Component Imports */
import SocialCard from 'modules/SocialCard/SocialCard'

/* Asset Imports */
import StyledHome from './StyledHome';



const Home = ({ data }) => {


  return (
    <StyledHome >
      <section className="center-column">
        <SocialCard 
        author={data[0].author} 
        title={data[0].title}
        date={data[0].date}
        content={data[0].content}
        likes={data[0].likes}
        dislikes={data[0].dislike}
        img={data[0].img}
        />
      </section>
    </StyledHome>
  )
};

export default Home;