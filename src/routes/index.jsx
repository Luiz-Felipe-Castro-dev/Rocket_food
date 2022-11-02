import {BrowserRouter} from 'react-router-dom'

import { AppRoutes } from './app.routes'

import { AuthRoutes } from './auth.routes'

import { useAuth } from '../hooks/auth'

import { Home } from '../pages/Home'

import { EditPlates } from '../pages/EditPlates'

import { Orders } from '../pages/Orders'

export function Routes(){
  const {user} = useAuth()
  return(
    <BrowserRouter>

      { user ? <AppRoutes/>    :   <AuthRoutes/>}
    </BrowserRouter>
  )
}