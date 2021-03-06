import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import HomePage from './HomePage'

describe('app/pages/HomePage', () => {
  it('should render main logo', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    )
    const imageElement = screen.getByAltText(/bob's burgers/i)
    expect(imageElement).toBeInTheDocument()
    expect(imageElement.getAttribute('src')).toEqual('/bobsburgers.png')
  })

  it('should render characters link', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    )
    const linkElement = screen.getByText(/characters/i)
    expect(linkElement).toBeInTheDocument()
  })

  it('should render episodes link', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    )
    const linkElement = screen.getByText(/episodes/i)
    expect(linkElement).toBeInTheDocument()
  })
})
