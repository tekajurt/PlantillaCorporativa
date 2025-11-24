"use client"
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function GalleryModal({ open, image, alt, blurDataURL, onClose }) {
  const ref = useRef(null)

  useEffect(() => {
    if (open) {
      // focus modal
      setTimeout(() => ref.current?.focus(), 0)
      const onKey = (e) => {
        if (e.key === 'Escape') onClose()
      }
      window.addEventListener('keydown', onKey)
      return () => window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    /* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onClose()
      }}
      tabIndex={-1}
    >
      <div ref={ref} tabIndex={-1} className="max-w-4xl w-full max-h-[90vh] overflow-auto">
        <button
          aria-label="Cerrar"
          className="mb-4 text-white bg-gray-800/60 px-3 py-1 rounded"
          onClick={onClose}
        >
          Cerrar
        </button>
        <div className="bg-white dark:bg-gray-900 rounded-lg p-2">
          <Image
            src={image}
            alt={alt || ''}
            width={1200}
            height={800}
            className="w-full h-auto object-contain"
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
        </div>
      </div>
    </div>
  )
}
