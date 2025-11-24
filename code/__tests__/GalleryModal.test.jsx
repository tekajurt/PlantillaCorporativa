import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import GalleryModal from '../components/ui/GalleryModal'

describe('GalleryModal', () => {
  it('renders image when open', () => {
    render(
      <GalleryModal
        open={true}
        image={'/file.svg'}
        alt={'Test image'}
        blurDataURL={'data:image/svg+xml;utf8,<svg></svg>'}
        onClose={() => {}}
      />
    )

    const dialog = screen.getByRole('dialog')
    expect(dialog).toBeInTheDocument()
    const img = screen.getByAltText('Test image')
    expect(img).toBeInTheDocument()
  })

  it('calls onClose when Escape is pressed', () => {
    const onClose = jest.fn()
    render(
      <GalleryModal
        open={true}
        image={'/file.svg'}
        alt={'Test image'}
        blurDataURL={'data:image/svg+xml;utf8,<svg></svg>'}
        onClose={onClose}
      />
    )

    fireEvent.keyDown(window, { key: 'Escape' })
    expect(onClose).toHaveBeenCalled()
  })

  it('calls onClose when clicking on backdrop', () => {
    const onClose = jest.fn()
    render(
      <GalleryModal
        open={true}
        image={'/file.svg'}
        alt={'Test image'}
        blurDataURL={'data:image/svg+xml;utf8,<svg></svg>'}
        onClose={onClose}
      />
    )

    const dialog = screen.getByRole('dialog')
    fireEvent.click(dialog)
    expect(onClose).toHaveBeenCalled()
  })
})
