import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

import HomePage from 'app/pages/HomePage'
import NotFoundPage from 'app/pages/NotFoundPage'
import CharactersPage from 'app/pages/CharactersPage'
import CharacterPage from 'app/pages/CharacterPage'
import EpisodesPage from 'app/pages/EpisodesPage'
import EpisodePage from 'app/pages/EpisodePage'

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/characters" element={<CharactersPage />} />
      <Route path="/characters/:id" element={<CharacterPage />} />
      <Route path="/episodes" element={<EpisodesPage />} />
      <Route path="/episodes/:id" element={<EpisodePage />} />
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  </BrowserRouter>
)

export default App
