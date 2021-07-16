import styled from 'styled-components';

const StyledHeader = styled.section`
  display: grid;
  grid-template-columns: 230px 300px;
  justify-content: space-between;
  height: 10vh;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid #fff;
  
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