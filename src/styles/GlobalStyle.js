import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }

  .ReactModal__Overlay{
    z-index: 10;
  }

  .StyleInfiniteScroll{
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 41%;
    height: 25%;
    @media(max-width: 886px){
      height: 42;
    }
  }
`;

export default GlobalStyle;