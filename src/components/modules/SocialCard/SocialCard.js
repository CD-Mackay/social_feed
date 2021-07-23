/* Library Imports */
import React from 'react';


/* Component Imports */

/* Asset Imports */
import StyledSocialCard from './StyledSocialCard';
import { FaArrowAltCircleUp, 
         FaArrowCircleDown, 
         FaRetweet,
         FaInstagram,
         FaFacebookSquare,
         FaDigg } from "react-icons/fa";

const SocialCard = ({author, date, title, content, likes, dislike, img}) => {

  return (
    
    <StyledSocialCard socialBG={img}>
          <div className="img-wrapper">
          </div>
          <section className="post-content">
            <div className="author-date">
              <p>{author} - {date}</p>
            </div>
              <h3>{title}</h3>
              <p>{content}</p>
          </section>
          <section className="post-control">
            <div className="vote">
              <button className="post-control-button"><FaArrowAltCircleUp className="post-icon" /><span>{likes}</span></button>
              <button className="post-control-button"><FaArrowCircleDown  className="post-icon" /><span>{dislike}</span></button>
              <button className="post-control-button"><FaRetweet className="post-icon" /></button>
            </div>
            <div className="share">
              <button className="post-control-button"><FaInstagram className="post-icon" /></button>
              <button className="post-control-button"><FaFacebookSquare className="post-icon" /></button>
              <button className="post-control-button"><FaDigg className="post-icon" /></button>
            </div>
          </section>
        </StyledSocialCard>
  )
}

export default SocialCard