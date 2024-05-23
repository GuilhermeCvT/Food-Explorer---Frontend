import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoins'

export const Container = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  align-items: center;
  
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    flex-direction: column;
    gap: 2.5rem;
  }
`

export const Logo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;

  font-size: 2rem;
  font-weight: bold;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

export const Form = styled.form`
  width: 100%;

  padding: 4rem;

  display: flex;
  justify-content: center;
  flex-direction: column;

  background-color: ${({theme}) => theme.COLORS.DARK700};

  border: none;
  border-radius: 16px;

  > h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;

    display: flex;
    justify-content: center;

    margin-bottom: 2rem;
  }

  label {
    align-items: start;
    margin-bottom: 5px;
    margin-top: 1.5rem;
  }

  button {
    margin-top: 2rem;
  }

  a {
    color: ${({theme}) => theme.COLORS.LIGHT100};
    font-family: "Poppins", sans-serif;
    font-size: 1.1rem;
    text-align: center;

    margin-top: 2rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    background: none;

    h1 {
      display: none;
    }
  }
`