import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 10rem;
  position: relative;
  
  background-color: ${({theme, $isDisabled}) => $isDisabled ? theme.COLORS.LIGHT600 : 'none'};
  color: ${({theme, $isDisabled}) => $isDisabled ? theme.COLORS.LIGHT100 : theme.COLORS.LIGHT500};

  border-width: 1px;
  border-style: ${({$isDisabled}) => $isDisabled ? 'none' : 'dashed'};
  border-color: ${({theme}) => theme.COLORS.LIGHT600};
  border-radius: 8px;

  padding: 0.45rem 1rem;

  > svg {
    margin-bottom: -2px;
    cursor: pointer;
    
    position: absolute;
    right: 1rem;
  }
`

export const Input = styled.input`
  background: none !important;
  border: none;

  width: 6rem;

  color: ${({theme}) => theme.COLORS.LIGHT100};

  &placeholder {
    color: ${({theme}) => theme.COLORS.LIGHT500};
  }
`