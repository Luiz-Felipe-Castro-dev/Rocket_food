import {Container} from "./styles.js"

import { Header} from "../../components/Header"
import { FoodCard } from "../../components/FoodCard"
import { Footer } from "../../components/Footer"

import {Link, useNavigate} from 'react-router-dom'

import { useEffect,useState } from "react"

import { api } from '../../services/api.js';

import Carousel from 'react-elastic-carousel'

export function Home(){

  const navigate = useNavigate();
  const [search,setSearch] = useState("");
  const [foods,setFoods] = useState([]);
  const [isIngredient,setIsIngredient] = useState(false)
  const [isMobile,setIsMobile] = useState(false)


  function handleDetails(id){
    navigate(`/fooddetails/${id}`)
  }
  useEffect(() => {

    async function fetchFoods(){
      setIsMobile(window.innerWidth<= 768)
      if(isIngredient){
        const response = await api.get(`/foods?ingredient=${search}`);
        setFoods(response.data)
      }
      else{
        const response = await api.get(`/foods?food=${search}`);
        setFoods(response.data)
      }
    }
    fetchFoods()
  },[search])
  return(
    <Container>
      <Header setSearch={setSearch} 
      search={search} 
      isIngredient={isIngredient}
      setIsIngredient={setIsIngredient}/>
      <main>
        <div className="head_food">
          <img src="src/assets/food.png" alt="Imagem de comida voando" id="header_img"/>
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
        </div>
        <h1>Pratos principais</h1>
        <Carousel itemsToScroll={1} itemsToShow={isMobile? 1:3} id="car">
          {foods.filter(food => food.category == "main").map(food => (
            <FoodCard
            key={food.id}
            data={food}
            onClick={() => handleDetails(food.id)}
            />
          ))
          }
        </Carousel>
        <h1>Sobremesas</h1>
        <Carousel itemsToScroll={1} itemsToShow={isMobile? 1:3}>
          {foods.filter(food => food.category == "dessert").map(food => (
            <FoodCard
            key={food.id}
            data={food}
            onClick={() => handleDetails(food.id)}
            />
          ))
          }
        </Carousel>
        <h1>Bebidas</h1>          
        <Carousel itemsToScroll={1} itemsToShow={isMobile? 1:3}>
        {foods.filter(food => food.category == "drink").map(food => (
            <FoodCard
            key={food.id}
            data={food}
            onClick={() => handleDetails(food.id)}
            />
          ))
          }
        </Carousel>
      </main>
      <Footer/>
    </Container>
  )
}