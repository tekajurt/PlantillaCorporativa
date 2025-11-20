import React from 'react'

export default function Textarea({ id, label, ...props }) {
  return (
    <div className="w-full">
      {label && <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">{label}</label>}
      <textarea id={id} className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" {...props} />
    </div>
  )
}
