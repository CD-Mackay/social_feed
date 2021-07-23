import styled from 'styled-components';

const StyledHome = styled.section`
  background-color: #c4c4c4;
  height:80vh;

  .center-column{
    width: 95%;
    padding: 85px 10px 85px 10px;
    margin: 0 auto;
  }

  @media screen and (min-width: 576px) {
    .center-column {
      width: 75%;
    }
  }

  @media screen and (min-width: 768px) {
    .center-column {
      width: 55%;
    }
  }
`

export default StyledHome;