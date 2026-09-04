import React from 'react'

export default function FutureVisionSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-6 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-radial from-accent-600/10 to-transparent" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="section-header mb-8">
          This Is Only The Beginning.
        </h2>

        {/* Vision Statement */}
        <p className="text-2xl md:text-3xl text-dark-200 leading-relaxed mb-12 max-w-3xl mx-auto">
          The goal isn't simply to learn technology. It's to use technology to build something meaningful.
        </p>

        {/* Accent Elements */}
        <div className="flex justify-center gap-4 mb-12">
          <div className="w-16 h-1 bg-gradient-to-r from-accent-400 to-accent-600 rounded-full" />
          <div className="w-16 h-1 bg-gradient-to-r from-accent-600 to-accent-400 rounded-full" />
        </div>

        {/* Floating Vision Items */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {[
            { label: 'Innovation', emoji: '⚡' },
            { label: 'Impact', emoji: '🎯' },
            { label: 'Growth', emoji: '📈' },
          ].map((item, index) => (
            <div
              key={index}
              className="glass-effect p-8 rounded-2xl hover:bg-white/10 smooth-transition hover:neon-glow cursor-pointer"
            >
              <div className="text-4xl mb-4">{item.emoji}</div>
              <p className="font-semibold text-dark-100">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
