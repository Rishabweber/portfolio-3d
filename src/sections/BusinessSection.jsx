import React from 'react'
import { Code2, Rocket, TrendingUp, Zap } from 'lucide-react'

export default function BusinessSection() {
  const stages = [
    { icon: Code2, label: 'IDEA', description: 'Conceptualize digital opportunities' },
    { icon: Rocket, label: 'BUILD', description: 'Create and develop products' },
    { icon: TrendingUp, label: 'LAUNCH', description: 'Deploy to market' },
    { icon: Zap, label: 'GROW', description: 'Scale and iterate' },
  ]

  const focuses = [
    'Digital Products',
    'Web Projects',
    'Online Experiments',
    'Future Ventures',
  ]

  return (
    <section id="business" className="relative min-h-screen flex items-center py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="section-header mb-6">Building Beyond the Screen.</h2>
          <p className="section-subtitle text-center">
            Exploring digital entrepreneurship and building online ventures.
          </p>
        </div>

        {/* Business Ecosystem */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stages.map((stage, index) => {
              const Icon = stage.icon
              return (
                <div key={index} className="text-center">
                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="p-6 glass-effect rounded-2xl hover:bg-white/10 smooth-transition group cursor-pointer">
                      <Icon className="w-8 h-8 text-accent-400 group-hover:text-accent-300 smooth-transition" />
                    </div>
                  </div>

                  {/* Label */}
                  <h3 className="font-bold text-accent-400 mb-2 text-sm">{stage.label}</h3>
                  <p className="text-dark-300 text-sm">{stage.description}</p>

                  {/* Arrow */}
                  {index < stages.length - 1 && (
                    <div className="hidden md:block absolute left-1/2 top-1/2 -translate-y-1/2">
                      <div className="w-8 h-1 bg-gradient-to-r from-accent-400 to-accent-600" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Focus Areas */}
        <div className="glass-effect p-12 rounded-2xl">
          <h3 className="text-2xl font-bold mb-8 text-center">Areas of Focus</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {focuses.map((focus, index) => (
              <div
                key={index}
                className="p-6 bg-white/5 hover:bg-white/10 rounded-xl smooth-transition text-center group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-accent-500/20 group-hover:bg-accent-500/30 mx-auto mb-4 flex items-center justify-center smooth-transition">
                  <div className="w-3 h-3 bg-accent-400 rounded-full" />
                </div>
                <p className="font-semibold text-dark-100">{focus}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
