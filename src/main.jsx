import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
//Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Pages Components
import Home from './pages/Home';
import Movie from './pages/Movie';
import Search from './pages/Search';
import Categories from './pages/Categories';

import "./index.scss"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/search" element={<Search />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
    <App />
  </React.StrictMode>
)
