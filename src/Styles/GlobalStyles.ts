import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 
    font-family: "Manrope", sans-serif;
  }
  #root {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: auto;
    padding: 0 3rem;
    text-align: center;
  
}

body {
    background-color: hsl(210, 46%, 95%);
    -webkit-font-smoothing: antialiased;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 

    min-width: 320px;
    min-height: 100vh;

    .attribution { 
      font-size: 11px; 
      text-align: center;
          
    }
    .attribution a {
      color: hsl(228, 45%, 44%); 
    }

  
  }

`;
