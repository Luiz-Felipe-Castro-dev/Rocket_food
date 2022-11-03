import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";

import {IoIosArrowBack} from "react-icons/io"
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import { Container } from "./styles";


export function Admin(){
  const navigate = useNavigate();
  function handleDetails(number){
    if(number==1){
      navigate(`/orders/${number}`)
    }
    else if(number == 0){
      navigate(`/edit/${number}`)
    }

  }
  return(
    <Container>
      <Header/>
      <main>

        <h1>Links das areas admins</h1>
        <p onClick={() => handleDetails(1)}>Todos os pedidos</p>
        <Link to='/ingredients'>
          <p>Ingredientes</p>
        </Link>
        <Link to={`/editingredients/${0}`}>
          <p>Criar novo ingrediente</p>
        </Link>
        <p onClick={()=> handleDetails(0)}>Criador de pratos</p>


      </main>
      <Footer/>
    </Container>
  )
}