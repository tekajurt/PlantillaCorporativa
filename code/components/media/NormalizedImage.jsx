'use client';
import Image from 'next/image';

export default function NormalizedImage({ item, alt, className = '' }) {
  if (!item) return null;
  const { src, width, height, sizes, priority, placeholder, blur, aspect } = item;
  const style = aspect ? { aspectRatio: aspect } : undefined;
  return (
    <div className={`w-full rounded-lg overflow-hidden ${className}`} style={style}>
      <Image
        src={src}
        alt={alt || ''}
        width={width}
        height={height}
        className="w-full h-full object-cover"
        sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
        priority={!!priority}
        placeholder={placeholder === 'blur' ? 'blur' : 'empty'}
        blurDataURL={placeholder === 'blur' ? blur : undefined}
      />
    </div>
  );
}
