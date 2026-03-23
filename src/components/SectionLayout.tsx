import type { ReactNode } from 'react'
import { Sidebar } from '@/components/Sidebar'

interface SectionLayoutProps {
  title: string
  description?: string
  children: ReactNode
}

export function SectionLayout({ title, description, children }: SectionLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8 bg-gray-50 overflow-auto">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">{title}</h1>
        {description && (
          <p className="text-gray-500 mb-8">{description}</p>
        )}
        {children}
      </main>
    </div>
  )
}

/** Reusable placeholder block for images */
export function ImagePlaceholder({ label = 'Image Placeholder' }: { label?: string }) {
  return (
    <div className="w-full aspect-[4/3] rounded-xl border-2 border-dashed border-gray-300 bg-gray-100 flex flex-col items-center justify-center gap-2 text-gray-400">
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 16l4.586-4.586a2 2 0 012.828 0L14 15m4-4l-1.586-1.586a2 2 0 00-2.828 0L12 11M8 7h.01M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
      <span className="text-sm font-medium">{label}</span>
    </div>
  )
}

/** Reusable placeholder block for text content */
export function ContentPlaceholder({ title = 'Content Section', lines = 4 }: { title?: string; lines?: number }) {
  return (
    <div className="rounded-xl border bg-white p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
      <div className="space-y-2">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className="h-3 rounded bg-gray-100"
            style={{ width: i === lines - 1 ? '60%' : '100%' }}
          />
        ))}
      </div>
      <p className="text-sm text-gray-400 mt-4 italic">
        Replace this placeholder with your actual content.
      </p>
    </div>
  )
}
