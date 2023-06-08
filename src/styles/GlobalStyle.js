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
    width: 100%;
    gap: 16px;
  }
`;

export default GlobalStyle;