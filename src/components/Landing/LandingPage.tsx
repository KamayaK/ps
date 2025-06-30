import React from 'react'
import { HeroSection } from './HeroSection'
import { InfoGrid } from './InfoGrid'
import { VideoSection } from './VideoSection'
import { Footer } from './Footer'

export function LandingPage() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <HeroSection />
      <InfoGrid />
      <VideoSection />
      <Footer />
    </div>
  )
}