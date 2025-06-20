import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import NotFound from './pages/NotFound.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/portfolio' Component={App} />
        <Route path='/portfolio/404' Component={NotFound} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
