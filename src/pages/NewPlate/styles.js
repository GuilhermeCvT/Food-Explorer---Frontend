import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoins'

export const Container = styled.div`

`

export const Content = styled.div`
  margin: 8rem 0 12rem;
  grid-area: content;
  position: relative;

  a {
    display: flex;
    align-items: center;
    width: 6rem;

    font-family: "Poppins", sans-serif;
    font-weight: bold;
    font-size: 1.5rem;

    color: ${({theme}) => theme.COLORS.LIGHT300};
  }

  h2 {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 2rem;
    
    color: ${({theme}) => theme.COLORS.LIGHT300};

    margin-top: 2rem;
  }

  label {
    display: block;
    margin-bottom: 1rem;
    margin-top: 1.5rem;
  }

  input, select {
    background-color: ${({theme}) => theme.COLORS.DARK800};
    border-radius: 8px;
  }

  select {
    width: 100%;
    
    color: ${({theme}) => theme.COLORS.LIGHT600};

    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 1.1rem;

    padding: 1rem 0.875rem;
    border: none;
  }

  textarea {
    width: 100%;
    height: 8rem;

    color: ${({theme}) => theme.COLORS.LIGHT500};
    background-color: ${({theme}) => theme.COLORS.DARK800};

    border: none;
    border-radius: 8px;
    padding: 1rem;

    resize: vertical;
  }

  .uploadImage {
    padding: 0.9rem 0.875rem;
    margin: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    
    background-color: ${({theme}) => theme.COLORS.DARK800};

    font-family: "Poppins", sans-serif;
    
    border: none;
    border-radius: 8px;

    cursor: pointer;

    > svg {
      font-size: 1.5rem;
    }

    > input {
      display: none;
    }
  }

  .buttons-div {
    display: flex;
    gap: 2rem;
    
    position: absolute;
    bottom: -6rem;
    right: 0;

    > button {
      font-weight: 300;
      padding: 1rem 2rem;
    }
  }

  .ingredients {
    padding: 0.6rem 0.875rem;
    background-color: ${({theme}) => theme.COLORS.DARK800};
    border-radius: 8px;
    
    display: flex;
    gap: 1rem;
  }

  .image-name-category, .ingredients-price {
    display: flex;
    gap: 2rem;
  }

  .input-div, .name-div,
  .category-div, .ingredients-div {
    width: 100%;
  }

  .image-div {
    width: 60%;
  }

  .price-div {
    width: 20%;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    margin: 1rem 0 15rem;

    .image-name-category, .ingredients-price {
      flex-direction: column;
    }

    .image-div {
      width: 100%;
    }

    .price-div {
      width: 100%;
    }

    .image-name-category, .ingredients-price {
      gap: 0;
    }

    .uploadImage {
      justify-content: start;
    }

    .buttons-div {
      width: 100%;

      > button {
        width: 100%;
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    margin: 0rem 0 15rem;
    padding: 0 3rem;

    .buttons-div {
      width: 83%;
      right: 3rem;
    }
  }
`