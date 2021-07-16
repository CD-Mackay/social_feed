import styled from 'styled-components';

const StyledHome = styled.section`
  background-color: #c4c4c4;
  height:80vh;

  .center-column{
    width: 55%;
    height: 80vh;
    margin: 0 auto;
  }

  .social-card {

    .post-control {
      display: grid;
      grid-template-columns: 40% 40%;
      justify-content: space-between;
      
      .vote, .share {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }
`

export default StyledHome;