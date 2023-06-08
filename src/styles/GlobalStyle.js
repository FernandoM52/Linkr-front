import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }

  .ReactModal__Overlay{
    z-index: 10;
  }

  .StyleInfiniteScroll{
    width: 64%;
    @media (max-width:  950px ){
    width: 100%;
  }
  }
`;

export default GlobalStyle;