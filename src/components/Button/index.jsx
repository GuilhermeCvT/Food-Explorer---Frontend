import { Container } from "./styles";

export function Button({title, $icon: Icon, exclude = false, ...rest}) {
  return (
    <Container type="button" exclude={exclude} {...rest} $icon={Icon}>
      {Icon && <Icon size={20}/>}
      {title}
    </Container>
  )
}