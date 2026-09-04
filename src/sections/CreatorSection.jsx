import React from 'react'
import { Play } from 'lucide-react'

export default function CreatorSection() {
  const creatorContent = [
    {
      number: '01',
      title: 'Digital Storytelling',
      description: 'Creating narratives around technology and digital experiences.',
    },
    {
      number: '02',
      title: 'Visual Experiments',
      description: 'Exploring creative possibilities through digital and visual content.',
    },
    {
      number: '03',
      title: 'Technology Content',
      description: 'Sharing insights, tutorials, and technology-related ideas.',
    },
    {
      number: '04',
      title: 'Creative Projects',
      description: 'Building unique digital projects that push creative boundaries.',
    },
  ]

  return (
    <section id="creator" className="relative min-h-screen flex items-center py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="section-header mb-6">Code Is Only One Side of Me.</h2>
          <p className="section-subtitle">
            I don't just build things. I create experiences around ideas.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {creatorContent.map((item, index) => (
            <div
              key={index}
              className="group glass-effect p-8 rounded-2xl hover:bg-white/10 smooth-transition hover:neon-glow"
              style={{
                transformStyle: 'preserve-3d',
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <span className="text-4xl font-bold gradient-text">{item.number}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-dark-100 mb-3">{item.title}</h3>
                  <p className="text-dark-300 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="btn-primary group inline-flex">
            <Play size={20} className="group-hover:scale-110 smooth-transition" />
            Explore My Content
          </button>
        </div>
      </div>
    </section>
  )
}
