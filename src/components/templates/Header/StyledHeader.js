import styled from 'styled-components';

const StyledHeader = styled.section`
  background-color: #6E0A70;
  display: grid;
  grid-template-columns: 230px 300px;
  justify-content: space-between;
  height: 100px;
  width: 100%;
  align-items: center;
  
  img{
    display: block;
    max-height: 100px;
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