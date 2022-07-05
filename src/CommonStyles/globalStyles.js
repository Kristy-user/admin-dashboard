import { createGlobalStyle } from 'styled-components';
import cursor from '../assets/Group.svg';
import medium from '../assets/Fonts/Poppins-Medium.ttf';
import regular from '../assets/Fonts/Poppins-Regular.ttf';
import semiBold from '../assets/Fonts/Poppins-SemiBold.ttf';
export const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'Poppins';
  src: url(${medium});
font-weight: 500;
}
@font-face {
  font-family: 'Poppins';
  src: url(${regular});
  font-weight: 400;
}
  @font-face {
  font-family: 'Poppins';
  src: url(${semiBold});
  font-weight: 600;
}

 *{
  font-family: 'Poppins', sans-serif;
  padding: 0;
  margin: auto;
  list-style-type: none;
  box-sizing: border-box;
  text-decoration: none;
  cursor: url(${cursor}) 13 15, auto;
  &::before, &::after {
    box-sizing: border-box;
  }
   }
a {
    outline: none;
    text-decoration: none;
    background-color: transparent;
    color: inherit;
  }

  a:active,
  a:hover {
    outline: 0;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    color: inherit;
    font: inherit;
    margin: 0;
  }

  button,
  input {
    border: none;
    overflow: visible;
    background-color: inherit;
  }
  
  input {
    line-height: normal;
  }
  `;
