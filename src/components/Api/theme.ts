import { createGlobalStyle } from "styled-components";

export const darkTheme ={
        bodyPrimary: '#121212',
        bodySecondary: '#6a6a6a',
        colorBorder:'#fff',
        colorText: '#CACACA',
        headingColor: '#a4e8ff'
};

export const lightTheme = { 
        colorBorder:'#fff',
        bodyPrimary: '#fff',
        bodySecondary: '#ebebff',
        colorText: '#000',
        headingColor: '#6060ff'
}

export const GlobalStyles = createGlobalStyle`
 body {
  background: ${props => props.theme.bodyPrimary};
  color: ${props => props.theme.textColor};
  transition: .3s ease;
 }
 h2{
   color: ${props => props.theme.headingColor};
 }
   p{
   color: ${props => props.theme.colorText};}`;
