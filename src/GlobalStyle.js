const { createGlobalStyle } = require("styled-components");

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: sans-serif;
    color: #252525;
    background-color: #252525;
  }

  button {
    font: inherit;
    cursor: pointer;
    background-color: #3c0080;
    border: 1px solid #3c0080;
    color: white;
    padding: 0.5rem 1.5rem;
    border-radius: 6px;
  }

  button:hover,
  button:active {
    background-color: #5b14ac;
    border-color: #5b14ac;
  }
`;

export default GlobalStyle;