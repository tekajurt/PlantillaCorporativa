import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Header from '../components/Header'

describe('Header component', () => {
  it('renders navigation links and handles click scroll', () => {
    // mock an element for scrolling
    const mockEl = { scrollIntoView: jest.fn() }
    document.querySelector = jest.fn().mockReturnValue(mockEl)

    render(<Header />)

    const link = screen.getByText('Inicio')
    expect(link).toBeInTheDocument()

    fireEvent.click(link)
    expect(document.querySelector).toHaveBeenCalled()
    expect(mockEl.scrollIntoView).toHaveBeenCalled()
  })
})
