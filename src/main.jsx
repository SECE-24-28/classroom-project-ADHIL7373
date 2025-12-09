import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import First from './Display.jsx'
import App from './App.jsx'
import Display1 from './assets/display1.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <Display1/>
  </StrictMode>,
)
