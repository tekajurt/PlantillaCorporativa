import React from 'react'

export default function Logo({ className = '' }) {
  return (
    <div className={className} aria-hidden="false">
      <a href="#" className="inline-flex items-center gap-2 text-gray-900 dark:text-white font-semibold">
        <span className="sr-only">Brand</span>
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
          <circle cx="12" cy="12" r="10" fill="currentColor" />
        </svg>
        <span className="text-lg">MiMarca</span>
      </a>
    </div>
  )
}
