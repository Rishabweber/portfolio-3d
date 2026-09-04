import React from 'react'

export default function CurrentFocusSection() {
  const focuses = [
    {
      number: '01',
      title: 'CODE',
      description: 'Improving technical skills and building useful digital projects.',
    },
    {
      number: '02',
      title: 'WEB',
      description: 'Creating modern websites and digital experiences.',
    },
    {
      number: '03',
      title: 'CREATE',
      description: 'Producing digital content and experimenting with ideas.',
    },
    {
      number: '04',
      title: 'BUILD',
      description: 'Exploring digital products and online business.',
    },
  ]

  return (
    <section className="relative min-h-screen flex items-center py-20 px-6 overflow-hidden bg-dark-900/50">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="section-header mb-6">What I'm Building Now.</h2>
          <p className="section-subtitle text-center">
            Current focus areas and ongoing projects.
          </p>
        </div>

        {/* Focus Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {focuses.map((focus, index) => (
            <div
              key={index}
              className="group glass-effect p-8 rounded-2xl hover:bg-white/10 smooth-transition hover:neon-glow flex flex-col"
              style={{
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              {/* Number */}
              <div className="mb-6">
                <span className="text-5xl font-bold gradient-text group-hover:scale-110 smooth-transition inline-block">
                  {focus.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-dark-100 mb-3 tracking-wider">{focus.title}</h3>

              {/* Description */}
              <p className="text-dark-300 flex-1 leading-relaxed">{focus.description}</p>

              {/* Accent Line */}
              <div className="mt-6 h-1 w-12 bg-gradient-to-r from-accent-400 to-accent-600 group-hover:w-full smooth-transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
