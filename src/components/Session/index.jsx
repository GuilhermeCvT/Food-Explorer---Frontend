import { Container, CarouselSession } from "./style";
import { Item } from '../Item'

export function Session({ title, data, ...rest}) {
  const responsive = {
    desktop: {
      breakpoint: { max: 5000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  return (
    <Container {...rest} >
      <h2>{title}</h2>

      <CarouselSession 
        responsive={responsive}
        arrows={false}
        containerClass="carousel-container">
        {
          data.map(item => <Item item={item} key={item.index}/>)
        }
      </CarouselSession>
    </Container>
  )
}