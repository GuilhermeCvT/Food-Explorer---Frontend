import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.DARK900};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  border-radius: 8px;

  > input {
    width: 100%;
    
    color: ${({theme}) => theme.COLORS.LIGHT100};

    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 1.1rem;

    padding: 1rem 0.875rem;
    border: none;

    background: none;
  }

  > svg {
    height: 1.5rem;
    width: 1.5rem;
    color: ${({theme}) => theme.COLORS.LIGHT400};
    margin-left: 1rem;
  }

  > svg + input {
    width: 50%;
  }

  &::placeholder {
    color: ${({theme}) => theme.COLORS.LIGHT500};
  }
`