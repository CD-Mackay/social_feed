import styled from 'styled-components';

const StyledHeader = styled.section`
  align-items: center;
  background-color: #6E0A70;
  border-bottom: 1px solid #fff;
  display: grid;
  grid-template-columns: 230px 300px;
  justify-content: space-between;
  height: 10vh;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
  
  img{
    display: block;
    max-height: 10vh;
  }
  
  nav {
    ul{
      display: grid;
      grid-template-columns: repeat(3, 1fr);

      li{
        color: #64EB15;
      }
    }
  }
`

export default StyledHeader;