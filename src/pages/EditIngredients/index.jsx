import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { api } from "../../services/api.js";
import { Container } from "./styles";
import { useAuth } from "../../hooks/auth";

export function EditIngredients(){
  const params = useParams()

  const {updateIngredientImg} = useAuth()

  const [data,setData] = useState([])
  const [text,setText] = useState(false)
  const [ingredientImg,setIngredientImg] = useState(null)
  const [ingredient,setIngredient] = useState()

  async function handleUpdate(){
    if(params.id == 0){
      const response = await api.post('/ingredients',{
        ingredient
      })
    
      const ingredient_data = response.data
      updateIngredientImg({ingredient_data,ingredient_img_file:ingredientImg})
      alert('Ingrediente criado!')
    }
    else{
      console.log('else')
      console.log(ingredient)
      const response = await api.put(`/ingredients/${params.id}`,{
        ingredient
      })
      const ingredient_data = response.data
      updateIngredientImg({ingredient_data,ingredient_img_file:ingredientImg})
      alert('Ingrediente atualizado!')
    }
  }

  async function handleChangeIngredientImg(event){
    const file = event.target.files[0];
    setIngredientImg(file);


  }
  useEffect(() =>{
    async function getIngredients(){
      if(params.id == 0){
        setText(true)
      }
      else{
        const response = await api.get(`/ingredients/${params.id}`)
        setData(response.data)
      }
    }
    getIngredients()
  },[])
  return(
    <Container>
      <Header />
      <main>
        <h1>{text ?"Criador de ingredientes" : "Editor de ingredientes"}</h1>
        <Input placeholder="selecione uma imagem" 
            type="file" 
            id="plate_image"
            onChange={handleChangeIngredientImg}
            />
        <Input placeholder="Nome do Ingrediente"
        onChange={e => setIngredient(e.target.value)}
        />
        <Button 
        title="Adicionar ingrediente" 
        id="add_ingredient_button" 
        onClick={handleUpdate}
        />
      </main>
      <Footer />
    </Container>
    )
}