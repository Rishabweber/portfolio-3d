import React from 'react'

export default function JourneySection() {
  const milestones = [
    {
      year: '[2021]',
      title: 'Started Coding',
      description: 'Began my journey into programming and web development.',
    },
    {
      year: '[2022]',
      title: 'Started Building Projects',
      description: 'Created first web projects and digital experiments.',
    },
    {
      year: '[2023]',
      title: 'Web Development',
      description: 'Focused on modern web development and digital creation.',
    },
    {
      year: '[2024]',
      title: 'Content & Digital Creation',
      description: 'Launched content creation and digital entrepreneurship ventures.',
    },
    {
      year: 'NOW',
      title: 'Building the Next Chapter',
      description: 'Exploring new opportunities and scaling digital projects.',
    },
  ]

  return (
    <section id="journey" className="relative min-h-screen flex items-center py-20 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="section-header mb-6">5+ Years of Building.</h2>
          <p className="section-subtitle text-center">
            My evolution as a coder, builder, and creator.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent-400 to-accent-600 rounded-full" />

          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
              >
                {/* Content */}
                <div className="flex-1 md:flex-1">
                  <div className="glass-effect p-6 rounded-xl hover:bg-white/10 smooth-transition">
                    <div className="text-accent-400 font-mono text-sm font-bold mb-2">{milestone.year}</div>
                    <h3 className="text-2xl font-bold text-dark-100 mb-2">{milestone.title}</h3>
                    <p className="text-dark-300">{milestone.description}</p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="flex-shrink-0 flex items-center justify-center">
                  <div className="w-6 h-6 bg-accent-500 rounded-full border-4 border-dark-950 neon-glow" />
                </div>

                {/* Spacer */}
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
