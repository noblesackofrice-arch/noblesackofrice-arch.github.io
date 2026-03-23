import { createFileRoute } from '@tanstack/react-router'
import { SectionLayout, ContentPlaceholder, ImagePlaceholder } from '@/components/SectionLayout'

export const Route = createFileRoute('/sections/contact')({
  component: ContactPage,
})

function ContactPage() {
  return (
    <SectionLayout
      title="Contact"
      description="Get in touch. Update the details below with real contact information."
    >
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact form placeholder */}
        <div className="rounded-xl border bg-white p-6 flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-gray-800">Send a Message</h3>
          <div className="space-y-3">
            {['Name', 'Email', 'Subject'].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  {field}
                </label>
                <div className="h-9 rounded-lg border bg-gray-50 w-full" />
              </div>
            ))}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Message
              </label>
              <div className="h-24 rounded-lg border bg-gray-50 w-full" />
            </div>
            <div className="h-10 rounded-lg bg-gray-800 w-full mt-2" />
          </div>
          <p className="text-xs text-gray-400 italic">
            Replace with a real form or Netlify Forms integration.
          </p>
        </div>

        {/* Contact info placeholders */}
        <div className="flex flex-col gap-4">
          <ImagePlaceholder label="Location / Map" />
          <ContentPlaceholder title="Contact Details" lines={4} />
        </div>
      </div>
    </SectionLayout>
  )
}
