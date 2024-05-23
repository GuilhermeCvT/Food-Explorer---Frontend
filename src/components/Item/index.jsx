import { Container } from "./style";
import { Button } from '../Button';
import { FiMinus, FiPlus, FiHeart } from 'react-icons/fi'
import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'
import { useNavigate } from "react-router-dom";

export function Item({ item, ...rest }) {
  const { user } = useAuth()
  const navigate = useNavigate()

  return (
    <Container {...rest}>
      <a><FiHeart /></a>
      {
        <div className="div-content">
          <div className="div-image">
            <img src={`${api.defaults.baseURL}/files/${item.image}`} alt="" />
          </div>
          <div className="div-texts">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <label>R$ {item.price}</label>
          </div>
          <div className="div-finish">
            {
              (user.position == 'Admin' ?
                <>
                  <Button title='Ver prato' onClick={() => navigate(`/details/${item.id}`)}/>
                </>
                :
                <>
                  <a><FiMinus /></a>
                  <span>01</span>
                  <a><FiPlus /></a>
                  <Button title='Incluir'/>
                </>
              )
            }
          </div>
        </div>
      }
    </Container>
  )
}