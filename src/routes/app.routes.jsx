import { Routes,Route} from "react-router-dom";

import {Home} from "../pages/Home"

import {EditPlates} from "../pages/EditPlates"

import {FoodDetails} from "../pages/FoodDetails"

import {OrderDetail} from "../pages/OrderDetail"

import {Orders} from "../pages/Orders"

import { Admin } from "../pages/Admin";

import {Ingredients} from "../pages/Ingredients"

import { EditIngredients } from "../pages/EditIngredients";

export function AppRoutes(){
  return(
    <Routes>
      <Route path={'/admin'} element={<Admin/>}/>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/edit/:id'} element={<EditPlates/>}/>
      <Route path={'/fooddetails/:id'} element={<FoodDetails/>}/>
      <Route path={'/orderdetails'} element={<OrderDetail/>}/>
      <Route path={'/orders/:number'} element={<Orders/>}/>
      <Route path={'/ingredients'} element={<Ingredients/>}/>
      <Route path={'/editingredients/:id'} element={<EditIngredients/>}/>

    </Routes>
  )
}