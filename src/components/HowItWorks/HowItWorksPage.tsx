import React, { useEffect } from 'react'
import { HowItWorksHero } from './HowItWorksHero'
import { MissionOverview } from './MissionOverview'
import { PriceSurveillance } from './PriceSurveillance'
import { TargetAcquisition } from './TargetAcquisition'
import { DeploymentStrategy } from './DeploymentStrategy'
import { TacticalFeatures } from './TacticalFeatures'
import { FutureTargets } from './FutureTargets'
import { MissionSuccess } from './MissionSuccess'
import { SupportDivision } from './SupportDivision'
import { Footer } from '../Landing/Footer'

export function HowItWorksPage() {
  useEffect(() => {
    // Handle scroll to anchor on page load and hash changes
    const handleScrollToAnchor = () => {
      const hash = window.location.hash
      if (hash) {
        // Remove the # from the hash
        const elementId = hash.substring(1)
        const element = document.getElementById(elementId)
        
        if (element) {
          // Add a small delay to ensure the page has fully rendered
          setTimeout(() => {
            const headerOffset = 80 // Account for any fixed headers
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            })
          }, 100)
        }
      }
    }

    // Handle initial load
    handleScrollToAnchor()

    // Handle hash changes (when user clicks anchor links)
    const handleHashChange = () => {
      handleScrollToAnchor()
    }

    window.addEventListener('hashchange', handleHashChange)

    // Cleanup event listener
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
      <HowItWorksHero />
      <MissionOverview />
      <PriceSurveillance />
      <TargetAcquisition />
      <DeploymentStrategy />
      <TacticalFeatures />
      <FutureTargets />
      <MissionSuccess />
      <SupportDivision />
      <Footer />
    </div>
  )
}