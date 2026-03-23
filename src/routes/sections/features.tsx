import { createFileRoute } from '@tanstack/react-router'
import { SectionLayout, ImagePlaceholder, ContentPlaceholder } from '@/components/SectionLayout'

export const Route = createFileRoute('/sections/features')({
  component: FeaturesPage,
})

const featureItems = [
  { id: 1, title: 'Feature One' },
  { id: 2, title: 'Feature Two' },
  { id: 3, title: 'Feature Three' },
  { id: 4, title: 'Feature Four' },
]

function FeaturesPage() {
  return (
    <SectionLayout
      title="Features"
      description="Explore the key features. Replace each section with real images and descriptions."
    >
      <div className="space-y-10">
        {featureItems.map((feature, index) => (
          <div
            key={feature.id}
            className={`flex flex-col md:flex-row gap-6 items-stretch ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="w-full md:w-1/2">
              <ImagePlaceholder label={`${feature.title} Image`} />
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-3 justify-center">
              <ContentPlaceholder title={feature.title} lines={4} />
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  )
}
