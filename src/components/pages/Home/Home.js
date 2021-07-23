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
              <button className="post-control-button"><FaArrowAltCircleUp className="post-icon" /><span>{data[0].likes}</span></button>
              <button className="post-control-button"><FaArrowCircleDown  className="post-icon" /><span>{data[0].dislike}</span></button>
              <button className="post-control-button"><FaRetweet className="post-icon" /></button>
            </div>
            <div className="share">
              <button className="post-control-button"><FaInstagram className="post-icon" /></button>
              <button className="post-control-button"><FaFacebookSquare className="post-icon" /></button>
              <button className="post-control-button"><FaDigg className="post-icon" /></button>
            </div>
          </section>
        </article>
      </section>
    </StyledHome>
  )
};

export default Home;