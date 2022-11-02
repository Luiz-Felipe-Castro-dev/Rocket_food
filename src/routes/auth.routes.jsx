import {Routes,Route,BrowserRouter,Navigate} from 'react-router-dom'



import { SignIn } from '../pages/SignIn'

import { SignUp } from '../pages/SignUp'

export function AuthRoutes(){
  return(
    <Routes>
      <Route path='/' element={<SignIn/>}/>
      <Route path='/register' element={<SignUp/>}/>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}