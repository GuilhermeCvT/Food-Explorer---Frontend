import { Container } from "./styles";
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Tag } from '../../components/Tag'
import { Button } from "../../components/Button";
import { FiArrowLeft, FiMinus, FiPlus } from 'react-icons/fi'
import { useAuth } from '../../hooks/auth'
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from '../../services/api'

export function Preview() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const params = useParams()
  const [plate, setPlate] = useState(null)

  useEffect(() => {
    async function fetchPlate() {
      const response = await api.get(`/plates/${params.id}`)
      setPlate(response.data)
    }

    fetchPlate()
  }, [])

  return (
    <Container>
      <Header />

      <div className="content">
        <a href="/"><FiArrowLeft />Voltar</a>

        <div className="plate">
          <img src={plate && `${api.defaults.baseURL}/files/${plate.image}`} alt="" />

          <div className="plate-texts">
            <h2>{plate && plate.name}</h2>
            <p>{plate && plate.description}</p>

            <div className="ingredients">
              {plate &&
                plate.ingredients.map(ingredient => <Tag title={ingredient.name} key={ingredient.id}/>)
              }
            </div>

            <div className="finalization">
              {
                user.position == 'Admin' ?
                <>
                  <Button title='Editar prato' onClick={() => navigate(`/edit/${params.id}`)}/>
                </>
                :
                <>
                  <a><FiMinus /></a>
                  <span>01</span>
                  <a><FiPlus /></a>
                  <Button title='incluir - R$ 25,00'/>
                </>
              }
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </Container>
  )
}