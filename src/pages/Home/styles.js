import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoins'
import candies from '../../assets/candies.svg'
import candies2 from '../../assets/candies2.svg'

export const Container = styled.div`
  padding: 0 3rem 6rem;

  > #banner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    border-radius: 5px;
    
    height: 16.875rem;
    padding: 5.625rem 6.25rem 5.625rem 0;
    margin-top: 12rem;

    background: linear-gradient(180deg, rgba(9,30,38,1) 0%, rgba(0,19,28,1) 100%);

    .div-image {
      position: absolute;
      width: 37rem;
      height: 25rem;
      bottom: 0;
      margin-left: -3.125rem;
      background-image: url(${candies});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    > #texts{
      display: flex;
      flex-direction: column;
      position: absolute;
      right: 6.25rem;
      gap: 0.4rem;
    }

    h2 {
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      font-size: 2.5rem;
      color: ${({theme}) => theme.COLORS.LIGHT300};
    }

    span {
      font-weight: 400;
      color: ${({theme}) => theme.COLORS.LIGHT300};
      font-size: 1rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      margin-top: 7rem;
      height: 12rem;

      .div-image {
        background-image: url(${candies2});
        width: 21rem;
        height: 16rem;
        margin-left: -2rem;
      }

      > #texts{
        right: 3rem;
      } 

      h2 {
        font-weight: 500;
        font-size: 1.7rem;
      }

      span {
        font-weight: 300;
        font-size: 1.1rem;
        width: 20rem;
      }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      margin-top: 6rem;
      height: 10rem;

      .div-image {
        background-image: url(${candies2});
        width: 17rem;
        height: 13rem;
        margin-left: -2rem;
      }

      > #texts{
        right: 2rem;
      } 

      h2 {
        font-weight: 500;
        font-size: 1.3rem;
      }

      span {
        font-weight: 300;
        font-size: 1rem;
        width: 15rem;
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 0 0 9rem 0;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    padding: 0 0 9rem 2rem;
  }

`