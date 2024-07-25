import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import "bootstrap/dist/css/bootstrap.min.css"
import '@fortawesome/fontawesome-free/css/all.min.css';

import "bootstrap/dist/js/bootstrap.bundle.min.js"
import  DataContext  from './Contexts/DataContext.jsx'
import OtherProvider from './Contexts/OtherContext.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <DataContext>
    <OtherProvider>
  <App />
  </OtherProvider>
  </DataContext>
  </BrowserRouter>
,
  
)
