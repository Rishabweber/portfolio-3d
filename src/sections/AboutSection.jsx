import React from 'react'

export default function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen flex items-center py-20 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto w-full">
        {/* Section Header */}
        <h2 className="section-header mb-12">The Person Behind the Screen.</h2>

        {/* Profile Info */}
        <div className="glass-effect p-12 rounded-2xl mb-12">
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-accent-400 font-mono text-sm mb-2">Name</p>
                <p className="text-2xl font-bold text-dark-100">Rishab Kumar</p>
              </div>
              <div>
                <p className="text-accent-400 font-mono text-sm mb-2">Professional Identity</p>
                <p className="text-2xl font-bold text-dark-100">Coder • Web Developer • Creator • Entrepreneur</p>
              </div>
              <div>
                <p className="text-accent-400 font-mono text-sm mb-2">Experience</p>
                <p className="text-2xl font-bold text-dark-100">5+ Years of Coding</p>
              </div>
              <div>
                <p className="text-accent-400 font-mono text-sm mb-2">Location</p>
                <p className="text-2xl font-bold text-dark-100">[LOCATION]</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="space-y-8 text-lg leading-relaxed text-dark-300">
          <p>
            My story with technology began with curiosity — a desire to understand how things worked and the ability to build them. What started as writing simple code quickly evolved into a passion for creating digital experiences that matter.
          </p>

          <p>
            Over the past 5+ years, I've immersed myself in coding, exploring different languages, frameworks, and technologies. But I soon realized that coding alone wasn't enough. I wanted to create websites that didn't just function, but inspired. I wanted to build digital experiences that made people stop and think.
          </p>

          <p>
            This led me to web development — where I could merge technical skills with creative thinking. Every website I built became an opportunity to solve problems, think differently, and push the boundaries of what's possible on the web.
          </p>

          <p>
            But even that wasn't enough. I began exploring content creation, using digital media to share ideas, document my journey, and connect with people who shared similar interests. This naturally led me toward digital entrepreneurship — the idea that technology could be leveraged not just to build better products, but to create entire business models.
          </p>

          <p>
            Today, I'm at a unique intersection of skills. I'm not just a coder. I'm not just a developer. I'm not just a creator. I'm someone who combines all these perspectives to think bigger — to see technology not as an end in itself, but as a tool to build meaningful things.
          </p>

          <p>
            My vision is simple: to use technology as a vehicle for creating impact. Whether that's through building websites that solve real problems, creating content that educates and inspires, or exploring business models that generate real value — the goal is always the same: build something real.
          </p>
        </div>
      </div>
    </section>
  )
}
