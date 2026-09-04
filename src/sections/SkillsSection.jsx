import React, { useState } from 'react'

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState(null)

  const skills = {
    programming: ['Python', 'JavaScript', 'HTML', 'CSS'],
    web: ['Frontend Development', 'Responsive Design', 'UI/UX', 'Interactive Websites'],
    creative: ['Content Creation', 'Digital Design', 'Video/Visual Content'],
    business: ['Digital Products', 'Online Projects', 'Digital Entrepreneurship'],
  }

  const categories = [
    { key: 'programming', label: 'Programming', color: 'from-cyan-400 to-blue-500' },
    { key: 'web', label: 'Web', color: 'from-blue-400 to-purple-500' },
    { key: 'creative', label: 'Creative', color: 'from-purple-400 to-pink-500' },
    { key: 'business', label: 'Business', color: 'from-pink-400 to-orange-500' },
  ]

  return (
    <section id="skills" className="relative min-h-screen flex items-center py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="section-header mb-6">What I Build With.</h2>
          <p className="section-subtitle text-center">
            Technologies and skills that power my projects.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category.key}>
              {/* Category Title */}
              <h3 className="text-2xl font-bold mb-6 text-dark-100 capitalize">{category.label}</h3>

              {/* Skills */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {skills[category.key].map((skill, index) => (
                  <div
                    key={index}
                    onMouseEnter={() => setHoveredSkill(`${category.key}-${index}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className={`group glass-effect p-6 rounded-xl hover:bg-white/20 smooth-transition cursor-pointer ${
                      hoveredSkill === `${category.key}-${index}`
                        ? 'neon-glow scale-105'
                        : 'scale-100'
                    }`}
                  >
                    <p className={`font-semibold text-center bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                      {skill}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
