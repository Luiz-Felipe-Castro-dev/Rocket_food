import {Container} from "./styles.js"

import { Button } from "../Button";

import { useState } from "react";

import { api } from "../../services/api";


export function FoodCard({data, ...rest}){
  const foodURL = `${api.defaults.baseURL}/files/${data.food_img}`;

  return(
    <Container {...rest}>
      <div className="card">
        <img src={foodURL} alt="imagem de prato de comida" />
        <h1>{data.food_name}</h1>
        <p className="description">{data.description}</p>
        <p className="price">R$ {data.price}</p>
        <Button title="Incluir" className="botaun"/>
      </div>
    </Container>
  )
}