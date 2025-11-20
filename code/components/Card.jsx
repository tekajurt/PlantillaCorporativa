import React from 'react'
import { cn } from '../lib/utils'

export default function Card({ title, children, image, className = '' }) {
  return (
    <article className={cn('bg-white dark:bg-gray-800 rounded-lg shadow p-6', className)}>
      {image && (
        <div className="mb-4 overflow-hidden rounded">
          <img src={image} alt="" className="w-full h-48 object-cover" />
        </div>
      )}
      {title && <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>}
      <div className="text-gray-700 dark:text-gray-300">{children}</div>
    </article>
  )
}
