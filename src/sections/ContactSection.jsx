import React, { useState } from 'react'
import { Github, Linkedin, Instagram, Youtube, Mail, ArrowRight } from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const socialLinks = [
    { icon: Github, label: 'GitHub', url: '[GITHUB_PROFILE]' },
    { icon: Linkedin, label: 'LinkedIn', url: '[LINKEDIN_PROFILE]' },
    { icon: Instagram, label: 'Instagram', url: '[INSTAGRAM_PROFILE]' },
    { icon: Youtube, label: 'YouTube', url: 'http://www.youtube.com/@Raktmemes' },
    { icon: Mail, label: 'Email', url: '[YOUR_EMAIL]' },
  ]

  return (
    <section id="contact" className="relative min-h-screen flex items-center py-20 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="section-header mb-6">Have an Idea?</h2>
          <p className="section-subtitle text-center">
            Let's turn it into something real.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-effect p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6 text-dark-100">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-dark-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-dark-100 placeholder-dark-500 focus:outline-none focus:border-accent-400 smooth-transition"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-dark-100 placeholder-dark-500 focus:outline-none focus:border-accent-400 smooth-transition"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-dark-100 placeholder-dark-500 focus:outline-none focus:border-accent-400 smooth-transition resize-none h-32"
                  placeholder="Tell me about your idea..."
                  required
                />
              </div>
              <button type="submit" className="btn-primary w-full group">
                Send Message
                <ArrowRight size={18} className="group-hover:translate-x-1 smooth-transition" />
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-dark-100">Connect With Me</h3>
            <div className="space-y-4 mb-12">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group glass-effect p-4 rounded-xl hover:bg-white/10 smooth-transition flex items-center gap-4"
                  >
                    <Icon className="w-5 h-5 text-accent-400 group-hover:text-accent-300 smooth-transition" />
                    <span className="font-medium text-dark-100 group-hover:text-accent-300 smooth-transition">
                      {social.label}
                    </span>
                    <ArrowRight size={16} className="ml-auto text-dark-500 group-hover:text-accent-400 smooth-transition" />
                  </a>
                )
              })}
            </div>

            {/* Quick CTA */}
            <div className="glass-effect p-6 rounded-xl border-l-4 border-accent-400">
              <p className="text-sm text-dark-300 mb-4">
                Interested in working together? Let's build something amazing.
              </p>
              <button className="btn-primary text-sm w-full">
                Start a Project
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-dark-400">
          <p>© 2026 Rishab Kumar. Crafted with code and creativity.</p>
        </div>
      </div>
    </section>
  )
}
