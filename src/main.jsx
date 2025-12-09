import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Display2 from './Display2.jsx'
import Display3 from './clear.jsx'
import Display4 from './Display4.jsx'
import Display5 from './Display5.jsx'
import Display6 from './Display5.jsx'
import Display7 from './arr.jsx'
import Display8 from './Display6.jsx'
import Display9 from './textbox.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
     <Display2/>
     <Display3/>
     <Display4/>
     <Display5/>
     <Display6/>
     <Display7/>
     <Display8/>
     <Display9/>
  </StrictMode>,
)
