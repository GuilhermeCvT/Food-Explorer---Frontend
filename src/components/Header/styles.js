import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoins'

export const Container = styled.div`
  background-color: ${({theme}) => theme.COLORS.DARK600};

  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  padding: 1rem 0rem;

  svg {
    font-size: 2rem;
    color: ${({theme}) => theme.COLORS.LIGHT100};
  }
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  gap: 1rem;

  font-family: "Roboto", sans-serif;
  font-weight: bold;

  font-size: 1.5rem;

  > span {
    color: ${({theme}) => theme.COLORS.LIGHT100};
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    font-size: 1.5rem;

    img {
      width: 2rem;
      height: 2.2rem;
    }
  }
`

export const DesktopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  grid-area: header;
  padding: 1rem 18rem;

  > button {
    padding: 0.875rem 3rem;
    display: block;
    width: 17rem;

    > svg {
      margin-bottom: -3px;
      margin-right: 8px;
    }
  }

  > a {
    color: ${({theme}) => theme.COLORS.LIGHT100};
    font-size: 2rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: none;
  }
`

export const MobileHeader = styled.button`
  background: none;
  border: none;
  display: none;

  > button {
    background: none;
    padding: 0;
    height: 2rem;
    width: 2rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: flex;
    align-items: center;
    gap: 13rem;
    padding: 0 5rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    display: flex;
    align-items: center;
    gap: 5rem;
    padding: 0 4rem;
  }
`

export const Sidebar = styled.div`
  height: 90vh;
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.DARK400};
  
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  .button-menu {
    padding: 5rem 2rem 2rem;
    background-color: ${({theme}) => theme.COLORS.DARK700};
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    font-size: 1.5rem;
    
    background: none;
    border: none;

    color: ${({theme}) => theme.COLORS.LIGHT100};
  }

  .body-menu {
    padding: 2rem 2rem;

    .input-div {
      justify-content: start;
      margin-bottom: 3rem;
    }

    .input-div input {
      width: 100%;
    }

    > a {
      color: ${({theme}) => theme.COLORS.LIGHT100};
      font-family: "Poppins", sans-serif;
      font-weight: 300;
    }

    .line-div {
      border: none;
      border-bottom: 1px solid ${({theme}) => theme.COLORS.LIGHT100};
      margin-top: 5px;
      margin-bottom: 1rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    &[data-menu-is-open='true'] {
      display: block;
    }
  }
`