/* Library Imports */
import React from 'react';


/* Component Imports */

/* Asset Imports */
import StyledHome from './StyledHome';
import { FaArrowAltCircleUp, 
         FaArrowCircleDown, 
         FaRetweet,
         FaInstagram,
         FaFacebookSquare,
         FaDigg } from "react-icons/fa";


const Home = ({ data }) => {


  return (
    <StyledHome socialBG={data[0].img}>
      <section className="center-column">
        <article className="social-card">
          <div className="img-wrapper">
          </div>
          <section className="post-content">
            <div className="author-date">
              <p>{data[0].author} - {data[0].date}</p>
            </div>
              <h3>{data[0].title}</h3>
              <p>{data[0].content}</p>
          </section>
          <section className="post-control">
            <div className="vote">
              <button><FaArrowAltCircleUp /> {data[0].likes}</button>
              <button><FaArrowCircleDown /> {data[0].dislike}</button>
              <button><FaRetweet /></button>
            </div>
            <div className="share">
              <FaInstagram />
              <FaFacebookSquare />
              <FaDigg />
            </div>
          </section>
        </article>
      </section>
    </StyledHome>
  )
};

export default Home;