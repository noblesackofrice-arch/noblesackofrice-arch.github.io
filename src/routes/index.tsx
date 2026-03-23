import { createFileRoute } from '@tanstack/react-router'
import { Sidebar } from '@/components/Sidebar'
import { HeroHotspots } from '@/components/HeroHotspots'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 p-8 bg-gray-50 overflow-auto">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">
          Interactive Showcase
        </h1>
        <p className="text-gray-500 mb-6">
          Click any numbered hotspot on the image to learn more about that area.
        </p>

        <HeroHotspots />

        {/* Legend */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: '1', title: 'Point of Interest A' },
            { label: '2', title: 'Point of Interest B' },
            { label: '3', title: 'Point of Interest C' },
            { label: '4', title: 'Point of Interest D' },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 bg-white rounded-lg border px-3 py-2 text-sm"
            >
              <span className="w-6 h-6 rounded-full bg-gray-800 text-white flex items-center justify-center text-xs font-bold shrink-0">
                {item.label}
              </span>
              <span className="text-gray-700 truncate">{item.title}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
