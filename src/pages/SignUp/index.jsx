import {Container,Form} from "./styles"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

import { useState } from "react"
import { Link } from "react-router-dom"

import { api } from "../../services/api"

export function SignUp(){
  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()

  function handleSignUp(){
    
    
    if(!name || !email || !password){
      return alert("Preencha todos os campos")
    }

    api.post(`/user`,{name,email,password})
    .then(() =>{
      alert("Usuário cadastrado com sucesso")
      navigate("/");
    })
  }
  
  return (
    <Container>
      <div id="logo">
        <svg width="44" height="48" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.0318 0.216515L43.4349 12.0919V35.8426L22.0318 47.7179L0.628698 35.8426V12.0919L22.0318 0.216515Z" fill="#065E7C"/></svg>

        <h1>Food Explorer</h1>
      </div>
      <Form>
        <h1>Crie sua conta</h1>
        
        <Input placeholder="Exemplo: Maria da Silva" 
        title="Seu nome"
        onChange={e => setName(e.target.value)}/>
        <Input placeholder="Exemplo: exemplo@exemplo.com.br" 
        title="Email"
        onChange={e => setEmail(e.target.value)}/>
        <Input placeholder="No mínimo 5 caracteres" 
        title="Senha"
        type="password"
        onChange={e => setPassword(e.target.value)}/>

        <Button title="Criar conta" id="button" onClick={handleSignUp}/>
        <Link to='/'><ButtonText title="Já tenho uma conta" id="buttonText"/></Link>
      </Form>
    </Container>
  )
}