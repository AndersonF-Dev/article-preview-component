import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif; /* Ou a fonte do desafio */
  }
  #root {
  max-width: 1280px;
  /* margin: 0 auto; */
  padding: 2rem;
  text-align: center;
  background-color: #2259acff;
}

body {
    background-color: #ffffffff;
    -webkit-font-smoothing: antialiased;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 

    min-width: 320px;
    min-height: 100vh;

     .attribution { font-size: 11px; text-align: center; }
    .attribution a { color: hsl(228, 45%, 44%); }
  }

`;