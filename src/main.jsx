import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Main_page } from './main_page.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main_page/>
  </StrictMode>,
)
