import React from 'react'
import { ArrowRight } from 'lucide-react'
import HeroCanvas from '../components/HeroCanvas'

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <HeroCanvas />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8 space-y-4">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
            <span className="block mb-2">RISHAB KUMAR</span>
            <span className="gradient-text text-4xl md:text-6xl">Coder. Creator. Builder.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-dark-300 max-w-2xl mx-auto mt-6 leading-relaxed">
            I've been building with code for 5+ years — creating websites, digital experiences, content, and online projects.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-12">
          <button className="btn-primary group">
            Explore My Work
            <ArrowRight size={20} className="group-hover:translate-x-2 smooth-transition" />
          </button>
          <button className="btn-secondary">
            My Story
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <p className="text-sm text-dark-400">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-accent-400 rounded-full flex items-center justify-center">
            <div className="w-1 h-2 bg-accent-400 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
