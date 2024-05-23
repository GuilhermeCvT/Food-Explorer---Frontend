import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoins'

export const Container = styled.footer`
  width: 100%;
  padding: 1.5rem 21rem;
  
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-area: footer;

  background-color: ${({theme}) => theme.COLORS.DARK600};

  .logo {
    display: flex;
    align-items: center;
    gap: .5rem;
  }

  span {
    font-weight: bold;
    color: ${({theme}) => theme.COLORS.LIGHT700};
  }

  p {
    color: ${({theme}) => theme.COLORS.LIGHT200};
    font-size: .9rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 2rem 5.5rem 2rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    padding: 2rem 1rem;
  }
`