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

  const [isCreating,setIsCreating] = useState(false)
  const [ingredientImg,setIngredientImg] = useState(null)
  const [ingredient,setIngredient] = useState()
  async function handleDelete(){
    const confirm = window.confirm("Deseja realmente deletar este prato")
    if ( confirm){
      await api.delete(`ingredients/${params.id}`)
      navigate("/")
    }
  }
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
        setIsCreating(true)
      }
      else{
        const response = await api.get(`/ingredients/${params.id}`)

      }
    }
    getIngredients()
  },[])
  return(
    <Container>
      <Header />
      <main>
        <h1>{isCreating ?"Criador de ingredientes" : "Editor de ingredientes"}</h1>
        <Input placeholder="selecione uma imagem" 
            type="file" 
            id="plate_image"
            onChange={handleChangeIngredientImg}
            />
        <Input placeholder="Nome do Ingrediente"
        onChange={e => setIngredient(e.target.value)}
        />
        <div className="buttons">
          {!isCreating && <Button 
          title="Deletar ingrediente" 
          id="delete_ingredient_button" 
          onClick={handleDelete}
          />}
          <Button 
          title={isCreating?"Adicionar ingrediente":"Editar ingrediente"} 
          id="add_ingredient_button" 
          onClick={handleUpdate}
        />
        </div>
      </main>
      <Footer />
    </Container>
    )
}