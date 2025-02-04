import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Main_page } from './main_page.jsx'
import { Sign_in_out } from './sign_in_out.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Sign_in_out/> */}
    <Main_page/>
  </StrictMode>,
)
