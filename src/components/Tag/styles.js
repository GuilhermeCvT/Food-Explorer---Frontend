import styled from "styled-components";

export const Container = styled.label`
  padding: 0.4rem 0.75rem;
  
  background-color: ${({theme}) => theme.COLORS.DARK1000};
  color: ${({theme}) => theme.COLORS.LIGHT100};

  font-family: "Poppins", sans-serif;
  font-weight: 300;

  border-radius: 5px;

  text-wrap: nowrap;
`