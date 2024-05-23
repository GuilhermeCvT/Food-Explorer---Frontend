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
  const [image, setImage] = useState('')
  const [imageFile, setImageFile] = useState(null)
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [plate, setPlate] = useState(null)
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')

  useEffect(() => {
    async function fetchPlate() {
      setIngredients([])
      setPlate(null)
      const response = await api.get(`plates/${params.id}`)
      setPlate(response.data)

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
      navigate(-1)
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
      await api.put(`/plates/${params.id}`, {name, category, description, price, ingredients})
      
      if (imageFile !== null) {
        const fileUploadForm = new FormData()
        fileUploadForm.append('image', imageFile)
        
        await api.patch(`/plates/image/${params.id}`, fileUploadForm)
      }

      alert('Prato atualizado com sucesso')
      navigate('/')
    } catch(error) {
      alert('Não foi possível editar o prato')
    }
  }

  function handleChangeImage(event) {
    const file = event.target.files[0]
    setImageFile(file)

    const imagePreview = URL.createObjectURL(file)
    setImage(imagePreview)
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
              {ingredients.map(ingredient => (
                  <Ingredient 
                    title={ingredient} 
                    key={ingredient.index} 
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