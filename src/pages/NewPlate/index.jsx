import { Container, Content } from "./styles";
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Label } from '../../components/Label'
import { Input } from '../../components/Input'
import { Button } from "../../components/Button";
import { Ingredient } from "../../components/Ingredient";
import { FiArrowLeft, FiUpload } from 'react-icons/fi'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from '../../services/api'

export function NewPlate() {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [imageFile, setImageFile] = useState(null)
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')
  const navigate = useNavigate()

  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient])
    setNewIngredient('')
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
  }

  async function handleNewPlate() {
    if(!name)
      return alert('Adicione um nome ao prato')

    if (category === 'escolha')
      return alert('Escolha uma categoria')

    if (!imageFile)
      return alert('Selecione uma iamgem')

    try{
      if(imageFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append('image', imageFile)
        
        const {data} = await api.post('/plates', {name, category, description, price, ingredients})
        await api.patch(`/plates/image/${data}`, fileUploadForm)

        alert('Prato criado com sucesso')
        navigate(-1)
      }
    } catch(error) {
      if(error.message)
        alert(error.response.data.message)
      else
        alert('Não foi possível criar o prato')
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

        <h2>Adicionar prato</h2>

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
            <Input type='text' placeholder='Ex.: Salada Ceasar' onChange={e => setName(e.target.value)}/>
          </div>

          <div className="category-div">
            <Label title='Categoria'/>
            <select name="categories" id="categories" onChange={e => setCategory(e.target.value)}>
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
              {
                ingredients.map((ingredient, index) => (
                  <Ingredient 
                    key={String(index)}
                    title={ingredient}
                    disabled={true}
                    onClick={() => handleRemoveIngredient(ingredient)}
                  />
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
            <Input type='text' placeholder='R$ 00,00' onChange={e => setPrice(e.target.value)}/>
          </div>
        </div>

        <div className="textarea">
          <Label title='Descrição'/>
          <textarea 
            name="description" 
            id="descriptionPlate" 
            placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
            onChange={e => setDescription(e.target.value)}
          >
          </textarea>
        </div>

        <div className="buttons-div">
          <Button title='Salvar alterações' onClick={handleNewPlate}/>
        </div>
      </Content>

      <Footer />
    </Container>
  )
}