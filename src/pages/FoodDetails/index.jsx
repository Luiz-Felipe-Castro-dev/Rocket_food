import {Container} from "./styles.js";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText";

import { Ingredient } from "../../components/Ingredient";

import {AiOutlineArrowLeft} from 'react-icons/ai';

import { useParams,useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";

import { api } from "../../services/api.js";

import { useAuth } from "../../hooks/auth.jsx";

import { Link } from "react-router-dom";



export function FoodDetails(){
  const {user} = useAuth()

  const [data,setData] = useState(null);
  const [ingredients,setIngredients] = useState([]);
  const [ingredientsObject,setIngredientsObject] = useState([]);
  const [number,setNumber] = useState(0)

  const [IsAdminAuth,setAdminAuth] = useState(false)

  const params = useParams();


  const navigate = useNavigate();
  useEffect(() =>{
    async function fetchfood(){
      const response = await api.get(`foods/${params.id}`);

      setData(response.data);

      setIngredients(response.data.ingredients.split(","),response);
      console.log('ingredients', ingredients)

     
      // this line checks that the array isn't empty


        let counter = 0;
        let array = []
        for (let index of ingredients) {
          let object = {};
          object = await api.get(`ingredients/${index}`)
          array[counter] = object


          counter += 1        
        }
        setIngredientsObject(array)

        if(user){
          if(user.isAdmin == 1){
          setAdminAuth(true)   
          }
        }
      
      if(number < 3){
        setNumber(number + 1)
      }
    }

    fetchfood();
  }, [number])
  return (
    <Container>
      <Header/>
      <main>
        {IsAdminAuth && 
            <Link to={`/edit/${data.id}`}>
              <ButtonText title='Editar prato'/>
            </Link>}
        <img src={data && `${api.defaults.baseURL}/files/${data.food_img}`} alt="imagem de comida" />
        <h1>{data && data.food_name}</h1>
        <p>
          {data && data.description}
        </p>
        <p>{data && data.price}</p>
        <div id="ingredients">
          {ingredientsObject && ingredientsObject.map(ingredient => (          
              <Ingredient
              key={ingredient.data.id}
              title={ingredient.data.ingredient}
              // this line doesnt work because i haven't set up the back end
              img={data &&`${api.defaults.baseURL}/files/${ingredient.data.ingredient_img}`}
              />
            ))
          }

        </div>      
      </main>
      <Footer/>
    </Container>
        )
}