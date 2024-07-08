import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import ExplorePage from './pages/ExplorePage.jsx'
import NFTsPage from './pages/NFTsPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/explore' element={<ExplorePage />} />
      <Route path='/nft' element={<NFTsPage />} />
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>,
)
