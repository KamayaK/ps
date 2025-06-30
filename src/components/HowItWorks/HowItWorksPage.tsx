import React from 'react'
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