import { Container } from "./styles";
import poligon2 from '../../assets/Polygon 2.png'

export function Footer() {
  return (
    <Container>
      <div className="logo">
        <img src={poligon2} alt="" />
        <span>food explorer</span>
      </div>
      
      <div className="copyright">
        <p>© 2023 - Todos os direitos reservados.</p>
      </div>
    </Container>
  )
}