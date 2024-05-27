import { Button } from "../../components/Button";
import { Input } from '../../components/Input'
import { Label } from "../../components/Label";
import { Container, Form, Logo } from "./styles";
import logo from '../../assets/Polygon 1.png'
import { useState } from "react";
import { useAuth } from '../../hooks/auth'
import { Link } from "react-router-dom";

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({email, password})
  }

  return (
    <Container>
      <Logo>
        <img src={logo} alt="" />
        <span>food explorer</span>
      </Logo>
      <Form>
        <h1>Faça login</h1>

        <Label htmlFor="email" title='Email'/>
        <Input placeholder='Exemplo: exemplo@exemplo.com.br' type='email' id='email' onChange={e => setEmail(e.target.value)}/>

        <Label htmlFor="password" title='Senha'/>
        <Input placeholder='No mínimo 6 caracteres' type='password' id='password' onChange={e => setPassword(e.target.value)}/>

        <Button title='Entrar' onClick={handleSignIn}/>

        <Link to="/register">Criar uma conta</Link>
      </Form>
    </Container>
  )
}