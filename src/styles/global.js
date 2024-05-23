import { createGlobalStyle } from "styled-components";
import { DEVICE_BREAKPOINTS } from '../styles/deviceBreakpoins'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 16px;
    padding: 0;
    margin: 0;

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      font-size: 14px;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      font-size: 12px;
    }
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.DARK400};
    color: ${({ theme }) => theme.COLORS.LIGHT100};

    position: relative;

    -webkit-font-smoothing: antialiased;

    padding: 2rem 18rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      padding: 6.25rem 8rem 0;
    }
    
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      padding: 6.25rem 5.5rem 0;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      padding: 6.25rem 0 0;
    }
  }

  body, input, button, textarea {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-button {
    visibility: hidden;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({theme}) => theme.COLORS.TOMATO100};
    border-radius: 20px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({theme}) => theme.COLORS.TOMATO200};
  }
`