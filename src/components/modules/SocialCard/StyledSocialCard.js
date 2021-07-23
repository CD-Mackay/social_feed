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
    grid-template-columns: 35% 35%;
    justify-content: space-between;

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
`

export default StyledSocialCard