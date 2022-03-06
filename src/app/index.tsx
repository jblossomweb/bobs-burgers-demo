import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

import HomePage from 'app/pages/HomePage'
import CharactersPage from './pages/CharactersPage'
import NotFoundPage from './pages/NotFoundPage'

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/characters" element={<CharactersPage />} />
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  </BrowserRouter>
)

export default App
