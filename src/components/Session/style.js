import styled from "styled-components";
import Carousel from "react-multi-carousel";

export const Container = styled.div`
  margin-top: 4rem;

  #session-items {
    margin-top: 1rem;
    
    display: flex;
    gap: 1rem;
  }
`

export const CarouselSession = styled(Carousel)`
  overflow: hidden;

  ul {
    margin-top: 1rem;
    
    list-style: none;
    
    display: flex;
    gap: 1rem;
  }

  > svg {
    font-size: 3rem;
  }
`