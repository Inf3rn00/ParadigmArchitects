export function Timeline() {
  const milestones = [
    {
      year: '2000',
      title: 'Foundation',
      description: 'Paradigm Architects was founded in New York with a vision to revolutionize sustainable design.',
    },
    {
      year: '2005',
      title: 'International Expansion',
      description: 'Opened our first international office in London, marking our entry into the European market.',
    },
    {
      year: '2010',
      title: 'Sustainability Leadership',
      description: 'Completed our first net-zero energy building, establishing our commitment to environmental excellence.',
    },
    {
      year: '2015',
      title: 'Cultural Impact',
      description: 'Designed and completed three major cultural centers, enhancing community experiences worldwide.',
    },
    {
      year: '2020',
      title: 'Global Recognition',
      description: 'Received the International Architecture Award for our innovative approach to urban design.',
    },
    {
      year: '2025',
      title: 'Innovation Continues',
      description: 'Leading the industry with AI-integrated design processes and carbon-negative buildings.',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-[var(--color-charcoal)] mb-4">Our Journey</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From a local firm to an international architectural powerhouse, 
            our growth reflects our unwavering commitment to excellence.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-[var(--color-concrete)] md:-translate-x-1/2"></div>

            {/* Milestones */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`inline-block ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                      <div className="bg-[var(--color-copper)] text-white px-4 py-1 inline-block mb-3 tracking-wider text-sm">
                        {milestone.year}
                      </div>
                      <h4 className="text-[var(--color-charcoal)] mb-2">{milestone.title}</h4>
                      <p className="text-gray-600 max-w-md">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-[var(--color-copper)] border-4 border-white shadow-md"></div>

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
