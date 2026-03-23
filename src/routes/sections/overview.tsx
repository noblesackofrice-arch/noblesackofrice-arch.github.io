import { createFileRoute } from '@tanstack/react-router'
import { SectionLayout, ImagePlaceholder, ContentPlaceholder } from '@/components/SectionLayout'

export const Route = createFileRoute('/sections/overview')({
  component: OverviewPage,
})

function OverviewPage() {
  return (
    <SectionLayout
      title="Overview"
      description="A high-level look at what this project is about. Fill in the details below."
    >
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <ImagePlaceholder label="Overview Hero Image" />
        <div className="flex flex-col gap-4">
          <ContentPlaceholder title="Introduction" lines={5} />
          <ContentPlaceholder title="Key Highlights" lines={3} />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {['Highlight 1', 'Highlight 2', 'Highlight 3'].map((item) => (
          <div key={item} className="rounded-xl border bg-white p-5">
            <div className="w-10 h-10 rounded-lg bg-gray-100 mb-3" />
            <h4 className="font-semibold text-gray-800 mb-2">{item}</h4>
            <p className="text-sm text-gray-400 italic">
              Add a brief description for this highlight.
            </p>
          </div>
        ))}
      </div>
    </SectionLayout>
  )
}
