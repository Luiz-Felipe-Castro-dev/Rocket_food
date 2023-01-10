import { useState } from "react";
import { Link } from "react-router-dom";

import {Container} from "./styles.js"

import { Button } from "../Button";
import { ButtonText} from "../ButtonText";

import {IoExitOutline} from 'react-icons/io5';
import { AiOutlineSearch } from "react-icons/ai";
import {TbReceipt} from "react-icons/tb";

import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai';
import { useAuth } from "../../hooks/auth.jsx";
import { useEffect } from "react";


export function Header({setSearch = () => {},isIngredient,setIsIngredient}){
  const {user,signOut} = useAuth()

  const [IsAdminAuth,setAdminAuth] = useState(false);
  const [isExpanded,setIsExpanded] = useState(true);
  useEffect(() =>{


        if(user && user.isAdmin == 1){
        setAdminAuth(true)
  
      }


  },[])

  return (
      <Container>
        <Link to='/' id="logo_link">
          <div id="logo">      
            <svg width="44" height="48" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.0318 0.216515L43.4349 12.0919V35.8426L22.0318 47.7179L0.628698 35.8426V12.0919L22.0318 0.216515Z" fill="#065E7C"/>
            </svg>

            <h1>food explorer</h1>
          </div>
        </Link>
        <div className={isExpanded ? "hidden" : "expanded"} 
        id="header"
        >
            <ButtonText 
            title={
            isIngredient ? "Pesquisar por ingrediente":"Pesquisar por comida"}             
            onClick={() =>setIsIngredient(!isIngredient)}
            id="search"
            />
            {IsAdminAuth && 
            <Link to='/admin'>
              <ButtonText title='admin area'/>
            </Link>}
            <div id="input">
              <AiOutlineSearch size="20"/>
              <input 
                placeholder={isIngredient?"Buscar ingrediente":"Buscar comida"} 
                type="text" 
                onChange={e => setSearch(e.target.value)}/>
            </div>

            <Link to='/orderdetails' id="order">
              <Button title="Meu pedido (0)" icon={TbReceipt}/>
            </Link>

            <ButtonText onClick={signOut}
            icon={IoExitOutline} 
            className="exit"
            />
        </div>
        <ButtonText icon={AiOutlineClose}
        className={isExpanded ? "hidden" : "expanded" }             
        onClick={() =>setIsExpanded(!isExpanded)}
        id="close"
        />
        <ButtonText icon={AiOutlineMenu}
        className={isExpanded ? "expanded" : "hidden"}             
        onClick={() =>setIsExpanded(!isExpanded)}
        id="open"
        />
          

      </Container>
    )

}