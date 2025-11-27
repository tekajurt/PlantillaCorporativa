import React from 'react';
import Image from 'next/image';
import { cn } from '../lib/utils';

export default function Card({
  title,
  children,
  image,
  imageWidth = 800,
  imageHeight = 480,
  blurDataURL,
  className = '',
  onClick,
}) {
  const defaultBlur = 'data:image/gif;base64,R0lGODlhAQABAAAAACw=';
  const clickable = typeof onClick === 'function';
  const rootProps = clickable
    ? {
        onClick,
        role: 'button',
        tabIndex: 0,
        onKeyDown: (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick(e);
          }
        },
        className: cn('cursor-pointer', className),
      }
    : { className };

  const aspectStyle = image ? { aspectRatio: `${imageWidth} / ${imageHeight}` } : {};

  return (
    <article {...rootProps} className={cn('bg-card rounded-lg shadow-md p-6', rootProps.className)}>
      {image && (
        <div className="mb-4 overflow-hidden rounded relative w-full" style={aspectStyle}>
          <Image
            src={image}
            alt={title || ''}
            width={imageWidth}
            height={imageHeight}
            className="w-full h-full object-cover"
            sizes="(max-width: 640px) 100vw, 50vw"
            loading="lazy"
            placeholder="blur"
            blurDataURL={blurDataURL || defaultBlur}
          />
        </div>
      )}
      {title && <h3 className="text-lg font-semibold mb-2 text-foreground">{title}</h3>}
      <div className="text-muted">{children}</div>
    </article>
  );
}
