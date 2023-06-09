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
    width: 100%;
  }
`;

export default GlobalStyle;