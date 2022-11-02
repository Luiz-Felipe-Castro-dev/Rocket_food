import {Container} from "./styles.js"

import { Header } from "../../components/Header"

import { Footer } from "../../components/Footer"

import { useState,useEffect } from "react"

import { api } from '../../services/api.js';

import {  useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export function Ingredients(){
  const navigate = useNavigate()
  const params = useParams()
  const [ingredients,setIngredients] = useState([])
  function handleNavigate(ingredient_id){
    navigate(`/editingredients/${ingredient_id}`)

  }
  useEffect(() => {

    async function fetchFoods(){

        const response = await api.get(`/ingredients`);
        setIngredients(response.data)
      
    }
    fetchFoods()
  },[])
  return(
    <Container>
      <Header/>
      <main>
        <h1>Ingredientes</h1>
        <table>
          <thead>
            <tr>
              <th>Imagem</th>
              <th>Código</th>
              <th>Ingrediente</th>
              <th>Data e hora</th>
            </tr>
          </thead>
          <tbody>
            {ingredients.map(ingredient =>{return (

                <tr key={ingredient.id} 
                onClick={() => {handleNavigate(ingredient.id)}}
                >
                  <td><div><img src={`${api.defaults.baseURL}/files/${ingredient.ingredient_img}`} alt="" /></div></td>
                  <td>{ingredient.id}</td>
                  <td>{ingredient.ingredient}</td>
                  <td>{ingredient.created_at}</td>
                </tr>
              )} 
              )
            }
             {/* <tr>
                  <td><div><span ></span> oi</div></td>
                  <td>oi</td>
                  <td>oi</td>
                  <td>oi</td>
                </tr> */}
             
          </tbody>
        </table>
      </main>
      <Footer/>
    </Container>
  )
};