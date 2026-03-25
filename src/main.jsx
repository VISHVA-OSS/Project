import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Api from './Api.jsx'
import About from './About.jsx'
import Product from './Product.jsx'
import Form from './Form.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {createBrowserRouter, BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Api/>
    </BrowserRouter>
  </StrictMode>,
)
