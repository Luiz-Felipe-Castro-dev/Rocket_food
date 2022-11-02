import React from 'react'
import ReactDOM from 'react-dom/client'

import {ThemeProvider} from 'styled-components'
import theme from './styles/theme'

import GlobalStyles from './styles/global'
import { AuthProvider } from './hooks/auth'

// import {SignUp} from "./pages/SignUp";

// import {SignIn} from "./pages/SignIn";
// import {FoodDetails} from "./pages/FoodDetails";
// import {Orders} from "./pages/Orders";

// import { EditPlates} from "./pages/EditPlates";
// import {Home} from "./pages/Home";
// import {OrderDetail} from "./pages/OrderDetail";

import {Routes} from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
