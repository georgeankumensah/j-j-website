import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import FormContextProvider from './contexts/FormContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <FormContextProvider>

    <App />
  </FormContextProvider>
  </BrowserRouter>,
)
