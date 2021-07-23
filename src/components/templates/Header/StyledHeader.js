import styled from 'styled-components';

const StyledHeader = styled.section`
  align-items: center;
  background-color: #6E0A70;
  border-bottom: 1px solid #fff;
  display: grid;
  grid-template-columns: 25% 30%;
  justify-content: space-between;
  height: 10vh;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;

  .classic-nav {
    display: none;
    
    ul {
      display: grid;
    }
  }

  .mobile-nav {
    display: block;
    justify-self: end;
    margin-right: 5px;

    button {
      background-color: #6E0A70;
      border: 1px solid #64EB15;
      border-radius: 5px;
      color: #64EB15;
      display: block;
      height: 40px;
      width: 40px;
      svg {
        pointer-events: none;
        font-size: 24px;
      }
    }
    ul {
      position: absolute;
      top: 75px;
      right: 0px;
      background-color: #6E0A70;
      padding: 20px;

      li {
        margin-top: 5px;
        margin-bottom: 5px;
        border-bottom: 1px solid #64EB15;
        text-align: right;
        padding: 5px;
      }
    }
  }


  
  img{
    display: block;
    max-height: 10vh;
  }
  
  nav {
    ul{
      grid-template-columns: repeat(3, 1fr);

      li{
        color: #64EB15;
      }
    }
  }

  @media screen and (min-width: 576px) {

    grid-template-columns: 230px 300px;

    .classic-nav {
      display: block;
    }

    .mobile-nav {
      display: none;
    }
  }
`

export default StyledHeader;