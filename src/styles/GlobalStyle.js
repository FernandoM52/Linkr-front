import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }

  .ReactModal__Overlay{
    z-index: 4;
  }
`;

export default GlobalStyle;