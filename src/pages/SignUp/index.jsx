import { Button } from "../../components/Button";
import { Input } from '../../components/Input'
import { Label } from "../../components/Label";
import { Container, Form, Logo } from "./styles";
import logo from '../../assets/Polygon 1.png'
import { api } from '../../services/api'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SignUp() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  function handleSignUp() {
    if(!name || !email || !password)
      return alert('Preencha todos os campos')

    api.post('/users', {name, email, password, position: 'Usuario'})
      .then(() => {
        alert('Usuário cadastrado!')
        navigate('/')
      })
      .catch(error => {
        if(error.response)
          alert(error.response.data.message)
        else
          alert('Não foi possível cadastrar')
      }
    )
  }

  return (
    <Container>
      <Logo>
        <img src={logo} alt="" />
        <span>food explorer</span>
      </Logo>
      <Form>
        <h1>Crie sua conta</h1>

        <Label htmlFor="name" title='Seu nome' />
        <Input placeholder='Exemplo: Maria da Silva' type='text' id='name' onChange={e => setName(e.target.value)}/>

        <Label htmlFor="email" title='Email'/>
        <Input placeholder='Exemplo: exemplo@exemplo.com.br' type='email' id='email' onChange={e => setEmail(e.target.value)}/>

        <Label htmlFor="password" title='Senha'/>
        <Input placeholder='No mínimo 6 caracteres' type='password' id='password' onChange={e => setPassword(e.target.value)}/>

        <Button title='Criar conta' onClick={handleSignUp}/>

        <a href="/">Já tenho uma conta</a>
      </Form>
    </Container>
  )
}