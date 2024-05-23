import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoins'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  width: 20rem;
  
  background-color: ${({theme}) => theme.COLORS.DARK300};
  padding: 2rem 2rem;
  border: none;
  border-radius: 5px;

  > a {
    position: absolute;
    right: 1rem;
    top: 1rem;
    font-size: 1.5rem;
    color: ${({theme}) => theme.COLORS.LIGHT300};
  }

  img {
    width: 11rem;
    height: 11rem;
  }

  .div-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .div-texts {
    display: flex;
    text-align: center;
    flex-direction: column;
    gap: 1rem;

    h3 {
      font-family: "Poppins", sans-serif;
      font-weight: bold;
      color: ${({theme}) => theme.COLORS.LIGHT300};
    }

    p {
      color: ${({theme}) => theme.COLORS.LIGHT400};

      @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: none;
      }
    }

    label {
      color: ${({theme}) => theme.COLORS.CAKE200};
      
      font-weight: 400;
      font-size: 2rem;
    }
  }

  .div-finish {
    display: flex;
    align-items: center;
    gap: 1rem;

    font-weight: 500;

    svg {
      margin-top: 4px;
    }

    a {
      font-size: 1.3rem;
      color: ${({theme}) => theme.COLORS.LIGHT100};
    }

    button {
      padding: 0.875rem 2rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 18rem;
    height: 28rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    height: 32rem;
  }
`