/* Library Imports */
import React from 'react';


/* Component Imports */
import SocialCard from 'modules/SocialCard/SocialCard'

/* Asset Imports */
import StyledHome from './StyledHome';



const Home = ({ data }) => {
  const socialCards = data.map((tweet, index) => (
    <SocialCard 
      author={tweet.author} 
      title={tweet.title}
      date={tweet.date}
      content={tweet.content}
      likes={tweet.likes}
      dislike={tweet.dislike}
      img={tweet.img}
      key={index}
    />
  ))
  return (
    <StyledHome >
      <section className="center-column">
      {socialCards}
      </section>
    </StyledHome>
  )
};

export default Home;