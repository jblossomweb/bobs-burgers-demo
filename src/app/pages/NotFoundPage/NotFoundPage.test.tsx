import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import NotFoundPage from './NotFoundPage'

test('renders back to home link', () => {
  render(
    <MemoryRouter>
      <NotFoundPage />
    </MemoryRouter>
  )
  const backHome = screen.getByText(/back to home/i)
  expect(backHome).toBeInTheDocument()
})
