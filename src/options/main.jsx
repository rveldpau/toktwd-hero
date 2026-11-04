import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './options.css'
import Options from './Options.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Options />
  </StrictMode>,
)
