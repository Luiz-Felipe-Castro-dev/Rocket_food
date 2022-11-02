
import { createContext, useContext, useState, useEffect} from "react";
import { api } from "../services/api";


export const AuthContext = createContext({});

function AuthProvider({children}){
  const [data,setData] = useState({})

  async function signIn({email,password}){
    try {
      const response = await api.post("/sessions", {email, password});
      const {user,token} = response.data;

      localStorage.setItem("@rocketfood:user", JSON.stringify(user));
      localStorage.setItem("@rocketfood:token", token)

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({user,token})

      console.log(user,token)
    } catch (error) {

      if(error.response){
        alert(error.response.message)
      }

      else{
        alert("Não foi possivel entrar")
      }
    }

  }
  function signOut(){
    console.log('oioioi')
    localStorage.removeItem("@rocketfood:token");
    localStorage.removeItem("@rocketfood:user");

    setData({});
  }

  async function updateFoodImg({food,food_img_file}){

    try {
      if(food_img_file){
      const fileUploadForm = new FormData();
      fileUploadForm.append("food_img",food_img_file);

      await api.patch(`admindish/food_img/${food.id}`, fileUploadForm);
      }
      else{
        return
      }
      
    }
    catch (error) {
      //no idea why this is here this way
      if(error.response){
        typeof error.response.message == "undefined" ? alert(error.response.data.message):alert(error.response.message);
      }

      else{
        alert("Não foi possivel atualizar o prato")
      }
    }
  }
  async function updateIngredientImg({ingredient_data,ingredient_img_file}){

    try {
      if(ingredient_img_file){
      const fileUploadForm = new FormData();
      fileUploadForm.append("ingredient_img",ingredient_img_file);

      await api.patch(`ingredients/ingredient_img/${ingredient_data.id}`, fileUploadForm);
      }
      else{
        return
      }
      
    }
    catch (error) {
      //no idea why this is here this way
      if(error.response){
        typeof error.response.message == "undefined" ? alert(error.response.data.message):alert(error.response.message);
      }

      else{
        alert("Não foi possivel atualizar o ingrediente")
      }
    }
  }
  useEffect(() => {
    const token = localStorage.getItem("@rocketfood:token")
    const user = localStorage.getItem("@rocketfood:user")



    if(token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user)
      })
    }
  }, [])
  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      updateFoodImg,
      updateIngredientImg,
      user:data.user
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext)

  return context
}

export {AuthProvider,useAuth}