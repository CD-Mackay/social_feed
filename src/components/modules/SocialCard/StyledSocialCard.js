import styled from 'styled-components';

const StyledSocialCard = styled.article`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 1px 2px 16px 0px #383838;
  padding: 10px;
  margin: 10px;
  -webkit-box-shadow: 1px 2px 16px 0px #383838; 

  .author-date {

    p {
      color: #a9a9a9;
      font-size: 16px;
      margin-bottom: 5px;
    }
  }

  .post-content, h3 {
    margin-bottom: 5px;
  }

  h3 {
    font-size: 24px;
  }

  p {
    font-size: 14px;
  }


  .img-wrapper {
    background-image: url(${props => props.socialBG});
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    margin-bottom: 10px;
    width: 100%;
    height: 200px;
  }

  .post-control {
    display: grid;
    grid-template-columns: 45% 45%;
    justify-content: space-between;
    margin-top: 10px;

    button {
      display: flex;
      flex-direction: row;

      span {
        margin-top: 3px;
        margin-left: 3px;
      }
    }

    .post-icon {
      font-size: 18px;
    }
    
    .vote, .share {
      display: grid;
      grid-template-columns: repeat(3, 1fr);

      .post-control-button {
        background-color: white;
        border: none;
      }

      .post-control-button:hover {
        color: blue;
      }
    }
  }


  @media screen and (min-width: 576px) {
    .post-control {
      grid-template-columns: 35% 35%;
    }
  }

  @media screen and (min-width: 768px) {

  }
`

export default StyledSocialCard