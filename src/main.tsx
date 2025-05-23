import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import UserAuthContext from './context/authContext/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserAuthContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserAuthContext>
  </StrictMode>,
)
