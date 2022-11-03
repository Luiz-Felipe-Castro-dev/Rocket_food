import {Container,Form} from "./styles"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

import { Link } from "react-router-dom"
import { useState } from "react";

import { useAuth } from "../../hooks/auth";

export function SignIn(){
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const {signIn} = useAuth();

  function handleSignIn(){
    signIn({email,password})
  }

  return (
    <Container>
      <div id="logo">
        <svg width="44" height="48" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.0318 0.216515L43.4349 12.0919V35.8426L22.0318 47.7179L0.628698 35.8426V12.0919L22.0318 0.216515Z" fill="#065E7C"/></svg>

        <h1>Food Explorer</h1>
      </div>
      <Form>
        <h1>Faça login</h1>

        <Input 
        placeholder="Exemplo: exemplo@exemplo.com.br" 
        title="Email"
        onChange={e => setEmail(e.target.value)}/>
        <Input 
        placeholder="No mínimo 5 caracteres" 
        title="Senha"
        type='password'
        onChange={e => setPassword(e.target.value)}
        />

        <Button title="Entrar" id="button" onClick={handleSignIn}/>
        <Link to='/register'>
        <ButtonText title="Criar uma conta" id="buttonText"/></Link>

      </Form>
    </Container>
  )
}