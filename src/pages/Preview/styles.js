import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoins'

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  grid-template-areas: 
  'header'
  'content'
  'footer';

  .content {
    margin: 8rem 0 5rem;
    grid-area: content;

    > a {
      display: flex;
      align-items: center;
      width: 6rem;

      font-family: "Poppins", sans-serif;
      font-weight: bold;
      font-size: 1.5rem;

      color: ${({theme}) => theme.COLORS.LIGHT300};
    }

    button {
      padding: 0.8rem 2rem;
    }
  }

  .plate {
    margin-top: 5rem;

    display: flex;
    align-items: center;
    gap: 3rem;

    img {
      width: 20rem;
      height: 20rem;
    }
  }

  .plate-texts {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    font-family: "Poppins", sans-serif;
    color: ${({theme}) => theme.COLORS.LIGHT300};

    h2 {
      font-weight: 400;
      font-size: 3rem;
    }

    p {
      font-size: 1.2rem;
      width: 43rem;
    }
  }

  .ingredients {
    display: flex;
    gap: 1rem;
  }

  .finalization {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    .content {
      margin: 2rem 0rem 8rem;
    }

    .plate {
      flex-direction: column;
      text-align: center;
    }

    .finalization {
      justify-content: center;
      font-size: 1.3rem;
      margin-top: 1rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    .content {
      margin: 2rem 3rem 5rem;
    }

    .content a {
      font-weight: 400;
      font-size: 1.3rem;
    }

    .plate {
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center; 

      img {
        width: 15rem;
        height: 15rem;
      }
    }

    .plate-texts {
      h2 {
        font-weight: 400;
        font-size: 2.2rem;
      }

      p {
        font-size: 1.1rem;
        width: 30rem;
      }
    }

    .ingredients {
      padding: 0 1rem;
      display: grid;
      grid-template-columns: auto auto auto;
      align-items: center;
    }
  }
`