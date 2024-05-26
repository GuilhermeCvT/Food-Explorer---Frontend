import { Container, Content } from "./styles";
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Label } from '../../components/Label'
import { Input } from '../../components/Input'
import { Button } from "../../components/Button";
import { Ingredient } from "../../components/Ingredient";
import { FiArrowLeft, FiUpload } from 'react-icons/fi'
import { useNavigate, useParams } from "react-router-dom";
import { api } from '../../services/api'
import { useState, useEffect } from "react";

export function EditPlate() {
  const navigate = useNavigate()
  const params = useParams()
  const [name, setName] = useState('')
  const [imageFile, setImageFile] = useState(null)
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')

  useEffect(() => {
    async function fetchPlate() {
      const response = await api.get(`plates/${params.id}`)
      
      setIngredients([])
      response.data.ingredients.map(ingredient => setIngredients(prevState => [...prevState, ingredient.name]))
      setName(response.data.name)
      setCategory(response.data.category)
      setDescription(response.data.description)
      setPrice(response.data.price)
    }

    fetchPlate()
  }, [])

  async function handleRemove() {
    const confirm = window.confirm('Deseja excluir o prato?')

    if(confirm) {
      await api.delete(`/plates/${params.id}`)
      navigate('/')
    }
  }

  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient])
    setNewIngredient('')
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
  }

  async function handleEditPlate() {
    if(!name)
      return alert('Adicione um nome ao prato')

    if (category === 'escolha')
      return alert('Escolha uma categoria')

    try{
      const id = params.id
      await api.put(`/plates/${id}`, {name, category, description, price, ingredients})
      
      if (imageFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append('image', imageFile)
        
        await api.patch(`/plates/image/${id}`, fileUploadForm)
      }

      alert('Prato atualizado com sucesso')
      navigate('/')
    } catch(error) {
      alert(error.response.data.message)
    }
  }

  function handleChangeImage(event) {
    const file = event.target.files[0]
    setImageFile(file)
  }

  return (
    <Container>
      <Header />

      <Content>
        <a href="/"><FiArrowLeft />Voltar</a>

        <h2>Editar prato</h2>

        <div className="image-name-category">
          <div className="image-div">
            <Label title='Imagem do prato'/>
            <label htmlFor="uploadImage" className='uploadImage'>
              <FiUpload />
                Selecione uma imagem
              <input type="file" id="uploadImage" onChange={handleChangeImage}/>
            </label>
          </div>

          <div className="name-div">
            <Label title='Nome'/>
            <Input 
              type='text' 
              placeholder='Ex.: Salada Ceasar' 
              value={name} 
              onChange={e => setName(e.target.value)}/>
          </div>

          <div className="category-div">
            <Label title='Categoria'/>
            <select name="categories" id="categories" value={category} onChange={e => setCategory(e.target.value)}>
              <option value="escolha">Escolha uma categoria</option>
              <option value="refeicao">Refeição</option>
              <option value="sobremesa">Sobremesa</option>
              <option value="bebida">Bebida</option>
            </select>
          </div>
        </div>

        <div className="ingredients-price">
          <div className="ingredients-div">
            <Label title='Ingredients'/>
            <div className="ingredients">
              {ingredients.map((ingredient, index) => (
                  <Ingredient 
                    title={ingredient} 
                    key={index} 
                    disabled={true}
                    onClick={() => handleRemoveIngredient(ingredient)}/>
                ))
              }
              
              <Ingredient 
                onChange={e => setNewIngredient(e.target.value)}
                onClick={handleAddIngredient}
                title={newIngredient}
              />
            </div>
          </div>
          
          <div className="price-div">
            <Label title='Preço'/>
            <Input 
              type='text' 
              placeholder='R$ 00,00' 
              value={price} 
              onChange={e => setPrice(e.target.value)}/>
          </div>
        </div>

        <div className="textarea">
          <Label title='Descrição'/>
          <textarea name="description" id="descriptionPlate" 
            placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
            value={description}
            onChange={e => setDescription(e.target.value)}>
          </textarea>
        </div>

        <div className="buttons-div">
          <Button title='Excluir prato' exclude={true} onClick={() => handleRemove()}/>
          <Button title='Salvar alterações' onClick={handleEditPlate}/>
        </div>
      </Content>

      <Footer />
    </Container>
  )
}