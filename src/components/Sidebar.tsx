import { Link } from '@tanstack/react-router'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Overview', to: '/sections/overview' },
  { label: 'Features', to: '/sections/features' },
  { label: 'Gallery', to: '/sections/gallery' },
  { label: 'Contact', to: '/sections/contact' },
]

export function Sidebar() {
  return (
    <aside className="w-64 shrink-0 bg-gray-900 text-white min-h-screen flex flex-col py-8 px-4 gap-2">
      <div className="text-xl font-bold mb-6 px-2 tracking-tight">Explore</div>
      {navLinks.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className="px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors [&.active]:bg-gray-700 [&.active]:text-white"
          activeProps={{ className: 'bg-gray-700 text-white' }}
        >
          {link.label}
        </Link>
      ))}
    </aside>
  )
}
