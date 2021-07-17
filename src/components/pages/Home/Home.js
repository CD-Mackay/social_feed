/* Library Imports */
import React from 'react';


/* Component Imports */

/* Asset Imports */
import StyledHome from './StyledHome';

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
              <p>Upvote - {data[0].likes}</p>
              <p>Downvote - {data[0].dislikes}</p>
              <p>Retweeeeet</p>
            </div>
            <div className="share">
              <p>Insta</p>
              <p>Facebook</p>
              <p>Tiktok</p>
            </div>
          </section>
        </article>
      </section>
    </StyledHome>
  )
};

export default Home;