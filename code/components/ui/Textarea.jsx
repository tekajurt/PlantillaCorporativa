import React from 'react';

export default function Textarea({ id, label, ...props }) {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-muted mb-1">
          {label}
        </label>
      )}
      <textarea
        id={id}
        className="block w-full rounded-md border border-border bg-input px-3 py-2 text-sm text-foreground placeholder:text-muted shadow-sm focus:outline-none focus:ring-2 focus:ring-ring"
        {...props}
      />
    </div>
  );
}
