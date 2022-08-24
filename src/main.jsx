import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
//Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route></Route>
      </Routes>
    </BrowserRouter>
    <App />
  </React.StrictMode>
)
