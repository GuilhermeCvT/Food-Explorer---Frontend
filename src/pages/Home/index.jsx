import { Header } from "../../components/Header";
import { Container } from "./styles";
import { Session } from "../../components/Session";
import { Footer } from "../../components/Footer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from '../../services/api'

export function Home() {
  const [plates, setPlates] = useState([])
  const [meals, setMeals] = useState([])
  const [desserts, setDesserts] = useState([])
  const [drinks, setDrinks] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    async function fetchPlates() {
      const response = await api.get(`/plates?name=${search}`)
      setPlates(response.data.platesWithIngredients)
    }

    fetchPlates()
  }, [search])

  return (
    <Container>
      <Header onChange={e => setSearch(e.target.value)}/>

      <div id="banner">
        <div className="div-image"></div>
        <div id="texts">
          <h2>Sabores inigualáveis</h2>
          <span>Sinta o cuidado do preparo com igredientes selecionados</span>
        </div>
      </div>

      <Session title={'Refeições'} data={plates.filter(plate => plate.category == 'refeicao')}/>
      <Session title={'Sobremesas'} data={plates.filter(plate => plate.category == 'sobremesa')}/>
      <Session title={'Bebidas'} data={plates.filter(plate => plate.category == 'bebida')}/>

      <Footer />
    </Container>
  )
}