import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.button`
  font-family: "Poppins", sans-serif;
  font-size: 1.1rem;

  background-color: ${({theme, exclude}) => exclude ? theme.COLORS.DARK800 : theme.COLORS.TOMATO100};
  color: ${({theme}) => theme.COLORS.LIGHT100};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  border: none;
  border-radius: 5px;

  padding: 0.875rem 6rem;
`