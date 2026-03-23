import { createFileRoute } from '@tanstack/react-router'
import { SectionLayout, ImagePlaceholder } from '@/components/SectionLayout'

export const Route = createFileRoute('/sections/gallery')({
  component: GalleryPage,
})

const galleryItems = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  label: `Gallery Image ${i + 1}`,
}))

function GalleryPage() {
  return (
    <SectionLayout
      title="Gallery"
      description="A curated collection of images. Replace the placeholders with your own photos."
    >
      {/* Featured image */}
      <div className="mb-6">
        <ImagePlaceholder label="Featured Image" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {galleryItems.map((item) => (
          <div key={item.id} className="aspect-square">
            <ImagePlaceholder label={item.label} />
          </div>
        ))}
      </div>

      <p className="mt-6 text-sm text-center text-gray-400 italic">
        Add captions, lightbox functionality, or categories as needed.
      </p>
    </SectionLayout>
  )
}
