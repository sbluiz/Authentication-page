import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SigIn } from './screens/SigIn'
import './index.css'   // 👈 importa o CSS com o Tailwind

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SigIn/>
  </StrictMode>,
)
