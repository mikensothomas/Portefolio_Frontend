import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
      --color-primary-500: #37E359;
      --color-primary-600: #2BC348;
      --color-primary-700: #228a36;

      --color-gray-950: #0B1017;
      --color-gray-900: #0E141D;
      --color-gray-800: #141F2B;
      --color-gray-700: #1A2B3E;
      --color-gray-400: #94A3B8;
      --color-gray-50: #FFFFFF;

      --color-red-500: #FF5873;
      --color-green-500: #37E359;
      --color-yellow-500: #F9CA24;
  }

  * {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: none;
  }

  html, body {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: var(--color-gray-950);
    color: var(--color-gray-50);
  }

  #root {
    height: 100%;
  }
`;

export default GlobalStyle;