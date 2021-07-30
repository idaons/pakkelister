import { createGlobalStyle } from "styled-components";
import { normalize } from "./normalize";

export default createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Exo:400,600&display=swap");

  body {
    color: white;
    background-color: #223;
    font-family: "Exo", sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  *:focus {
    outline: none;
    filter: drop-shadow(0 0 0.2rem yellow);
  }
  ${normalize};
`;
