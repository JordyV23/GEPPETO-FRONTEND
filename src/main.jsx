import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { GeppettoApp } from './GeppettoApp';
import "./index.css"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/*** Asigna router ***/}
    <BrowserRouter>
      <GeppettoApp/>
    </BrowserRouter>
  </React.StrictMode>,
)
