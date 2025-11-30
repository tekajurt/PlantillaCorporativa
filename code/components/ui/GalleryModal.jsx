'use client';
import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';

export default function GalleryModal({ open, image, alt, blurDataURL, onClose }) {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    // focus modal
    setTimeout(() => ref.current?.focus(), 0);

    // lock background scroll using body fixed strategy + html overflow hidden to avoid layout shift
    const body = document.body;
    const docEl = document.documentElement;
    const scrollY = window.scrollY || window.pageYOffset || 0;

    const prevBody = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
    };
    const prevHtml = {
      overflow: docEl.style.overflow,
      paddingRight: docEl.style.paddingRight,
    };

    const scrollbarWidth = Math.max(0, window.innerWidth - docEl.clientWidth);
    docEl.style.overflow = 'hidden';
    if (scrollbarWidth > 0) docEl.style.paddingRight = `${scrollbarWidth}px`;

    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.left = '0';
    body.style.right = '0';
    body.style.width = '100%';

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('keydown', onKey);
      // restore html and body styles and scroll position
      docEl.style.overflow = prevHtml.overflow;
      docEl.style.paddingRight = prevHtml.paddingRight;

      body.style.position = prevBody.position;
      body.style.top = prevBody.top;
      body.style.left = prevBody.left;
      body.style.right = prevBody.right;
      body.style.width = prevBody.width;

      window.scrollTo(0, scrollY);
    };
  }, [open, onClose]);

  if (!open || !mounted) return null;

  const overlay = (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 overscroll-contain"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onClose();
      }}
      tabIndex={-1}
    >
      <div
        ref={ref}
        tabIndex={-1}
        className="w-full max-w-screen-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl max-h-[90dvh] overflow-auto"
      >
        <button
          aria-label="Cerrar"
          className="mb-6 bg-input/60 text-foreground px-3 py-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          onClick={onClose}
        >
          Cerrar
        </button>
        <div className="bg-card rounded-lg p-2 shadow-md">
          <div className="w-full overflow-hidden aspect-[3/2] max-h-[75dvh]">
            <Image
              src={image}
              alt={alt || ''}
              width={1200}
              height={800}
              className="w-full h-full object-contain"
              sizes="(max-width: 1024px) 90vw, 1200px"
              loading="lazy"
              placeholder="blur"
              blurDataURL={blurDataURL}
            />
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(overlay, document.body);
}
