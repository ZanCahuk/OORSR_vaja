import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {Telo} from './components/Telo.tsx'
import Menu from './components/Menu.tsx'
import { ekipa } from './models/data.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Menu ekipa = {ekipa} />
    <Telo ekipa = {ekipa} />

    <App />
    
  </StrictMode>,
)
