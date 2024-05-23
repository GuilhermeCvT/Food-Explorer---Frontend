import { Container } from "./style";

export function Label({title, htmlFor, ...rest}) {
  return (
    <Container htmlFor={htmlFor} {...rest}>
      {title}
    </Container>
  )
}