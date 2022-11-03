import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import {Container} from "./styles.js"
import { api } from "../../services/api.js"

import { Header } from "../../components/Header"

import { Footer } from "../../components/Footer"
import { Input } from "../../components/Input"

import { Button } from "../../components/Button"
import { ButtonText} from "../../components/ButtonText"

import {IoIosArrowBack} from "react-icons/io"
import { useAuth } from "../../hooks/auth.jsx"


export function EditPlates(){

  const params = useParams();

  const navigate  = useNavigate()
  const {updateFoodImg} = useAuth()

  const [FoodImg,setFoodImg] = useState(null);
  const [food_name,setFood_name] = useState();
  const [ingredients,setIngredients] = useState();
  const [ingredientsList,setIngredientsList] = useState([])
  const [price,setPrice] = useState();
  const [description,setDescription] = useState();
  const [category,setCategory] = useState();

  const [checkedState, setCheckedState] = useState([])

  const [isSelected,setIsSelected] = useState(false)

  const [isCreating,setIsCreating] = useState(false)
  
  async function handleUpdate(){
   

    if(params.id == 0){
      const response = await api.post('/admindish',{
        food_name,
        category,
        ingredients,
        price,
        description
      })
    
      const food = response.data
      updateFoodImg({food,food_img_file:FoodImg})
      alert('Prato criado!')
      navigate('/')
    }
    else{

      const response = await api.put(`/admindish/${params.id}`,{
        food_name,
        category,
        ingredients,
        price,
        description
      })
      const food = response.data
      updateFoodImg({food,food_img_file:FoodImg})
      alert('Prato atualizado!')
      navigate('/')
    }
  }

  async function handleChangeFoodImg(event){
    const file = event.target.files[0];
    setFoodImg(file);
  }
  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState)
    let array = []
    updatedCheckedState.map(
      ( currentState, index) => {
        if (currentState === true) {

          array.push(ingredientsList[index].ingredient);
        }
        
      }
    );

    setIngredients(array.join(","))
  }
  async function handleDelete(){
    const confirm = window.confirm("Deseja realmente deletar este prato")
    if ( confirm){
      await api.delete(`admindish/${params.id}`)
      navigate("/")
    }
  }
  useEffect(()=>{
    if(params.id == 0){
      setIsCreating(true)
    }
    async function fetchIngredients(){
      const response = await api.get('/ingredients')
      const ingredientsData = response.data
      setIngredientsList(ingredientsData)
      //this array keeps track of the checked inputs
      const checkedArray = new Array(ingredientsData.length).fill(false)

      setCheckedState(checkedArray);
    }
    fetchIngredients()
 
  },[])
  return(
    <Container>
      <Header/>
      <form>
        <ButtonText title="Voltar" icon={IoIosArrowBack}/>
        <h1 id="main_title">{isCreating ?"Criador de pratos":"Editor de pratos"}</h1>
        <div className="line_1">
          <div id="plate_image_div">
            <h1>Imagem do prato</h1>
            <label htmlFor="plate_image">Selecione imagem</label>
            <Input placeholder="selecione uma imagem" 
            type="file" 
            id="plate_image"
            onChange={handleChangeFoodImg}
            />
          </div>
          <Input placeholder="Ex:salada ceasar" title="Nome" id="name"
          onChange={e => setFood_name(e.target.value)}/>

        </div>
        <div className="line_2">
          <div className="multiselect">
            <div className="selectBox" 
            onClick={() => setIsSelected(!isSelected)}>
              <select>
                <option> Selecione os ingredientes</option>
              </select>
              <div className="overselect"></div>
            </div>

            <div style={isSelected?{  display:'none'  }:{display:'block'}} className="checkboxes">
            {ingredientsList.map((ingredient,index) =>{
              return(
              <label key={index} 
              htmlFor={index}
              ><input type="checkbox" 
              id={index} 
              value={ingredient.ingredient}
              name={ingredient.ingredient}
              checked={checkedState[index]}
              onChange={() => handleOnChange(index)}/>
                {ingredient.ingredient}</label>)

            })}
            </div>
          </div>
          <Input placeholder="R$ 00,00" title="Preço"
          onChange={e => setPrice(e.target.value)}/>

        </div>

        <h1>Descrição</h1>
        <textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
        onChange={e => setDescription(e.target.value)}/>
        <select name="category" id="category"
        onChange={e => setCategory(e.target.value)}
        >
          <option >Selecione uma categoria</option>
          <option value="dessert">Sobremesa</option>
          <option value="main">Prato Principal</option>
          <option value="drink">Bebidas</option>
        </select>
        <div className="buttons">
        {!isCreating && <Button title="deletar" onClick={handleDelete}/>}
        <Button 
        title={isCreating ?"Adicionar prato":"Editar prato"} 
        id="add_plate_button" 
        onClick={handleUpdate}
        />
        </div>

      </form>
      <Footer/>
    </Container>
  )
}