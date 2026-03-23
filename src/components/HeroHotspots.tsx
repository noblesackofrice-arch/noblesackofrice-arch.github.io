import { useState } from 'react'

export interface Hotspot {
  id: string
  x: number // percentage from left
  y: number // percentage from top
  label: string
  title: string
  description: string
  image?: string
}

const defaultHotspots: Hotspot[] = [
  {
    id: 'hs1',
    x: 25,
    y: 30,
    label: '1',
    title: 'George Vancouver Roses',
    description:
      'George Vancouver Roses',
    image: '/H099-23.jpg',
  },
  {
    id: 'hs2',
    x: 55,
    y: 22,
    label: '2',
    title: 'Point of Interest B',
    description:
      'This is a placeholder description for hotspot B. Add details about what makes this spot special.',
    image: '/public/H099-23.jpg',
  },
  {
    id: 'hs3',
    x: 75,
    y: 55,
    label: '3',
    title: 'Point of Interest C',
    description:
      'Hotspot C placeholder content. Describe what visitors will find here.',
    image: '/placeholder.png',
  },
  {
    id: 'hs4',
    x: 35,
    y: 65,
    label: '4',
    title: 'Point of Interest D',
    description:
      'This area highlights something noteworthy. Replace this text with real information.',
    image: '/placeholder.png',
  },
]

interface HeroHotspotsProps {
  heroImage?: string
  hotspots?: Hotspot[]
}

export function HeroHotspots({
  heroImage = '/placeholder.png',
  hotspots = defaultHotspots,
}: HeroHotspotsProps) {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null)

  const toggleHotspot = (hotspot: Hotspot) => {
    setActiveHotspot((prev) => (prev?.id === hotspot.id ? null : hotspot))
  }

  const closePopup = () => setActiveHotspot(null)

  return (
    <div className="relative">
      {/* Hero image container */}
      <div className="relative w-full aspect-[16/7] overflow-hidden rounded-2xl select-none">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-full object-cover"
          draggable={false}
        />

        {/* Hotspot markers */}
        {hotspots.map((hotspot) => (
          <button
            key={hotspot.id}
            onClick={() => toggleHotspot(hotspot)}
            style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-10 group focus:outline-none"
            aria-label={`Hotspot: ${hotspot.title}`}
          >
            {/* Pulsing ring */}
            <span
              className={`absolute inset-0 rounded-full animate-ping opacity-60 ${
                activeHotspot?.id === hotspot.id
                  ? 'bg-yellow-400'
                  : 'bg-white'
              }`}
            />
            {/* Main dot */}
            <span
              className={`relative flex items-center justify-center w-9 h-9 rounded-full border-2 font-bold text-sm shadow-lg transition-all duration-150 ${
                activeHotspot?.id === hotspot.id
                  ? 'bg-yellow-400 border-yellow-600 text-yellow-900 scale-110'
                  : 'bg-white border-gray-300 text-gray-800 group-hover:scale-110 group-hover:bg-yellow-100'
              }`}
            >
              {hotspot.label}
            </span>
          </button>
        ))}
      </div>

      {/* Popup overlay */}
      {activeHotspot && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-20 bg-black/40"
            onClick={closePopup}
          />
          {/* Popup card */}
          <div className="fixed inset-0 z-30 flex items-center justify-center p-4 pointer-events-none">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md pointer-events-auto overflow-hidden">
              {/* Popup image */}
              {activeHotspot.image && (
                <div className="w-full aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={activeHotspot.image}
                    alt={activeHotspot.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    {activeHotspot.title}
                  </h3>
                  <button
                    onClick={closePopup}
                    className="shrink-0 text-gray-400 hover:text-gray-700 transition-colors text-2xl leading-none"
                    aria-label="Close"
                  >
                    &times;
                  </button>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {activeHotspot.description}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
