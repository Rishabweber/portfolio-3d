import React from 'react'
import { Code2, Zap, Palette, Briefcase } from 'lucide-react'

export default function IntroductionSection() {
  const pillars = [
    {
      icon: Code2,
      title: 'Coding',
      description: 'Building software and experimenting with technology.',
    },
    {
      icon: Zap,
      title: 'Web Development',
      description: 'Creating modern, responsive and interactive websites.',
    },
    {
      icon: Palette,
      title: 'Content Creation',
      description: 'Turning ideas into digital content and experiences.',
    },
    {
      icon: Briefcase,
      title: 'Digital Business',
      description: 'Exploring online products, digital projects and business opportunities.',
    },
  ]

  return (
    <section id="about" className="relative min-h-screen flex items-center py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="section-header mb-6">More Than Just Code.</h2>
          <p className="section-subtitle text-center">
            Coding is where my journey started, but it became much bigger than writing code.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <div
                key={index}
                className="group glass-effect p-8 rounded-2xl hover:bg-white/10 smooth-transition cursor-pointer"
                style={{
                  transform: `perspective(1000px)`,
                  transitionDelay: `${index * 0.1}s`,
                }}
              >
                <div className="mb-4 inline-block p-4 bg-accent-500/10 rounded-lg group-hover:bg-accent-500/20 smooth-transition">
                  <Icon className="w-6 h-6 text-accent-400 group-hover:text-accent-300 smooth-transition" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-dark-100">{pillar.title}</h3>
                <p className="text-dark-300 leading-relaxed">{pillar.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
