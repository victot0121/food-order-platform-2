import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoute from './AppRoute'
import {BrowserRouter as Router} from "react-router-dom";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <AppRoute/>
    </Router>
  </StrictMode>,
)
