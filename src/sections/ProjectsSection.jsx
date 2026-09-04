import React, { useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(0)

  const projects = [
    {
      category: '[SOCIAL MEDIA]',
      title: '[My YouTube Journey — RaktMemes]',
      description:
        'I started my YouTube channel, RaktMemes, in 2024. The early days weren\'t easy — my first videos struggled to find an audience, and I faced repeated setbacks trying to figure out what worked. But instead of giving up, I kept experimenting, learning from each failure, and refining my content. That persistence eventually paid off, turning early failure into real growth and success for the channel.',
      technologies: ['Content Strategy', 'Video Production', 'Audience Engagement', 'Digital Growth'],
      links: {
        view: '[http://www.youtube.com/@Raktmemes]',
        details: '#',
      },
    },
    {
      category: '[DIGITAL PRODUCT]',
      title: '[Ebook Publishing — Amazon KDP]',
      description:
        'In 2026, I branched into self-publishing, selling ebooks through Amazon KDP (Kindle Direct Publishing). Since then, I\'ve generated over ₹4,000 in revenue from ebook sales, and I continue to build on this growing venture. This experience taught me the value of creating digital products and building passive income streams.',
      technologies: ['Self-Publishing', 'Amazon KDP', 'Digital Products', 'Content Marketing'],
      links: {
        view: '[AMAZON KDP LINK]',
        details: '#',
      },
    },
  ]

  const current = projects[selectedProject]

  return (
    <section id="projects" className="relative min-h-screen flex items-center py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="section-header mb-6">Things I've Built.</h2>
          <p className="section-subtitle text-center">
            Projects, experiments, and digital ventures.
          </p>
        </div>

        {/* Project Display */}
        <div className="glass-effect p-8 md:p-12 rounded-2xl mb-8 min-h-[500px] flex flex-col justify-between">
          {/* Category Badge */}
          <div className="inline-block w-fit mb-6">
            <span className="text-xs font-mono font-bold text-accent-400 bg-accent-500/10 px-4 py-2 rounded-full">
              {current.category}
            </span>
          </div>

          {/* Title & Description */}
          <div className="mb-8">
            <h3 className="text-4xl font-bold mb-6 text-dark-100">{current.title}</h3>
            <p className="text-dark-300 text-lg leading-relaxed max-w-3xl">{current.description}</p>
          </div>

          {/* Technologies */}
          <div className="mb-8">
            <p className="text-sm font-mono text-accent-400 mb-3">Technologies:</p>
            <div className="flex flex-wrap gap-2">
              {current.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-accent-500/10 text-accent-300 text-sm font-medium rounded-full border border-accent-400/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="btn-primary group">
              View Project
              <ExternalLink size={18} className="group-hover:translate-x-1 smooth-transition" />
            </button>
            <button className="btn-secondary">
              View Details
            </button>
          </div>
        </div>

        {/* Project Navigation */}
        <div className="flex gap-4 justify-center">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setSelectedProject(index)}
              className={`w-3 h-3 rounded-full smooth-transition ${
                index === selectedProject
                  ? 'bg-accent-400 w-8'
                  : 'bg-dark-600 hover:bg-dark-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
