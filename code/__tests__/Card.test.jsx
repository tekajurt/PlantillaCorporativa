import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Card from '../components/Card'

describe('Card component', () => {
  it('renders title and children', () => {
    render(
      <Card title="My Title">
        <p>Child content</p>
      </Card>
    )

    expect(screen.getByText('My Title')).toBeInTheDocument()
    expect(screen.getByText('Child content')).toBeInTheDocument()
  })

  it('calls onClick when provided and activated by click/keyboard', () => {
    const fn = jest.fn()
    render(
      <Card title="Click me" onClick={fn}>
        Clickable
      </Card>
    )

    const root = screen.getByText('Clickable').closest('article')
    fireEvent.click(root)
    expect(fn).toHaveBeenCalled()

    // keyboard activation (Space)
    fn.mockClear()
    fireEvent.keyDown(root, { key: ' ' })
    expect(fn).toHaveBeenCalled()
  })
})
